import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

export const metadata: Metadata = {
  title: "Maulik Shah — Backend Engineer",
  description:
    "Portfolio of Maulik Shah, a final-year Computer Engineering student specializing in Java, Spring Boot, Kafka, Redis, and AWS. Building production-grade systems.",
  keywords: ["backend engineer", "Java", "Spring Boot", "Kafka", "Redis", "AWS", "portfolio", "Maulik Shah"],
  authors: [{ name: "Maulik Shah" }],
  openGraph: {
    type: "website",
    title: "Maulik Shah — Backend Engineer",
    description:
      "Backend engineering portfolio: Razorpay + PayPal payment systems built with Spring Boot, Kafka, and Redis.",
    siteName: "Maulik Shah",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent flash of wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = localStorage.getItem('theme');
                var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (s === 'dark' || (!s && d)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
