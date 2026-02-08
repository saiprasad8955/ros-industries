import { getDictionary } from '@/app/utils/get-dictionary';
import { Warehouse, CheckCircle2, Ruler, Cog } from 'lucide-react';
import Image from 'next/image';

export default async function IndustrialShedPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.industrial_shed_page;

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sheds-bg.png"
                        alt="Industrial Sheds"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="container-custom relative z-10 flex justify-center">
                    <div className="text-center max-w-4xl mx-auto bg-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50">
                        <div className="inline-flex items-center gap-2 mb-6 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-ros-blue/10 py-1 px-3 rounded-full border border-ros-blue/20">
                            <Warehouse className="w-4 h-4" />
                            <span>Infrastructure Solutions</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 drop-shadow-sm">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom py-16">

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200 border border-gray-100 flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.feature_title}</h2>

                        <div className="space-y-6">
                            {t.features.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-ros-blue/10 flex items-center justify-center text-ros-blue shrink-0">
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
                                <Ruler className="w-8 h-8 mx-auto text-ros-blue/70 mb-2" />
                                <span className="text-sm text-gray-500 font-medium">Custom Dimensions</span>
                            </div>
                            <div className="text-center">
                                <Cog className="w-8 h-8 mx-auto text-ros-blue/70 mb-2" />
                                <span className="text-sm text-gray-500 font-medium">Quick Assembly</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-gray-50 relative min-h-[400px] flex items-center justify-center group overflow-hidden">
                        {/* Image generation failed, utilizing header bg again or just visual pattern */}
                        <Image
                            src="/sheds-bg.png"
                            alt="Industrial Structure Detail"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-ros-blue/20 mix-blend-overlay" />

                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                            <div className="flex items-center gap-4">
                                <div className="bg-ros-orange p-3 rounded-full text-white">
                                    <Warehouse className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Heavy Duty Construction</p>
                                    <p className="text-sm text-gray-600">Engineered for durability</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
