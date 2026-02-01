import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import { getDictionary } from "@/app/utils/get-dictionary";

import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollProgress from "@/components/ScrollProgress";

export default async function LocalizedLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string, country: string }>;
}) {
  const { lang, country } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollProgress />
      <Navbar dict={dict.nav} lang={lang} country={country} />
      <main className="min-h-screen pt-[72px]">
        <Breadcrumbs />
        {children}
      </main>
      <Footer dict={dict.footer} lang={lang} country={country} />
      <ContactButton dict={dict.contact_button} />
    </>
  );
}
