import { getDictionary } from '@/app/utils/get-dictionary';
import AboutView from './AboutView';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <AboutView dict={dict.about} />;
}
