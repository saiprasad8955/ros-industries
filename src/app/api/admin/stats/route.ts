import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const totalLeads = await prisma.lead.count();

        // Get start of today
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const leadsToday = await prisma.lead.count({
            where: {
                createdAt: {
                    gte: today
                }
            }
        });

        const sourceBreakdown = await prisma.lead.groupBy({
            by: ['source'],
            _count: {
                _all: true
            }
        });

        return NextResponse.json({
            totalLeads,
            leadsToday,
            sourceBreakdown
        });
    } catch (error) {
        console.error('Stats error:', error);
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
    }
}
