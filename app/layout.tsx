import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://egmhoreca.ro",
  ),
  title: {
    default: "EGM Horeca SRL | Service echipamente profesionale HoReCa",
    template: "%s | EGM Horeca SRL",
  },
  description:
    "Reparatii rapide, mentenanta preventiva si piese de schimb pentru bucatarii profesionale HoReCa in Bucuresti.",
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
  return (
    <html lang="ro" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
