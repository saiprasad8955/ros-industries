import { getDictionary } from '@/app/utils/get-dictionary';
import { Activity, Radio, Cpu, Settings, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function ValvesSensorsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_valves_sensors_page;

    return (
        <div className="bg-white min-h-screen">
            {/* Split Hero */}
            <section className="relative h-[60vh] md:h-[70vh] flex overflow-hidden">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-12 bg-ros-gray-dark text-white pt-32">
                    <div className="max-w-xl">
                        <span className="text-ros-orange font-bold uppercase tracking-[0.2em] text-xs mb-6 block">The Brain of Automation</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block w-1/2 relative">
                    <Image
                        src="/valves-sensors-hero.png"
                        alt="Pneumatic Valves and Sensors"
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-ros-blue/20 mix-blend-overlay" />
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {/* Valves */}
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-ros-blue/10 flex items-center justify-center text-ros-blue">
                                    <Settings className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Precision Control Valves</h2>
                            </div>
                            <div className="space-y-4">
                                {t.valves.map((valve: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 p-6 rounded-3xl bg-ros-gray-light hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                        <CheckCircle2 className="w-6 h-6 text-ros-blue group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-900 font-bold text-lg">{valve}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sensors */}
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-ros-orange/10 flex items-center justify-center text-ros-orange">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Digital Sensing</h2>
                            </div>
                            <div className="space-y-4">
                                {t.sensors.map((sensor: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 p-6 rounded-3xl bg-ros-gray-light hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                        <Activity className="w-6 h-6 text-ros-orange group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-900 font-bold text-lg">{sensor}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
