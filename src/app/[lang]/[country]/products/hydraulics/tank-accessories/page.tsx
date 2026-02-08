import { getDictionary } from '@/app/utils/get-dictionary';
import { Settings, Gauge, Droplet, Filter, Wind } from 'lucide-react';
import Image from 'next/image';

export default async function TankAccessoriesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.tank_accessories_page;

    // Mapping icons for visual appeal
    const getIcon = (item: string) => {
        if (item.toLowerCase().includes('breather')) return Wind;
        if (item.toLowerCase().includes('gauge')) return Gauge;
        if (item.toLowerCase().includes('drain')) return Droplet;
        if (item.toLowerCase().includes('strainer') || item.toLowerCase().includes('filter')) return Filter;
        return Settings;
    }

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/tank-accessories-bg.png"
                        alt="Hydraulic Tank Accessories"
                        fill
                        className="object-cover opacity-80 mix-blend-overlay"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="container-custom relative z-10 flex justify-center">
                    <div className="text-center max-w-4xl mx-auto bg-ros-gray-dark/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10">
                        <div className="inline-flex items-center gap-2 mb-6 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-white/5 py-1 px-3 rounded-full border border-white/10">
                            <Settings className="w-4 h-4" />
                            <span>Hydraulic Components</span>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Content Section */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                            {t.list_title}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {t.items.map((item: string, idx: number) => {
                                const Icon = getIcon(item);
                                return (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-ros-gray-light transition-colors duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-ros-blue/10 flex items-center justify-center text-ros-blue shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-gray-800 self-center">{item}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-12">
                            <a href="#contact" className="w-full block text-center bg-ros-blue text-white font-bold py-4 rounded-xl hover:bg-ros-gray-dark transition-colors shadow-lg">
                                Request Specification Sheet
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-96 flex items-center justify-center relative overflow-hidden group">
                            <Image
                                src="/tank-accessories-group.png"
                                alt="Hydraulic Accessories Collection"
                                fill
                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="bg-ros-gray-dark text-white p-8 rounded-2xl flex flex-col justify-center grow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Settings className="w-48 h-48 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 relative z-10 text-black">Why Choose Our Accessories?</h3>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-center gap-2 font-medium text-gray-800"><div className="w-1.5 h-1.5 bg-ros-blue rounded-full"></div>Extended Component Life</li>
                                <li className="flex items-center gap-2 font-medium text-gray-800"><div className="w-1.5 h-1.5 bg-ros-blue rounded-full"></div>Reduced Contamination</li>
                                <li className="flex items-center gap-2 font-medium text-gray-800"><div className="w-1.5 h-1.5 bg-ros-blue rounded-full"></div>Simplified Maintenance</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
