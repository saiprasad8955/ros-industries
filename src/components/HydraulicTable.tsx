'use client';

import { useState } from 'react';
import { Search, Droplet } from 'lucide-react';

export default function HydraulicTable({ t }: { t: any }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRows = t.rows.filter((row: any) =>
        Object.values(row).some(
            val => String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-ros-blue" />
                    {t.title}
                </h3>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search specifications..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-ros-blue/20 focus:border-ros-blue"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-semibold">{t.table_headers.name}</th>
                            <th className="px-6 py-4 font-semibold">{t.table_headers.std}</th>
                            <th className="px-6 py-4 font-semibold">{t.table_headers.size}</th>
                            <th className="px-6 py-4 font-semibold">{t.table_headers.wp}</th>
                            <th className="px-6 py-4 font-semibold">{t.table_headers.temp}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredRows.length > 0 ? (
                            filteredRows.map((row: any, idx: number) => (
                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-6 py-4 font-bold text-ros-blue">{row.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{row.std}</td>
                                    <td className="px-6 py-4 text-gray-600 font-mono text-xs">{row.size}</td>
                                    <td className="px-6 py-4 text-gray-900 font-semibold">{row.wp}</td>
                                    <td className="px-6 py-4 text-gray-600">{row.temp}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500 italic">
                                    No hoses found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 border-t border-gray-100">
                {t.desc}
            </div>
        </div>
    );
}
