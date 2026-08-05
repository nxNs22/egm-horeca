import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { absoluteUrl } from "../seo";

const pageUrl = "/reparatii-cuptoare-profesionale-bucuresti";

export const metadata: Metadata = {
  title: "Reparatii Cuptoare Profesionale Bucuresti",
  description:
    "Reparatii cuptoare profesionale in Bucuresti pentru restaurante, hoteluri si bucatarii HoReCa. Diagnostic, mentenanta, interventii rapide si piese de schimb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Reparatii Cuptoare Profesionale Bucuresti | EGM Horeca SRL",
    description:
      "Service pentru cuptoare profesionale HoReCa in Bucuresti: diagnostic, reparatii, mentenanta si punere in functiune.",
    url: pageUrl,
  },
};

const benefits = [
  "Diagnostic pentru cuptoare profesionale electrice, pe gaz si combi",
  "Interventii pentru restaurante, hoteluri, cafenele si bucatarii industriale",
  "Mentenanta preventiva pentru reducerea opririlor neplanificate",
  "Verificare componente, senzori, panouri de comanda si sisteme de incalzire",
  "Piese de schimb originale si compatibile, in functie de disponibilitate",
  "Programare rapida in Bucuresti si imprejurimi",
];

const faq = [
  {
    question: "Reparati cuptoare profesionale la sediul clientului?",
    answer:
      "Da. EGM Horeca SRL poate programa interventii la sediul clientului in Bucuresti pentru diagnostic, reparatii si testare.",
  },
  {
    question: "Pentru ce tipuri de cuptoare profesionale oferiti service?",
    answer:
      "Oferim service pentru cuptoare profesionale, cuptoare combi si echipamente de linie calda folosite in bucatarii HoReCa.",
  },
  {
    question: "Puteti face si mentenanta preventiva?",
    answer:
      "Da. Mentenanta preventiva ajuta la reducerea defectiunilor, verificarea componentelor si pastrarea echipamentelor in functiune.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reparatii cuptoare profesionale Bucuresti",
    serviceType: "Service echipamente HoReCa",
    provider: {
      "@type": "LocalBusiness",
      name: "EGM Horeca SRL",
      telephone: "+40737247777",
      email: "egmhoreca@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Str. Grindeiului 3A",
        addressLocality: "Bucuresti",
        addressCountry: "RO",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Bucuresti",
    },
    url: absoluteUrl(pageUrl),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasa",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Reparatii cuptoare profesionale Bucuresti",
        item: absoluteUrl(pageUrl),
      },
    ],
  },
];

export default function OvenRepairPage() {
  const structuredData = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <main className="site-shell seo-service-page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="EGM Horeca SRL">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>
            <strong>EGM HORECA SRL</strong>
            <small>Service echipamente profesionale HoReCa</small>
          </span>
        </Link>
        <nav aria-label="Navigare principala">
          <Link href="/">Acasa</Link>
          <Link href="/produce">Produse</Link>
          <Link href="/#services">Servicii</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="icon-button topbar-call" href="tel:+40737247777">
          <Phone size={18} aria-hidden="true" />
          <span>+40 737 247 777</span>
        </a>
      </header>

      <section className="seo-hero">
        <div>
          <p className="eyebrow">Service cuptoare HoReCa</p>
          <h1>Reparatii cuptoare profesionale Bucuresti</h1>
          <p>
            EGM Horeca SRL asigura diagnostic, reparatii si mentenanta pentru
            cuptoare profesionale folosite in restaurante, hoteluri, cafenele si
            bucatarii industriale din Bucuresti.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact">
              <CalendarCheck size={19} aria-hidden="true" />
              <span>Solicita interventie</span>
            </Link>
            <a className="secondary-action" href="tel:+40737247777">
              <Phone size={19} aria-hidden="true" />
              <span>Suna acum</span>
            </a>
          </div>
        </div>
        <aside className="seo-hero-panel" aria-label="Date interventie">
          <div>
            <Clock3 size={21} aria-hidden="true" />
            <strong>Raspuns rapid</strong>
            <span>Programare pentru Bucuresti si imprejurimi</span>
          </div>
          <div>
            <ShieldCheck size={21} aria-hidden="true" />
            <strong>Service tehnic</strong>
            <span>Diagnostic, reparatie, testare si mentenanta</span>
          </div>
          <div>
            <MapPin size={21} aria-hidden="true" />
            <strong>EGM Horeca SRL</strong>
            <span>Str. Grindeiului 3A, Bucuresti</span>
          </div>
        </aside>
      </section>

      <section className="section service-detail-section">
        <div className="section-heading">
          <p className="eyebrow">Ce acoperim</p>
          <h2>Interventii pentru cuptoare care trebuie sa ramana in functiune.</h2>
        </div>
        <div className="service-detail-grid">
          {benefits.map((benefit) => (
            <article className="service-detail-card" key={benefit}>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-process-section">
        <div className="workflow-copy">
          <p className="eyebrow">Proces service</p>
          <h2>De la defect raportat la testare finala.</h2>
          <p>
            Cererea este preluata pentru identificarea echipamentului, simptome,
            diagnostic tehnic si programarea interventiei. Dupa reparatie,
            cuptorul este verificat pentru functionare corecta in regim de lucru.
          </p>
        </div>
        <div className="workflow-steps" aria-label="Etape reparatie cuptor">
          {["Preluare solicitare", "Diagnostic tehnic", "Reparatie si testare"].map(
            (step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading compact">
          <p className="eyebrow">Intrebari frecvente</p>
          <h2>Service cuptoare profesionale HoReCa</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <Wrench size={30} aria-hidden="true" />
        <div>
          <h2>Ai nevoie de reparatii pentru un cuptor profesional?</h2>
          <p>
            Trimite mesaj sau suna pentru programare. Include marca, modelul si
            simptomele defectiunii pentru un diagnostic mai rapid.
          </p>
        </div>
        <div className="service-cta-actions">
          <a className="primary-action" href="tel:+40737247777">
            <Phone size={18} aria-hidden="true" />
            <span>+40 737 247 777</span>
          </a>
          <a className="secondary-action" href="mailto:egmhoreca@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>Trimite email</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <div>
              <strong>EGM HORECA SRL</strong>
              <p>Mentinem bucatariile profesionale in functiune.</p>
            </div>
          </div>
          <nav className="footer-column" aria-label="Navigare principala">
            <h2>Meniu</h2>
            <Link href="/">Acasa</Link>
            <Link href="/produce">Produse</Link>
            <Link href="/#services">Servicii</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-column footer-contact">
            <h2>Contact</h2>
            <a href="tel:+40737247777">
              <Phone size={17} aria-hidden="true" />
              <span>+40 737 247 777</span>
            </a>
            <a href="mailto:egmhoreca@gmail.com">
              <Mail size={17} aria-hidden="true" />
              <span>egmhoreca@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 EGM HORECA SRL</span>
          <a href="https://www.egmhoreca.ro">egmhoreca.ro</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    </main>
  );
}
