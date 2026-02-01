import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { leadSchema } from '@/lib/validations';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = leadSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: 'Validation failed', details: result.error.flatten() }, { status: 400 });
        }

        const lead = await prisma.lead.create({
            data: {
                name: result.data.name,
                email: result.data.email,
                phone: result.data.phone,
                company: result.data.company,
                message: result.data.message,
                source: result.data.source || 'website'
            }
        });

        return NextResponse.json({ success: true, lead }, { status: 201 });
    } catch (error) {
        console.error('Lead capture error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
