import { getDictionary } from '@/app/utils/get-dictionary';
import { Filter, Wind, Droplets, Settings, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default async function AirPreparationPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_air_preparation_page;

    const sectionIcons = {
        filter: Filter,
        regulator: Settings,
        lubricator: Droplets
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Minimalist Hero */}
            <section className="bg-ros-gray-dark text-white pt-40 pb-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-ros-orange font-bold uppercase tracking-widest text-sm mb-6 block">Clean Air Supply</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* FRL Components */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {Object.entries(t.sections).map(([key, section]: [string, any], idx: number) => {
                            const Icon = sectionIcons[key as keyof typeof sectionIcons] || Wind;
                            return (
                                <div key={idx} className="flex flex-col items-center text-center p-12 rounded-[3.5rem] bg-ros-gray-light hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-transparent hover:border-ros-blue/10">
                                    <div className="w-24 h-24 rounded-3xl bg-white shadow-sm flex items-center justify-center text-ros-blue mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-6">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {section.desc}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Quality Standard */}
            <section className="py-20 border-t border-gray-100">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full font-bold text-sm">
                        <ShieldCheck className="w-5 h-5" />
                        Compliant with Industrial ISO Air Quality Standards
                    </div>
                </div>
            </section>
        </div>
    );
}
