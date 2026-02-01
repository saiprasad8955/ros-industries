import { getDictionary } from '@/app/utils/get-dictionary';
import { Hammer, Cog, Ruler, MonitorPlay, Component, ArrowRight } from 'lucide-react';

export default async function FabricationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.fabrication_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-ros-blue/10 skew-x-12"></div>
                <div className="container-custom relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-white/5 py-1 px-3 rounded-full border border-white/10 backdrop-blur-md">
                        <Hammer className="w-4 h-4" />
                        <span>Engineering Services</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            <div className="container-custom py-16 space-y-20">

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.services.map((service: any, idx: number) => {
                        const icons = [Component, Cog, Ruler];
                        const Icon = icons[idx];

                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-ros-gray-light flex items-center justify-center mb-6 text-ros-gray-dark">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Capabilities Feature Section */}
                <div className="bg-ros-gray-dark text-white rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <MonitorPlay className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Advanced Manufacturing Capabilities</h2>
                            <p className="text-gray-400 mb-8 max-w-md">Our state-of-the-art facility is equipped to handle complex fabrication and precision machining projects with verifiable quality.</p>
                            <a href="#contact" className="inline-flex items-center bg-ros-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {t.capabilities.map((cap: string, i: number) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-ros-blue rounded-full"></div>
                                    <span className="font-medium">{cap}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
