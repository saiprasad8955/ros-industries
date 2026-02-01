'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    TrendingUp,
    LogOut,
    Mail,
    Phone,
    Building2,
    Calendar,
    Search,
    RefreshCcw,
    ChevronRight,
    MessageSquare,
    X,
    ExternalLink
} from 'lucide-react';

interface Lead {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    source: string;
    createdAt: string;
    status: string;
}

interface Stats {
    totalLeads: number;
    leadsToday: number;
    sourceBreakdown: { source: string; _count: { _all: number } }[];
}

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const router = useRouter();

    const fetchData = async () => {
        setLoading(true);
        try {
            const [leadsRes, statsRes] = await Promise.all([
                fetch('/api/admin/leads'),
                fetch('/api/admin/stats')
            ]);

            if (leadsRes.status === 401) {
                router.push('/admin/login');
                return;
            }

            const leadsData = await leadsRes.json();
            const statsData = await statsRes.json();

            setLeads(leadsData);
            setStats(statsData);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredLeads = leads.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase()) ||
        l.company?.toLowerCase().includes(search.toLowerCase())
    );

    const handleLogout = async () => {
        // Simple logout: we can just clear cookie if we had a dedicated endpoint, 
        // or just redirect and let the server 401 on next fetch.
        // For now, let's just go to login. Real logout would clear the 'session' cookie.
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push('/admin/login');
    };

    if (loading && !leads.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <RefreshCcw className="h-8 w-8 animate-spin text-ros-blue" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-ros-gray-dark text-white hidden lg:flex flex-col">
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-ros-blue flex items-center justify-center font-bold text-xl">R</div>
                        <span className="text-xl font-bold">ROS Admin</span>
                    </div>

                    <nav className="space-y-4">
                        <div className="flex items-center gap-3 text-ros-blue bg-ros-blue/10 p-3 rounded-xl">
                            <LayoutDashboard className="h-5 w-5" />
                            <span className="font-semibold">Dashboard</span>
                        </div>
                        {/* More menu items could go here */}
                    </nav>
                </div>

                <div className="mt-auto p-8 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white border-b border-gray-100 p-6 flex justify-between items-center sticky top-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-900">Leads Overview</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={fetchData}
                            className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition-colors"
                            title="Refresh Data"
                        >
                            <RefreshCcw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <div className="lg:hidden">
                            <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-500"><LogOut className="h-5 w-5" /></button>
                        </div>
                    </div>
                </header>

                <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Leads</p>
                                <p className="text-3xl font-bold text-gray-900">{stats?.totalLeads || 0}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Leads Today</p>
                                <p className="text-3xl font-bold text-gray-900">{stats?.leadsToday || 0}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm md:col-span-2 lg:col-span-1"
                        >
                            <p className="text-sm font-medium text-gray-500 mb-4">Top Sources</p>
                            <div className="space-y-2">
                                {stats?.sourceBreakdown.map((s, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-sm capitalize text-gray-600">{s.source.replace('_', ' ')}</span>
                                        <span className="text-xs font-bold bg-gray-100 px-2 py-0.5 rounded-full">{s._count._all}</span>
                                    </div>
                                ))}
                                {(!stats?.sourceBreakdown.length) && <p className="text-xs text-gray-400">No data yet</p>}
                            </div>
                        </motion.div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h2 className="font-bold text-gray-900">Recent Enquiries</h2>
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search leads..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-ros-blue focus:ring-1 focus:ring-ros-blue outline-none"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50/50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        <th className="px-6 py-4">Lead Info</th>
                                        <th className="px-6 py-4">Company</th>
                                        <th className="px-6 py-4">Source</th>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredLeads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-gray-900">{lead.name}</div>
                                                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                    <Mail className="h-3 w-3" /> {lead.email}
                                                </div>
                                                {lead.phone && (
                                                    <div className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Phone className="h-3 w-3" /> {lead.phone}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Building2 className="h-4 w-4 opacity-50" />
                                                    {lead.company || '—'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${lead.source === 'quick_inquiry' ? 'bg-orange-100 text-orange-600' : 'bg-ros-blue/10 text-ros-blue'
                                                    }`}>
                                                    {lead.source.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Calendar className="h-4 w-4 opacity-50" />
                                                    {new Date(lead.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => setSelectedLead(lead)}
                                                    className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-ros-blue hover:text-white transition-all shadow-sm"
                                                >
                                                    <ChevronRight className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {(!filteredLeads.length && !loading) && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-20 text-center text-gray-400">
                                                No leads found matching your criteria
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            {/* Lead Modal */}
            <AnimatePresence>
                {selectedLead && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLead(null)}
                            className="absolute inset-0 bg-ros-gray-dark/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="flex items-center gap-2 text-ros-blue font-bold text-sm uppercase tracking-widest mb-1">
                                            <MessageSquare className="h-4 w-4" /> Message Content
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">{selectedLead.name}</h3>
                                        <p className="text-gray-500 mt-1">{selectedLead.email}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedLead(null)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="h-6 w-6 text-gray-400" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 min-h-[200px]">
                                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                            {selectedLead.message}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Source</p>
                                            <p className="text-sm font-bold text-gray-900 capitalize">{selectedLead.source.replace('_', ' ')}</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Captured On</p>
                                            <p className="text-sm font-bold text-gray-900">{new Date(selectedLead.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={`mailto:${selectedLead.email}`}
                                            className="flex-1 btn-primary py-4 flex items-center justify-center gap-2 rounded-2xl"
                                        >
                                            <Mail className="h-5 w-5" /> Reply by Email
                                        </a>
                                        {selectedLead.phone && (
                                            <a
                                                href={`tel:${selectedLead.phone}`}
                                                className="px-6 border-2 border-ros-blue text-ros-blue font-bold rounded-2xl flex items-center justify-center"
                                            >
                                                <Phone className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
