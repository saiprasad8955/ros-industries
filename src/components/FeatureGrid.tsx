'use client';

import { Dictionary } from '@/app/dictionaries';
import { motion } from 'framer-motion';
import { Settings, Cylinder, Warehouse, Hammer, ArrowUpRight } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function FeatureGrid({ dict }: { dict?: Dictionary['feature_grid'] }) {
    if (!dict) return null;

    const features = [
        {
            name: dict.feat_1_title,
            description: dict.feat_1_desc,
            icon: Settings,
            stat: dict.feat_1_stat
        },
        {
            name: dict.feat_2_title,
            description: dict.feat_2_desc,
            icon: Cylinder,
            stat: dict.feat_2_stat
        },
        {
            name: dict.feat_3_title,
            description: dict.feat_3_desc,
            icon: Warehouse,
            stat: dict.feat_3_stat
        },
        {
            name: dict.feat_4_title,
            description: dict.feat_4_desc,
            icon: Hammer,
            stat: dict.feat_4_stat
        },
    ];

    return (
        <section className="py-24 bg-ros-gray-light" id="capabilities">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="h2-section">{dict.title}</h2>
                    <p className="text-lg text-gray-600">
                        {dict.subtitle}
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature) => (
                        <motion.div key={feature.name} variants={item} className="group cursor-pointer">
                            <div className="relative h-full bg-white p-8 rounded-xl shadow-sm border border-transparent hover:border-ros-blue/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <feature.icon className="w-32 h-32 text-ros-blue" />
                                </div>

                                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-ros-blue/10 text-ros-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>

                                <h3 className="text-xl font-bold text-ros-gray-dark mb-3 group-hover:text-ros-blue transition-colors">
                                    {feature.name}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <span className="text-sm font-semibold text-ros-gray-medium">{feature.stat}</span>
                                    <span className="text-ros-blue opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
