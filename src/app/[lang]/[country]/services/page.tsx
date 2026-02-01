import { getDictionary } from '@/app/utils/get-dictionary';
import { Wrench, Warehouse, Hammer } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

// Reusable Service Card Component
const ServiceColumn = ({
    title,
    desc,
    features,
    icon: Icon
}: {
    title: string,
    desc: string,
    features: string[],
    icon: LucideIcon
}) => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-16 h-16 bg-ros-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-ros-blue" />
            </div>
            <h3 className="text-2xl font-bold text-ros-gray-dark mb-4 group-hover:text-ros-blue transition-colors">{title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed h-20">{desc}</p>

            <ul className="space-y-4">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ros-orange flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className="mt-8 w-full py-3 rounded-lg border border-ros-blue text-ros-blue font-semibold hover:bg-ros-blue hover:text-white transition-all duration-300">
                Learn More
            </button>
        </div>
    );
};

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    // Force fresh dictionary fetch
    const dict = await getDictionary(lang);
    const t = dict.services_page;

    return (
        <div className="bg-ros-gray-light min-h-[calc(100vh-72px)]">
            {/* Header Section */}
            <section className="bg-ros-gray-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-ros-blue/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-ros-blue text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                        Expert Support
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ServiceColumn
                            title={t.hydraulics.title}
                            desc={t.hydraulics.desc}
                            features={t.hydraulics.features}
                            icon={Wrench}
                        />
                        <ServiceColumn
                            title={t.shed.title}
                            desc={t.shed.desc}
                            features={t.shed.features}
                            icon={Warehouse}
                        />
                        <ServiceColumn
                            title={t.fabrication.title}
                            desc={t.fabrication.desc}
                            features={t.fabrication.features}
                            icon={Hammer}
                        />
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pb-24 pt-8">
                <div className="container-custom">
                    <div className="bg-ros-blue rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Wrench className="w-64 h-64 text-white" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                            <p className="text-blue-100 max-w-xl mx-auto mb-8 text-lg">
                                Our engineering team is ready to analyze your specific requirements and propose a tailored maintenance or fabrication plan.
                            </p>
                            <a href="#contact" className="inline-block bg-white text-ros-blue px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                Schedule a Site Visit
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
