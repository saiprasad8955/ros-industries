import { getDictionary } from '@/app/utils/get-dictionary';
import { Cpu, Terminal, Layers, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function PneumaticAutomationPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_automation_page;

    return (
        <div className="bg-ros-gray-light min-h-screen">
            <section className="pt-32 pb-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-ros-orange font-bold uppercase tracking-widest text-xs mb-4 block">Smart Pneumatics</span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight text-ros-blue">
                                {t.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed">
                                {t.subtitle}
                            </p>
                            <div className="grid grid-cols-1 gap-6">
                                {t.services.map((service: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-5 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-ros-blue/30 cursor-default group">
                                        <div className="w-12 h-12 rounded-xl bg-ros-blue/5 flex items-center justify-center text-ros-blue shrink-0 group-hover:bg-ros-blue group-hover:text-white transition-colors">
                                            {idx === 0 ? <Layers className="w-6 h-6" /> : <Terminal className="w-6 h-6" />}
                                        </div>
                                        <span className="text-lg font-bold text-gray-800">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white/50">
                            <Image
                                src="/pneumatic-automation-panel.png"
                                alt="Pneumatic Control Panel"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-ros-blue/10 mix-blend-multiply pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
