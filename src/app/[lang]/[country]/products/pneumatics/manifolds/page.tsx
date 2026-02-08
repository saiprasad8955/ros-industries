import { getDictionary } from '@/app/utils/get-dictionary';
import { Boxes, Layout, Layers, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function PneumaticManifoldsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_manifolds_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            <section className="pt-32 pb-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/pneumatic-manifold.png"
                                alt="Pneumatic Manifold"
                                fill
                                className="object-cover"
                                sizes="50vw"
                            />
                        </div>
                        <div>
                            <span className="text-ros-orange font-bold uppercase tracking-widest text-xs mb-4 block">Centralized Distribution</span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight text-ros-blue">
                                {t.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-medium">
                                {t.subtitle}
                            </p>
                            <div className="space-y-4">
                                {t.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <div className="w-8 h-8 rounded-lg bg-ros-blue/10 flex items-center justify-center text-ros-blue">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-800 font-bold">{feature}</span>
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
