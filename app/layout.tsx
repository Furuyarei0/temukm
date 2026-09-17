import { Inria_Serif } from "next/font/google";
import type { Metadata } from "next";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { OrganizationsProvider } from "@/components/organizations-provider";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "temUKM — Portal UKK/UKM UIN STS Jambi",
  description:
    "Portal mahasiswa untuk menemukan, mengenal, dan bergabung dengan Unit Kegiatan Mahasiswa di UIN STS Jambi.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inriaSerif.variable} h-full antialiased`}>
      <body className="gold-stage min-h-full">
        <OrganizationsProvider>
          <CursorSpotlight />
          <SiteNav />
          <div className="relative z-10">{children}</div>
        </OrganizationsProvider>
      </body>
    </html>
  );
}
