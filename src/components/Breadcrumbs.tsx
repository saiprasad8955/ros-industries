'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Split path into segments
    const segments = pathname.split('/').filter(Boolean);

    // Expecting /lang/country/... structure
    // If we are at root /lang/country, don't show breadcrumbs
    if (segments.length <= 2) {
        return null;
    }

    // Extract lang and country to form the base
    const lang = segments[0];
    const country = segments[1];

    // The rest are the actual navigation paths
    const navSegments = segments.slice(2);

    return (
        <nav
            aria-label="Breadcrumb"
            className={`w-full py-3 px-4 md:px-8 sticky z-40 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 top-[56px]'
                : 'bg-ros-gray-dark border-b border-white/10 top-[72px]'
                }`}
        >
            <div className={`container-custom max-w-7xl mx-auto flex items-center text-sm overflow-x-auto whitespace-nowrap scrollbar-hide ${scrolled ? 'text-gray-500' : 'text-gray-400'
                }`}>
                <Link
                    href={`/${lang}/${country}`}
                    className={`flex items-center transition-colors ${scrolled ? 'hover:text-ros-blue' : 'hover:text-white'}`}
                >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                </Link>

                {navSegments.map((segment, index) => {
                    // Construct the path up to this segment
                    // Base: /lang/country
                    // + slice(0, index + 1) of navSegments
                    const href = `/${lang}/${country}/${navSegments.slice(0, index + 1).join('/')}`;

                    // Format segment name: replace hyphens with spaces, capitalize
                    const label = segment
                        .replace(/-/g, ' ')
                        .replace(/\b\w/g, char => char.toUpperCase());

                    const isLast = index === navSegments.length - 1;

                    return (
                        <div key={segment} className="flex items-center">
                            <ChevronRight className={`w-4 h-4 mx-2 ${scrolled ? 'text-gray-400' : 'text-gray-600'}`} />
                            {isLast ? (
                                <span className={`font-semibold cursor-default ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className={`transition-colors ${scrolled ? 'hover:text-ros-blue' : 'hover:text-white'}`}
                                >
                                    {label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
