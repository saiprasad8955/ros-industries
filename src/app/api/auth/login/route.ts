import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { loginSchema } from '@/lib/validations';
import { signSession } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = loginSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
        }

        const user = await prisma.admin.findUnique({
            where: { email: result.data.email }
        });

        if (!user || !(await bcrypt.compare(result.data.password, user.password))) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const token = await signSession({ userId: user.id, email: user.email });

        const cookieStore = await cookies();
        cookieStore.set('session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 // 1 day
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
    }
}
