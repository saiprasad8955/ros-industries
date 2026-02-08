import { getDictionary } from '@/app/utils/get-dictionary';
import Link from 'next/link';
import { ArrowRight, Wind, Activity, Zap, Cpu, Layers, Disc, Database, Thermometer } from 'lucide-react';
import Image from 'next/image';

export default async function PneumaticsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang, country } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_page;

    const icons = [Cpu, Activity, Wind, Zap, Layers, Database, Disc, Database];

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pneumatics-bg.png"
                        alt="Pneumatic Systems"
                        fill
                        className="object-cover opacity-90"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-ros-blue/10 mix-blend-multiply"></div>
                </div>
                <div className="container-custom relative z-10 flex justify-center">
                    <div className="text-center max-w-4xl mx-auto bg-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50">
                        <span className="inline-block py-1 px-3 rounded-full bg-ros-blue/10 border border-ros-blue/20 text-ros-blue text-xs font-bold uppercase tracking-wider mb-4">
                            Solutions & Automation
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

            {/* Categories Grid */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.categories.map((category: any, idx: number) => {
                            const Icon = icons[idx] || Wind;
                            return (
                                <Link
                                    href={category.href !== '#' ? `/${lang}/${country}${category.href}` : '#'}
                                    key={idx}
                                    className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-ros-blue/20"
                                >
                                    <div className="w-14 h-14 bg-ros-blue/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ros-blue/10 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-ros-blue" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ros-blue transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-2">
                                        {category.desc}
                                    </p>
                                    <div className="flex items-center text-sm font-semibold text-ros-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        View Products <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
