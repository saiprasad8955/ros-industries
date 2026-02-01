import { getDictionary } from '@/app/utils/get-dictionary';
import { Battery, CheckCircle2, Plus, ArrowRight } from 'lucide-react';

export default async function AccumulatorsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.accumulators_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                    <div className="absolute -left-20 bottom-0 w-96 h-96 bg-ros-blue/20 rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10">
                    <div className="flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs">
                        <Battery className="w-4 h-4 rotate-90" />
                        <span>Energy Storage</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            <div className="container-custom py-16 space-y-20">

                {/* Types Grid */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">{t.types.title}</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {t.types.list.map((type: string, idx: number) => (
                            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:border-ros-blue transition-colors group">
                                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-ros-blue/10 transition-colors">
                                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-ros-blue transition-colors"></div>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">{type}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features & Accessories Split */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Key Features */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <CheckCircle2 className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">{t.features.title}</h3>
                        <ul className="space-y-4 relative z-10">
                            {t.features.list.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-ros-blue flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Accessories */}
                    <div className="bg-ros-blue rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Plus className="w-6 h-6" />
                            {t.accessories.title}
                        </h3>
                        <ul className="space-y-4">
                            {t.accessories.list.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/20">
                            <p className="text-blue-100 text-sm mb-4">Need help selecting the right size?</p>
                            <a href="#contact" className="inline-flex items-center font-bold hover:text-white/80 transition-colors">
                                Contact Engineering Team <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
