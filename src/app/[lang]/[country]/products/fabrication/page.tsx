import { getDictionary } from '@/app/utils/get-dictionary';
import { Hammer, Cog, Ruler, MonitorPlay, Wrench, ArrowRight } from 'lucide-react';

import Image from 'next/image';

export default async function FabricationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.fabrication_page;

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fabrication-bg.png"
                        alt="Fabrication Workshop"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="container-custom relative z-10 flex justify-center">
                    <div className="text-center max-w-4xl mx-auto bg-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50">
                        <div className="inline-flex items-center gap-2 mb-6 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-ros-blue/10 py-1 px-3 rounded-full border border-ros-blue/20">
                            <Hammer className="w-4 h-4" />
                            <span>Engineering Services</span>
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

            <div className="container-custom py-16 space-y-20">

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.services.map((service: any, idx: number) => {
                        const icons = [Wrench, Cog, Ruler];
                        const Icon = icons[idx];

                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-ros-blue/10 flex items-center justify-center mb-6 text-ros-blue">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Capabilities Feature Section */}
                <div className="bg-black text-white rounded-3xl p-12 relative overflow-hidden border border-ros-gray-border">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <MonitorPlay className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">Advanced Manufacturing Capabilities</h2>
                            <p className="text-ros-gray-medium mb-8 max-w-md">Our state-of-the-art facility is equipped to handle complex fabrication and precision machining projects with verifiable quality.</p>
                            <a href="#contact" className="inline-flex items-center bg-ros-blue hover:bg-white hover:text-black text-black font-bold py-3 px-6 rounded-lg transition-colors">
                                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {t.capabilities.map((cap: string, i: number) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-ros-blue rounded-full"></div>
                                    <span className="font-medium text-gray-200">{cap}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
