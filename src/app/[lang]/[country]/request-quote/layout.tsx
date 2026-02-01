import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Quote | Custom Engineering Solutions | ROS Industries",
    description: "Get a personalized quote for your industrial engineering projects. Specialized in hydraulics, fabrication, and custom machinery.",
    openGraph: {
        title: "Request a Custom Quote | ROS Industries",
        description: "Expert engineering consultation and competitive pricing for your industrial needs.",
    },
};

export default function RequestQuoteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
