import { getDictionary } from '@/app/utils/get-dictionary';
import { ArrowLeft, RefreshCcw, Maximize, Settings, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function RotaryActuatorsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang, country } = await params;
    const dict = await getDictionary(lang);
    const t = dict.rotary_actuators_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Nav Back */}
            <div className="container-custom pt-32 pb-8">
                <Link
                    href={`/${lang}/${country}/products/hydraulics`}
                    className="inline-flex items-center text-ros-blue font-semibold hover:gap-2 transition-all duration-300"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hydraulics
                </Link>
            </div>

            {/* Product Section */}
            <section className="pb-24">
                <div className="container-custom">
                    <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Content */}
                            <div className="p-12 md:p-16 flex flex-col justify-center">
                                <span className="text-ros-blue font-bold tracking-widest uppercase text-xs mb-4">Precision Motion</span>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                                    {t.title}
                                </h1>
                                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                                    {t.subtitle}
                                </p>

                                <div className="space-y-6 mb-12">
                                    {t.features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-ros-blue/5 flex items-center justify-center text-ros-blue group-hover:bg-ros-blue group-hover:text-white transition-colors duration-300">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="text-gray-800 font-semibold text-lg">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="relative bg-linear-to-br from-gray-50 to-ros-gray-light min-h-[500px] flex items-center justify-center">
                                <Image
                                    src="/rotary-actuator.png"
                                    alt="Hydraulic Rotary Actuator"
                                    width={600}
                                    height={600}
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                                <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-bold text-gray-900 tracking-tight">Available in multiple torque ranges</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Types Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {t.types.map((type: any, idx: number) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-ros-gray-light rounded-2xl flex items-center justify-center text-gray-400 mb-8 group-hover:bg-ros-blue/10 group-hover:text-ros-blue transition-colors">
                                    {idx === 0 ? <RefreshCcw className="w-8 h-8" /> : idx === 1 ? <Settings className="w-8 h-8" /> : <Maximize className="w-8 h-8" />}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.name}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {type.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
