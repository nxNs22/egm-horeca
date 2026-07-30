import type { Metadata } from "next";
import { LocalizedContactPage } from "../components/LocalizedHome";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EGM Horeca SRL for professional HoReCa equipment service, repairs, maintenance, and spare parts.",
};

export default function ContactPage() {
  return <LocalizedContactPage />;
}
