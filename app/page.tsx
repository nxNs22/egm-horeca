import type { Metadata } from "next";
import { LocalizedHome } from "./components/LocalizedHome";

export const metadata: Metadata = {
  title: "Service Echipamente HoReCa Bucuresti",
  description:
    "EGM Horeca SRL ofera service pentru echipamente profesionale HoReCa in Bucuresti: reparatii rapide, mentenanta preventiva, montaj si piese de schimb.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EGM Horeca SRL | Service Echipamente HoReCa Bucuresti",
    description:
      "Reparatii rapide, mentenanta preventiva si piese de schimb pentru bucatarii profesionale HoReCa.",
    url: "/",
  },
};

export default function Home() {
  return <LocalizedHome />;
}
