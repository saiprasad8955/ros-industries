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
                    <div className="w-20 h-20 bg-ros-blue/5 rounded-3xl flex items-center justify-center text-ros-blue mb-8">
                        <Database className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl font-medium mb-12">
                        {t.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                        <div className="bg-ros-gray-light p-10 rounded-[2.5rem] border border-gray-100">
                            <h2 className="text-2xl font-bold mb-8 text-left">Key Specifications</h2>
                            <div className="space-y-4">
                                {t.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 text-left">
                                        <CheckCircle2 className="w-5 h-5 text-ros-blue shrink-0" />
                                        <span className="text-gray-800 font-semibold">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-ros-gray-dark text-white p-10 rounded-[2.5rem]">
                            <h2 className="text-2xl font-bold mb-8 text-left">Standard Accessories</h2>
                            <div className="space-y-4">
                                {t.accessories.map((item: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 text-left">
                                        <Gauge className="w-5 h-5 text-ros-orange shrink-0" />
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
