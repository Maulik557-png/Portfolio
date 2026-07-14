import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

export const metadata: Metadata = {
  title: "Maulik Smaul — Backend Engineer",
  description:
    "Portfolio of a final-year backend engineering student specializing in Java, Spring Boot, Kafka, Redis, and AWS. Targeting backend and full-stack roles.",
  keywords: ["backend engineer", "Java", "Spring Boot", "Kafka", "Redis", "AWS", "portfolio"],
  authors: [{ name: "Maulik Smaul" }],
  openGraph: {
    type: "website",
    title: "Maulik Smaul — Backend Engineer",
    description:
      "Backend engineering portfolio: systems that scale, designs that explain themselves.",
    siteName: "Maulik Smaul Portfolio",
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
