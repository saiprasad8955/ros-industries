import { Dictionary } from '@/app/dictionaries';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

export default function Footer({ dict, lang, country }: { dict?: Dictionary['footer'], lang?: string, country?: string }) {
    if (!dict) return null;

    const prefix = `/${lang || 'en'}/${country || 'us'}`;

    const footerNav = {
        solutions: [
            { name: dict.links_solutions.hydraulics, href: `${prefix}/products/hydraulics` },
            { name: "Hoses", href: `${prefix}/products/hoses` },
            { name: "Industrial Sheds", href: `${prefix}/products/industrial-shed` },
            { name: "Fabrication", href: `${prefix}/products/fabrication` },
        ],
        focus: [
            { name: dict.links_focus.power_packs, href: `${prefix}/products/hydraulics/power-packs` },
            { name: dict.links_focus.filtration, href: `${prefix}/products/hydraulics/filtration-systems` },
            { name: dict.links_focus.manifolds, href: `${prefix}/products/hydraulics/manifold-blocks` },
            { name: dict.links_focus.accumulators, href: `${prefix}/products/hydraulics/accumulators` },
        ],
        quick: [
            { name: dict.links_quick.about, href: `${prefix}/about-us` },
            { name: "Request Quote", href: `${prefix}/request-quote` },
            { name: "Contact Us", href: `${prefix}/request-quote` },
            { name: "Admin Portal", href: '/admin/login' },
        ]
    };

    return (
        <footer className="bg-ros-gray-dark text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="container-custom pt-16 pb-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-ros-blue rounded flex items-center justify-center text-white font-bold text-lg">
                                R
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">ROS <span className="text-ros-blue">Industries</span></span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-400 max-w-sm">
                            {dict.desc}
                        </p>
                        <div className="flex space-x-6 text-gray-400">
                            {/* Social Icons */}
                            <a href="#" className="hover:text-ros-blue transition-colors"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></a>
                            <a href="#" className="hover:text-ros-blue transition-colors"><Twitter className="h-5 w-5" /><span className="sr-only">Twitter</span></a>
                            <a href="#" className="hover:text-ros-blue transition-colors"><Facebook className="h-5 w-5" /><span className="sr-only">Facebook</span></a>
                        </div>

                        <div className="border-t border-gray-700 pt-8 mt-8">
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{dict.hq_title}</h3>
                            <div className="flex items-start gap-3 text-gray-400 text-sm mb-2">
                                <MapPin className="h-5 w-5 text-ros-blue shrink-0" />
                                <span className="whitespace-pre-line">
                                    Thane District,<br />
                                    Maharashtra, India
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm mb-2 hover:text-white transition-colors cursor-pointer">
                                <Phone className="h-5 w-5 text-ros-blue shrink-0" />
                                <span>+91 XXXXXXXXXX</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                                <Mail className="h-5 w-5 text-ros-blue shrink-0" />
                                <span>contact@ros-industries.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Expanded Footer Columns */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">{dict.solutions}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNav.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-ros-blue transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">{dict.focus_topics}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNav.focus.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-ros-blue transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">{dict.quick_links}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNav.quick.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-ros-blue transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs leading-5 text-gray-400">
                            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {dict.copyright}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
