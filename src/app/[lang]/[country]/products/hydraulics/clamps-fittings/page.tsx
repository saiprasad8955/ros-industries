import { getDictionary } from '@/app/utils/get-dictionary';
import { Settings, Cylinder, Link as LinkIcon, ShieldCheck, Wrench } from 'lucide-react';

export default async function ClampsFittingsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.clamps_fittings_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
                <div className="container-custom relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-white/5 py-1 px-3 rounded-full border border-white/10 backdrop-blur-md">
                        <Wrench className="w-4 h-4" />
                        <span>Connection Technology</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            <div className="container-custom py-16 space-y-12">

                {/* Hose Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-ros-blue/10 rounded-xl text-ros-blue">
                                    <Cylinder className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{t.hose_section.title}</h2>
                            </div>

                            <div className="space-y-4 mb-8">
                                {t.hose_section.details.map((detail: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-700">
                                        <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-3 uppercase text-xs tracking-wider">Available Types</h3>
                                <div className="flex flex-wrap gap-2">
                                    {t.hose_section.types.map((type: string, i: number) => (
                                        <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 shadow-sm">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 h-80 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 relative overflow-hidden">
                        {/* Placeholder for Hoses Image (Image 2 - Top/Side) */}
                        <span className="text-lg font-medium">Hydraulic Hoses Image</span>
                    </div>
                </div>

                {/* Accessories / Clamps Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-80 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 relative overflow-hidden">
                        {/* Placeholder for Clamps Image (Image 2 - Bottom) */}
                        <span className="text-lg font-medium">Clamps & Fittings Image</span>
                    </div>
                    <div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-ros-orange/10 rounded-xl text-ros-orange">
                                    <LinkIcon className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{t.accessories_section.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {t.accessories_section.items.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 border rounded-xl border-gray-100 hover:border-ros-blue/30 transition-colors bg-gray-50">
                                        <div className="w-2 h-2 mt-2 bg-ros-gray-dark rounded-full flex-shrink-0"></div>
                                        <span className="text-lg font-medium text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
