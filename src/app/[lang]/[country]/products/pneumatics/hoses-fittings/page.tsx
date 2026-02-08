import { getDictionary } from '@/app/utils/get-dictionary';
import { Link2, Droplets, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

export default async function PneumaticHosesFittingsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_hoses_fittings_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pneumatic-hoses-hero.png"
                        alt="Pneumatic Hoses and Fittings"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-ros-blue/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-linear-to-r from-ros-gray-dark via-ros-gray-dark/40 to-transparent" />
                </div>

                <div className="container-custom relative z-10 text-white">
                    <div className="max-w-2xl">
                        <span className="text-ros-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block">Transmission & Connections</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[0.9] tracking-tighter">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-lg">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* List Sections */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Hoses */}
                        <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-ros-blue/10 group-hover:text-ros-blue/20 transition-colors">
                                <Droplets className="w-32 h-32" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 relative z-10">Industrial Hoses</h2>
                            <div className="space-y-6 relative z-10">
                                {t.hoses.map((hose: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-ros-gray-light hover:bg-ros-blue hover:text-white transition-all duration-300 cursor-default">
                                        <div className="w-2 h-2 rounded-full bg-ros-blue group-hover:bg-white" />
                                        <span className="font-bold text-lg">{hose}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fittings */}
                        <div className="bg-ros-blue rounded-[2.5rem] p-12 shadow-xl border border-ros-blue relative overflow-hidden group text-white">
                            <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:text-white/20 transition-colors">
                                <Link2 className="w-32 h-32 rotate-45" />
                            </div>
                            <h2 className="text-4xl font-extrabold mb-10 relative z-10">Engineering Fittings</h2>
                            <div className="space-y-6 relative z-10">
                                {t.fittings.map((fitting: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-white/10 hover:bg-white hover:text-ros-blue transition-all duration-300 cursor-default">
                                        <Check className="w-6 h-6 shrink-0" />
                                        <span className="font-bold text-lg">{fitting}</span>
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
