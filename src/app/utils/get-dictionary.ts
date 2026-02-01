import { dictionaries } from '../dictionaries';
import { translate } from 'google-translate-api-x';

// Helper to flatten object keys
const flattenObj = (obj: any, prefix = '', res: any = {}) => {
    for (const key in obj) {
        const val = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof val === 'object' && val !== null) {
            flattenObj(val, newKey, res);
        } else {
            res[newKey] = val;
        }
    }
    return res;
};

// Helper to unflatten object keys
const unflattenObj = (obj: any) => {
    const res: any = {};
    for (const key in obj) {
        const keys = key.split('.');
        let current = res;
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const isLast = i === keys.length - 1;

            if (isLast) {
                current[k] = obj[key];
            } else {
                const nextKey = keys[i + 1];
                const isNextArrayIndex = !isNaN(Number(nextKey));

                if (!current[k]) {
                    current[k] = isNextArrayIndex ? [] : {};
                }

                current = current[k];
            }
        }
    }
    return res;
};

// Simple in-memory cache to prevent hitting rate limits during dev
const cache: Record<string, any> = {};

export const getDictionary = async (lang: string) => {
    // Return English immediately as base
    if (lang === 'en') {
        return dictionaries.en;
    }

    // Check cache - Disabled for dev to ensure updates are seen
    // if (cache[lang]) {
    //     console.log(`[Dictionary] Serving ${lang} from cache`);
    //     return cache[lang];
    // }

    console.log(`[Dictionary] Translating to ${lang}...`);

    try {
        const sourceDict = dictionaries.en;
        const flattened = flattenObj(sourceDict);
        const allKeys = Object.keys(flattened);

        // Keys to exclude from translation
        const excludedFields = ['href', 'icon', 'email', 'img'];

        const keysToTranslate = allKeys.filter(key => {
            const lastPart = key.split('.').pop();
            return !excludedFields.includes(lastPart || '');
        });

        const valuesToTranslate = keysToTranslate.map(key => flattened[key]);

        // Translate filtered values in batch
        const res = await translate(valuesToTranslate, { to: lang, forceBatch: false });

        // Map back to object
        const translatedFlattened: any = { ...flattened }; // Start with original containing all keys (including hrefs)

        if (Array.isArray(res)) {
            // Apply translations to the matching keys
            (res as any[]).forEach((t, i) => {
                const originalKey = keysToTranslate[i];
                translatedFlattened[originalKey] = t.text;
            });
        } else {
            // Fallback for single item (unlikely with this logic but safe)
            if (keysToTranslate.length > 0) {
                translatedFlattened[keysToTranslate[0]] = (res as any).text;
            }
        }

        const translatedDict = unflattenObj(translatedFlattened);

        // Cache the result
        cache[lang] = translatedDict;

        return translatedDict;

    } catch (error) {
        console.error(`[Dictionary] Translation failed for ${lang}:`, error);
        // Fallback to English
        return dictionaries.en;
    }
};
