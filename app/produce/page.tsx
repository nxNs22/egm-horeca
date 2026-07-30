import type { Metadata } from "next";
import { LocalizedProducePage } from "../components/LocalizedHome";

export const metadata: Metadata = {
  title: "Produce",
  description:
    "Equipment categories serviced by EGM Horeca SRL, including ovens, fryers, dishwashers, refrigeration, ice machines, and coffee machines.",
};

export default function ProducePage() {
  return <LocalizedProducePage />;
}
