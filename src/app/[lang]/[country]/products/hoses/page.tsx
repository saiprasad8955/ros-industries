import { getDictionary } from '@/app/utils/get-dictionary';
import { Shield, Check, Info, Zap } from 'lucide-react';
import HydraulicTable from '@/components/HydraulicTable';



import Image from 'next/image';

// Server Component for the Page
export default async function HosesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.hoses_page;

    if (!t) return null;

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            {/* Header */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hoses-bg.png"
                        alt="High Pressure Hoses"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="container-custom relative z-10 flex justify-center">
                    <div className="text-center max-w-4xl mx-auto bg-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50">
                        <span className="inline-block py-1 px-3 rounded-md bg-ros-blue/10 border border-ros-blue/20 text-ros-blue text-xs font-bold uppercase tracking-wider mb-6">
                            Product Range
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 drop-shadow-sm">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom -mt-10 relative z-20 space-y-12">

                {/* 1. Hydraulic Hoses Table Section */}
                <HydraulicTable t={t.hydraulics} />

                {/* 2. PTFE Hoses */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{t.ptfe.title}</h2>
                            <p className="text-sm text-gray-500 font-medium">Temp Range: {t.ptfe.temp_range}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.ptfe.items.map((item: any, i: number) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-teal-500/50 transition-colors">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Thermoplastic Hoses */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-ros-orange border border-orange-100">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{t.thermoplastic.title}</h2>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 mb-8 max-w-3xl">{t.thermoplastic.desc}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {t.thermoplastic.items.map((item: any, i: number) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-ros-orange shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Specialty Hoses */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                            <Check className="w-6 h-6" />
                        </div>
                        {t.specialty.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.specialty.items.map((item: any, i: number) => (
                            <div key={i} className="group relative overflow-hidden bg-gray-900 rounded-xl p-8 text-white border border-gray-200">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Info className="w-32 h-32 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 relative z-10 text-white">{item.name}</h3>
                                <p className="text-gray-300 text-sm relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Hose Guards */}
                <section className="bg-white rounded-xl p-8 border-l-4 border-gray-100 shadow-sm border-r border-t border-b">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.guards.title}</h2>
                            <p className="text-gray-600 max-w-2xl">{t.guards.desc}</p>
                        </div>
                        <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-100 text-center">
                            <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1">Specification</span>
                            <span className="font-bold text-ros-blue text-lg">{t.guards.spec}</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}


