import { getDictionary } from '@/app/utils/get-dictionary';
import { Filter, Check } from 'lucide-react';

export default async function FiltrationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.filtration_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs">
                        <Filter className="w-4 h-4" />
                        <span>Contamination Control</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            <div className="container-custom py-16">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-ros-blue rounded-full"></span>
                            {t.product_title}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {t.features.map((feature: string, i: number) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-ros-blue/20 flex items-center justify-center text-ros-blue group-hover:bg-ros-blue group-hover:text-white transition-colors">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed font-medium">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder for Filtration Image */}
                            <div className="text-gray-400 font-medium">Filtration Trolley Image</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
