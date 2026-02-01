import { getDictionary } from '@/app/utils/get-dictionary';
import { Warehouse, CheckCircle2, Ruler, Cog } from 'lucide-react';

export default async function IndustrialShedPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.industrial_shed_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30"></div>
                <div className="container-custom relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-white/5 py-1 px-3 rounded-full border border-white/10 backdrop-blur-md">
                        <Warehouse className="w-4 h-4" />
                        <span>Infrastructure Solutions</span>
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

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.feature_title}</h2>

                        <div className="space-y-6">
                            {t.features.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-ros-blue/10 flex items-center justify-center text-ros-blue flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                                            {feature}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-8">
                            <div className="text-center">
                                <Ruler className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                <span className="text-sm text-gray-500 font-medium">Custom Dimensions</span>
                            </div>
                            <div className="text-center">
                                <Cog className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                <span className="text-sm text-gray-500 font-medium">Quick Assembly</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-gray-100 relative min-h-[400px]">
                        {/* Placeholder for Industrial Shed Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-200">
                            Industrial Shed Images provided by user (To be inserted)
                        </div>
                        {/* We can use the images uploaded by the user here in a real implementation */}
                        {/* User uploaded 2 images, one of them showing sheds. */}
                    </div>
                </div>

            </div>
        </div>
    );
}
