import { getDictionary } from '@/app/utils/get-dictionary';
import { Cpu, Terminal, Layers, CheckCircle2 } from 'lucide-react';

export default async function PneumaticAutomationPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_automation_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            <section className="pt-40 pb-24">
                <div className="container-custom">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-ros-blue/5 rounded-[2rem] flex items-center justify-center text-ros-blue mb-10">
                            <Cpu className="w-12 h-12" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tighter">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed mb-16">
                            {t.subtitle}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                            {t.services.map((service: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-5 p-8 rounded-3xl bg-ros-gray-light text-left group hover:bg-ros-blue hover:text-white transition-all duration-300">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-ros-blue shrink-0 group-hover:scale-110 transition-transform">
                                        {idx === 0 ? <Layers className="w-6 h-6" /> : <Terminal className="w-6 h-6" />}
                                    </div>
                                    <span className="text-lg font-extrabold leading-tight">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
