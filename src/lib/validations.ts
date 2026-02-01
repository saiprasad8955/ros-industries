import { z } from 'zod';

export const leadSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(5, "Message must be at least 5 characters"),
    source: z.string().optional()
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password is required")
});
