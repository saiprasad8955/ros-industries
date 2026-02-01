import { getDictionary } from '@/app/utils/get-dictionary';
import { Settings, Gauge, CheckCircle2 } from 'lucide-react';

export default async function PowerPacksPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.power_packs_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ros-blue/10 to-transparent pointer-events-none"></div>
                <div className="container-custom relative z-10">
                    <div className="flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs">
                        <Settings className="w-4 h-4" />
                        <span>Hydraulics</span>
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

                {/* Section 1: Hydraulic Power Pack */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-video shadow-lg relative group">
                            {/* Placeholder for Image 1 from user */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-medium">
                                Hydraulic Power Pack Image
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">{t.fe_1_title}</h2>
                        <ul className="space-y-4">
                            {t.fe_1_specs.map((spec: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-ros-blue/10 flex items-center justify-center text-ros-blue flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 2: Pneumatic System */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-video shadow-lg relative group">
                            {/* Placeholder for Image 2 from user */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-medium">
                                Pneumatic System Image
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">{t.fe_2_title}</h2>
                        <ul className="space-y-4">
                            {t.fe_2_specs.map((spec: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-ros-orange/10 flex items-center justify-center text-ros-orange flex-shrink-0">
                                        <Gauge className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
