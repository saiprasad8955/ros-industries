import { getDictionary } from '@/app/utils/get-dictionary';
import { ShieldCheck, Zap, ArrowUpCircle, Settings, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default async function PressureIntensifiersPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pressure_intensifiers_page;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pressure-intensifier-bg.png"
                        alt="Hydraulic Pressure Intensifiers"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-ros-gray-dark/60 mix-blend-multiply" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <span className="text-ros-orange font-bold uppercase tracking-widest text-sm mb-4 block">Power Multiplication</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Features */}
                        <div className="bg-ros-gray-light p-12 rounded-[3rem]">
                            <h2 className="text-3xl font-bold text-gray-900 mb-10">Performance Advantages</h2>
                            <div className="space-y-6">
                                {t.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-ros-orange group-hover:scale-110 transition-transform">
                                            <ArrowUpCircle className="w-6 h-6" />
                                        </div>
                                        <span className="text-gray-800 font-bold text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Applications */}
                        <div className="p-12 border-2 border-ros-gray-light rounded-[3rem]">
                            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Typical Applications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {t.applications.map((app: string, idx: number) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-ros-blue/10 rounded-full flex items-center justify-center text-ros-blue mb-4">
                                            <Settings className="w-6 h-6" />
                                        </div>
                                        <span className="text-gray-900 font-bold">{app}</span>
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
