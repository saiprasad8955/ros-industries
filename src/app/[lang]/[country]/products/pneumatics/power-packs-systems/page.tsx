import { getDictionary } from '@/app/utils/get-dictionary';
import { Power, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function PowerPacksSystemsPage({ params }: { params: Promise<{ lang: string, country: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.pneumatics_page.categories.find((c: any) => c.name.includes("Power Packs"));

    return (
        <div className="bg-white min-h-screen">
            <section className="pt-32 pb-24">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-ros-orange font-bold uppercase tracking-widest text-xs mb-4 block">Pneumatic Power Generation</span>
                            <h1 className="text-4xl text-ros-blue md:text-6xl font-extrabold mb-8 leading-tight">
                                Power Packs & Test Benches
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-medium">
                                Specialized pneumatic power units and integrated test bench systems for validation and high-pressure air supply.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-ros-gray-light p-6 rounded-2xl border border-gray-100">
                                    <Power className="w-8 h-8 text-ros-blue" />
                                    <div>
                                        <span className="text-gray-900 font-bold block text-lg">Pressure up to 350 Bar</span>
                                        <span className="text-gray-500 font-medium">Variable flow rates available</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-ros-gray-light p-6 rounded-2xl border border-gray-100">
                                    <Activity className="w-8 h-8 text-ros-orange" />
                                    <div>
                                        <span className="text-gray-900 font-bold block text-lg">Proof Pressure Testing</span>
                                        <span className="text-gray-500 font-medium">Automated data logging options</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/pneumatic-power-pack.png"
                                alt="Pneumatic Power Pack"
                                fill
                                className="object-cover"
                                sizes="50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
