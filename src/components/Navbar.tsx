'use client';

import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Settings, Phone, User, Cylinder, Warehouse, Hammer } from 'lucide-react';
import RegionSelector from './RegionSelector';
import { Dictionary } from '@/app/dictionaries';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  desc?: string;
  children?: NavItem[];
}

export default function Navbar({ dict, lang, country }: { dict?: Dictionary['nav'], lang?: string, country?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!dict) return null;

  const navigation: NavItem[] = [
    // ... items remain same ...
    {
      name: dict.products,
      href: `/${lang || 'en'}/${country || 'us'}/products`,
      children: [
        { name: dict.menu_products.hydraulics, href: `/${lang || 'en'}/${country || 'us'}/products/hydraulics`, icon: Settings, desc: dict.menu_products.hydraulics_desc },
        { name: 'Hoses', href: `/${lang || 'en'}/${country || 'us'}/products/hoses`, icon: Cylinder, desc: 'High-performance industrial hoses' },
        { name: 'Industrial Sheds', href: `/${lang || 'en'}/${country || 'us'}/products/industrial-shed`, icon: Warehouse, desc: 'Steel fabricated structures' },
        { name: 'Fabrication', href: `/${lang || 'en'}/${country || 'us'}/products/fabrication`, icon: Hammer, desc: 'Machining & assemblies' },
      ],
    },
    {
      name: dict.services,
      href: `/${lang || 'en'}/${country || 'us'}/services`,
    },
    {
      name: 'About Us',
      href: `/${lang || 'en'}/${country || 'us'}/about-us`,
    }
  ];

  const isActive = (href: string) => {
    if (pathname === href) return true;
    return pathname?.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm py-2'
        : 'bg-ros-gray-dark border-b border-white/10 py-4'
        }`}
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${lang || 'en'}/${country || 'us'}`} className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-300 ${scrolled ? 'bg-ros-blue text-white shadow-md' : 'bg-ros-blue text-white shadow-lg'}`}>
              R
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>ROS</span>
              <span className={`text-xs font-medium uppercase tracking-widest ${scrolled ? 'text-ros-blue' : 'text-gray-400'}`}>Industries</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center h-full">
          {navigation.map((item, index) => (
            <div
              key={item.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.href}
                className={`group flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                  ? (scrolled ? 'text-ros-blue' : 'text-white')
                  : (scrolled ? 'text-gray-600 hover:text-ros-blue' : 'text-gray-300 hover:text-white')
                  }`}
              >
                {item.name}
                {item.children && (
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${hoveredIndex === index ? 'rotate-180' : ''}`} />
                )}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-ros-blue transition-all duration-300 group-hover:w-full ${isActive(item.href) ? 'w-full opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </Link>

              <AnimatePresence>
                {hoveredIndex === index && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 border border-gray-100"
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="group/item flex items-start gap-4 rounded-xl p-3 hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm"
                        >
                          {child.icon ? (
                            <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-ros-blue/5 text-ros-blue group-hover/item:bg-ros-blue group-hover/item:text-white transition-colors duration-200">
                              <child.icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                          ) : null}
                          <div>
                            <div className="font-semibold text-gray-900 group-hover/item:text-ros-blue transition-colors">
                              {child.name}
                            </div>
                            {child.desc && <p className="mt-1 text-xs text-gray-500 line-clamp-2">{child.desc}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <RegionSelector lang={lang} country={country} />
          <div className={`h-6 w-px ${scrolled ? 'bg-gray-300/50' : 'bg-white/20'}`}></div>
          <Link href="#contact" className={`p-2 transition-all duration-200 rounded-full ${scrolled ? 'text-gray-500 hover:text-ros-blue hover:bg-blue-50' : 'text-gray-300 hover:text-white hover:bg-white/10'}`} title={dict.login}>
            <User className="h-5 w-5" />
            <span className="sr-only">{dict.login}</span>
          </Link>

          <Link
            href={`/${lang || 'en'}/${country || 'us'}/request-quote`}
            className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-ros-blue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-ros-blue/90 hover:scale-105 hover:shadow-ros-blue/25"
          >
            <Phone className="h-4 w-4" />
            <span>{dict.request_quote}</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ros-blue to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </nav >

      {/* Mobile Menu Portal */}
      {
        mounted && mobileMenuOpen && createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm shadow-2xl"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-8">
                    <Link href={`/${lang || 'en'}/${country || 'us'}`} className="-m-1.5 p-1.5 flex items-center gap-2">
                      <div className="w-8 h-8 bg-ros-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">R</div>
                      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ros-blue to-ros-gray-dark">ROS Industries</span>
                    </Link>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-100">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <div key={item.name} className="py-2">
                            <Link
                              href={item.href}
                              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-50 hover:text-ros-blue transition-colors ${isActive(item.href) ? 'text-ros-blue' : 'text-gray-900'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                            {item.children && (
                              <div className="pl-4 border-l-2 border-primary/10 ml-2 space-y-1 mt-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-ros-blue transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="py-6 border-t border-gray-100">
                        <Link
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mb-4"
                        >
                          {dict.login}
                        </Link>
                        <Link
                          href={`/${lang || 'en'}/${country || 'us'}/request-quote`}
                          className="w-full btn-primary flex justify-center items-center gap-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Phone className="w-4 h-4" />
                          {dict.request_quote}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )
      }
    </header >
  );
}
