import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Login | ROS Industries",
    description: "Secure access to the ROS Industries lead management system.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
