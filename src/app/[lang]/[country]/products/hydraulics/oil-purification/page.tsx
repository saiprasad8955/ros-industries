import { getDictionary } from '@/app/utils/get-dictionary';
import { ShieldCheck, Zap, Droplets, Settings, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default async function OilPurificationPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.oil_purification_page;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/oil-purification-hero.png"
                        alt="Oil Purification"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-ros-gray-dark/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-1 w-12 bg-ros-blue rounded-full" />
                            <span className="text-ros-blue font-bold uppercase tracking-widest text-sm">Industrial Purification</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-100 font-medium leading-relaxed drop-shadow-md">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* LVDH Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-ros-blue font-semibold mb-2 block">Advanced Dehydration</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                {t.lvdh.title}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {t.lvdh.desc}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {t.lvdh.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <CheckCircle className="w-5 h-5 text-ros-blue shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/lvdh-machine.png"
                                alt="LVDH Machine"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Centrifuge Section */}
            <section className="py-24 bg-ros-gray-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/centrifuge-separator.png"
                                alt="Centrifugal Separator"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-ros-orange font-semibold mb-2 block">High-G Separation</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                {t.centrifugal.title}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {t.centrifugal.desc}
                            </p>
                            <div className="space-y-4">
                                {t.centrifugal.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:border-ros-orange/30">
                                        <div className="w-10 h-10 rounded-full bg-ros-orange/10 flex items-center justify-center text-ros-orange">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-800 font-semibold">{feature}</span>
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
