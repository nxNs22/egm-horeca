import type { Metadata } from "next";
import { LocalizedProducePage } from "../components/LocalizedHome";

export const metadata: Metadata = {
  title: "Echipamente HoReCa Deservite",
  description:
    "Echipamente HoReCa deservite de EGM Horeca SRL: cuptoare profesionale, friteuze, masini de spalat vase, refrigerare, masini de gheata si masini de cafea.",
  alternates: {
    canonical: "/produce",
  },
  openGraph: {
    title: "Echipamente HoReCa Deservite | EGM Horeca SRL",
    description:
      "Service pentru cuptoare profesionale, friteuze, masini de spalat vase, frigidere, masini de gheata si masini de cafea.",
    url: "/produce",
  },
};

export default function ProducePage() {
  return <LocalizedProducePage />;
}
