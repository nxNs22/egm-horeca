import type { Metadata } from "next";
import "./globals.css";
import { businessJsonLd, seoKeywords, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "EGM Horeca SRL",
  title: {
    default: "EGM Horeca SRL | Service echipamente profesionale HoReCa",
    template: "%s | EGM Horeca SRL",
  },
  description:
    "Reparatii rapide, mentenanta preventiva si piese de schimb pentru bucatarii profesionale HoReCa in Bucuresti.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "EGM Horeca SRL" }],
  creator: "EGM Horeca SRL",
  publisher: "EGM Horeca SRL",
  category: "HoReCa equipment service",
  verification: {
    google: "BsuOdkqrQdbwQT4AnwSGcLLh9AAywmK6GruX6r3tABM",
  },
  openGraph: {
    title: "EGM Horeca SRL",
    description:
      "Service echipamente profesionale HoReCa: reparatii, mentenanta si interventii rapide.",
    url: "/",
    siteName: "EGM Horeca SRL",
    images: [
      {
        url: "/egm-horeca-card.png",
        width: 1600,
        height: 900,
        alt: "EGM Horeca SRL service echipamente profesionale HoReCa",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EGM Horeca SRL",
    description:
      "Reparatii rapide si mentenanta pentru echipamente profesionale HoReCa.",
    images: ["/egm-horeca-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = JSON.stringify(businessJsonLd).replace(/</g, "\\u003c");

  return (
    <html lang="ro" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        {children}
      </body>
    </html>
  );
}
