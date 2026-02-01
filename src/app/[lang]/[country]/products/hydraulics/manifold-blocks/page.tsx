import { getDictionary } from '@/app/utils/get-dictionary';
import { Boxes, Box } from 'lucide-react';

export default async function ManifoldsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.manifolds_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 text-ros-blue font-semibold uppercase tracking-wider text-xs bg-white/5 py-1 px-3 rounded-full border border-white/10 backdrop-blur-md">
                        <Boxes className="w-4 h-4" />
                        <span>System Integration</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            <div className="container-custom py-16">
                {/* Manifolds Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.types.map((type: any, idx: number) => (
                        <div key={idx} className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                            <div className="bg-gray-100 rounded-xl aspect-square w-full mb-6 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-ros-gray-dark/5 group-hover:bg-ros-gray-dark/0 transition-colors"></div>
                                {/* Placeholder for Manifold Images */}
                                <Box className="w-16 h-16 text-gray-300" />
                                <span className="absolute bottom-4 text-xs text-gray-400 font-mono">Image {idx + 1}</span>
                            </div>

                            <div className="px-6 pb-8 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
