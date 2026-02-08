import { getDictionary } from '@/app/utils/get-dictionary';
import { Cpu, Maximize2, Settings2, ShieldCheck, Check } from 'lucide-react';
import Image from 'next/image';

export default async function PneumaticCylindersPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_cylinders_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-white pt-32 pb-20 border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-ros-orange font-bold uppercase tracking-widest text-xs mb-4 block">Precision Actuation</span>
                            <h1 className="text-4xl text-ros-blue md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                {t.title}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
                                {t.subtitle}
                            </p>

                            <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
                                <div>
                                    <span className="text-gray-400 text-sm font-bold uppercase mb-2 block tracking-tighter">Materials</span>
                                    <span className="text-gray-900 font-extrabold text-lg">{t.specs.material}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm font-bold uppercase mb-2 block tracking-tighter">Bore Sizes</span>
                                    <span className="text-gray-900 font-extrabold text-lg">{t.specs.bore}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm font-bold uppercase mb-2 block tracking-tighter">Standards</span>
                                    <span className="text-gray-900 font-extrabold text-lg">{t.specs.standard}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm font-bold uppercase mb-2 block tracking-tighter">Stroke</span>
                                    <span className="text-gray-900 font-extrabold text-lg">{t.specs.stroke}</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square group">
                            <div className="absolute inset-0 bg-ros-blue/5 rounded-[4rem] group-hover:scale-105 transition-transform duration-700" />
                            <Image
                                src="/pneumatic-cylinder.png"
                                alt="Pneumatic Cylinder"
                                width={600}
                                height={600}
                                className="relative z-10 object-contain drop-shadow-2xl p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Core Actuator Types</h2>
                        <div className="h-1.5 w-24 bg-ros-blue mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.types.map((type: any, idx: number) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-ros-blue/5 rounded-2xl flex items-center justify-center text-ros-blue mb-6">
                                    {idx === 0 ? <Zap className="w-8 h-8" /> : idx === 1 ? <Maximize2 className="w-8 h-8" /> : idx === 2 ? <Settings2 className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
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

// Icon for Zap since it's not imported
import { Zap } from 'lucide-react';
