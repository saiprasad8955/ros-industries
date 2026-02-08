import { getDictionary } from '@/app/utils/get-dictionary';
import { Database, ShieldCheck, Gauge, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function AirReservoirsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_air_reservoirs_page;

    return (
        <div className="bg-white min-h-screen">
            <section className="relative py-32 overflow-hidden">
                <div className="container-custom flex flex-col items-center text-center">
                    <span className="text-ros-orange font-bold uppercase tracking-widest text-xs mb-4">Storage & stability</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl font-medium mb-12">
                        {t.subtitle}
                    </p>

                    <div className="relative w-full max-w-lg aspect-square mb-16">
                        <div className="absolute inset-0 bg-ros-gray-light rounded-full scale-90 -z-10" />
                        <Image
                            src="/air-reservoir-tank.png"
                            alt="Industrial Air Receiver Tank"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left">
                        <div className="bg-ros-gray-light p-10 rounded-[2.5rem] border border-gray-100 h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    <Database className="w-6 h-6 text-ros-blue" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Key Specifications</h2>
                            </div>
                            <div className="space-y-4">
                                {t.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-ros-blue shrink-0" />
                                        <span className="text-gray-800 font-semibold">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-ros-gray-dark text-white p-10 rounded-[2.5rem] h-full shadow-xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <Gauge className="w-6 h-6 text-ros-orange" />
                                </div>
                                <h2 className="text-2xl font-bold">Standard Accessories</h2>
                            </div>
                            <div className="space-y-4">
                                {t.accessories.map((item: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-ros-orange" />
                                        <span className="text-gray-300 font-medium">{item}</span>
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
