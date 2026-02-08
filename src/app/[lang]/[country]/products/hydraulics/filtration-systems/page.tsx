import { getDictionary } from '@/app/utils/get-dictionary';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default async function FiltrationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.filtration_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/filtration-bg.png"
                        alt="Filtration Systems"
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
                            System Protection
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

            <div className="container-custom py-16">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-ros-blue rounded-full"></span>
                            {t.product_title}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {t.features.map((feature: string, i: number) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-ros-blue/20 flex items-center justify-center text-ros-blue group-hover:bg-ros-blue group-hover:text-white transition-colors">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed font-medium">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                        <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl aspect-4/3 w-full flex items-center justify-center relative overflow-hidden shadow-inner group">
                            {/* Filtration Image */}
                            <Image
                                src="/filtration-trolley.png"
                                alt="Filtration Trolley"
                                fill
                                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
