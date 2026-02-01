import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import { getDictionary } from "@/app/utils/get-dictionary";
import Link from "next/link";


export default async function Home({ params }: { params: Promise<{ lang: string, country: string }> }) {
  // Await params before accessing properties to satisfy Next.js 15+ requirements
  const { lang, country } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} lang={lang} country={country} />

      {/* Logos / Trusted By Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container-custom">
          <p className="text-center text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">{dict.trusted_by}</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-full"></div>AUTO-CORP</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-lg"></div>AERO-DYNAMICS</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-sm rotate-45"></div>ENERGY-SYS</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-full border-2"></div>GLOBAL-MFG</div>
          </div>
        </div>
      </section>

      <FeatureGrid dict={dict.feature_grid} />

      {/* Call to Action Divider */}
      <section className="py-20 bg-ros-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">{dict.cta_divider.title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {dict.cta_divider.desc}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href={`/${lang}/${country}/request-quote`}
              className="bg-white text-ros-blue px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              {dict.cta_divider.cta_sales}
            </Link>
            <Link
              href={`/${lang}/${country}/request-quote`}
              className="border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-ros-blue/50 transition-colors"
            >
              {dict.cta_divider.cta_distributor}
            </Link>
          </div>
        </div>
      </section>

      <ProjectShowcase dict={dict.project_showcase} />
    </>
  );
}
