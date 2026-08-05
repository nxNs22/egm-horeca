import type { Metadata } from "next";
import { LocalizedContactPage } from "../components/LocalizedHome";

export const metadata: Metadata = {
  title: "Contact Service Echipamente HoReCa Bucuresti",
  description:
    "Contact EGM Horeca SRL pentru reparatii echipamente HoReCa, mentenanta preventiva, interventii rapide si piese de schimb in Bucuresti.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact EGM Horeca SRL",
    description:
      "Suna sau trimite mesaj pentru service echipamente profesionale HoReCa in Bucuresti.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <LocalizedContactPage />;
}
