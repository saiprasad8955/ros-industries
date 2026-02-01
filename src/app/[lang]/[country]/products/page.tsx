import { getDictionary } from '@/app/utils/get-dictionary';
import Link from 'next/link';
import { ArrowRight, Settings, Cylinder, Warehouse, Hammer, Box } from 'lucide-react';

export default async function ProductsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang, country } = await params;
    const dict = await getDictionary(lang);
    const t = dict.products_page;

    const iconMap: Record<string, any> = {
        "Settings": Settings,
        "Cylinder": Cylinder,
        "Warehouse": Warehouse,
        "Hammer": Hammer,
        "ArrowRight": ArrowRight,
        "Box": Box
    };

    return (
        <div className="bg-ros-gray-light min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-md bg-ros-blue/20 border border-ros-blue/30 text-ros-blue text-xs font-bold uppercase tracking-wider mb-6">
                        Complete Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.categories.map((category: any, idx: number) => {
                            const Icon = iconMap[category.icon] || Box;
                            const isLink = category.href && category.href !== '#';
                            const href = isLink ? `/${lang}/${country}${category.href}` : '#';

                            return (
                                <Link
                                    href={href}
                                    key={idx}
                                    className={`group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-ros-blue/20 flex flex-col items-start h-full ${!isLink ? 'cursor-default opacity-80' : ''}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 ${isLink ? 'bg-ros-blue/5 group-hover:scale-110 group-hover:bg-ros-blue/10 text-ros-blue' : 'bg-gray-100 text-gray-400'}`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ros-blue transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                        {category.desc}
                                    </p>

                                    {isLink && (
                                        <div className="flex items-center text-sm font-bold text-ros-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                                            Explore Range <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
