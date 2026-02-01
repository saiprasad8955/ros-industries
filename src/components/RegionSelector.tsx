import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Globe, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useParams, usePathname } from 'next/navigation';

type Region = {
    name: string;
    countries: {
        name: string;
        code: string;
        languages: { name: string; code: string }[];
    }[];
};

const regions: Region[] = [
    {
        name: 'North America',
        countries: [
            { name: 'United States', code: 'us', languages: [{ name: 'English', code: 'en' }] },
            { name: 'Canada', code: 'ca', languages: [{ name: 'English', code: 'en' }, { name: 'Français', code: 'fr' }] },
            { name: 'Mexico', code: 'mx', languages: [{ name: 'Español', code: 'es' }] },
        ],
    },
    {
        name: 'Europe',
        countries: [
            { name: 'Germany', code: 'de', languages: [{ name: 'Deutsch', code: 'de' }, { name: 'English', code: 'en' }] },
            { name: 'France', code: 'fr', languages: [{ name: 'Français', code: 'fr' }] },
            { name: 'United Kingdom', code: 'uk', languages: [{ name: 'English', code: 'en' }] },
            { name: 'Italy', code: 'it', languages: [{ name: 'Italiano', code: 'es' }] }, // Fallback to ES or EN for demo if IT not generic
        ],
    },
    {
        name: 'Asia Pacific',
        countries: [
            { name: 'China (Mainland)', code: 'cn', languages: [{ name: '简体中文', code: 'en' }] }, // Fallback EN for demo
            { name: 'Japan', code: 'jp', languages: [{ name: '日本語', code: 'en' }] }, // Fallback EN
            { name: 'India', code: 'in', languages: [{ name: 'English', code: 'en' }] },
        ],
    },
];

export default function RegionSelector({ lang, country }: { lang?: string, country?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();

    const currentLang = lang || (params?.lang as string) || 'en';
    const currentCountry = country || (params?.country as string) || 'us';

    // Find current display names
    const getCurrentLabel = () => {
        for (const region of regions) {
            for (const country of region.countries) {
                if (country.code === currentCountry) {
                    const lang = country.languages.find(l => l.code === currentLang);
                    // Compact format: CountryCode · LangCode (e.g., US · EN)
                    return `${country.code.toUpperCase()} · ${lang ? lang.code.toUpperCase() : currentLang.toUpperCase()}`;
                }
            }
        }
        return 'US · EN';
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSelect = (countryCode: string, langCode: string) => {
        // Construct new path preserving the route suffix
        // Path is usually /lang/country/rest...
        const segments = pathname.split('/');
        // segments[0] is empty string (path starts with /), segments[1] is lang, segments[2] is country
        if (segments.length >= 3) {
            segments[1] = langCode;
            segments[2] = countryCode;
            router.push(segments.join('/'));
        } else {
            // Fallback if path structure is unexpected
            router.push(`/${langCode}/${countryCode}`);
        }
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold text-ros-gray-dark hover:text-ros-blue transition-colors group"
            >
                <Globe className="h-5 w-5 text-gray-500 group-hover:text-ros-blue transition-colors" />
                <span className=" text-gray-600 group-hover:text-ros-blue transition-colors">{getCurrentLabel()}</span>
            </button>

            {mounted && isOpen && createPortal(
                <AnimatePresence>
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Sidebar Branding */}
                            <div className="hidden md:flex flex-col justify-between w-64 bg-ros-gray-dark p-8 text-white shrink-0">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Choose Region</h3>
                                    <p className="text-gray-400 text-sm">
                                        Select your location and preferred language to see local content, products, and support services.
                                    </p>
                                </div>
                                <div className="text-sm text-gray-500">
                                    &copy; ROS Industries
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-ros-gray-dark md:hidden">Select Location</h2>
                                    <h2 className="text-2xl font-bold text-ros-gray-dark hidden md:block">Global Presence</h2>
                                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <X className="h-6 w-6 text-gray-500" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {regions.map((region) => (
                                        <div key={region.name}>
                                            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-4 border-b border-gray-100 pb-2">
                                                {region.name}
                                            </h4>
                                            <ul className="space-y-3">
                                                {region.countries.map((country) => (
                                                    <li key={country.name} className="group">
                                                        <div className="font-medium text-ros-gray-dark mb-1">{country.name}</div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {country.languages.map((lang) => {
                                                                const isActive = currentCountry === country.code && currentLang === lang.code;
                                                                return (
                                                                    <button
                                                                        key={lang.code}
                                                                        onClick={() => handleSelect(country.code, lang.code)}
                                                                        className={`text-xs px-2 py-1 rounded border transition-all flex items-center gap-1 ${isActive
                                                                            ? 'bg-ros-blue text-white border-ros-blue'
                                                                            : 'bg-white text-gray-500 border-gray-200 hover:border-ros-blue hover:text-ros-blue'
                                                                            }`}
                                                                    >
                                                                        {lang.name}
                                                                        {isActive && <Check className="h-3 w-3" />}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
