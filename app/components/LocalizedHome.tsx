"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChefHat,
  Coffee,
  Cog,
  Fan,
  Gauge,
  Globe2,
  IceCreamBowl,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LeadForm, type LeadFormCopy } from "./LeadForm";

type LanguageCode = "ro" | "en" | "tr" | "de";

type SiteCopy = {
  htmlLang: string;
  documentTitle: string;
  brandSubtitle: string;
  navLabel: string;
  nav: {
    home: string;
    products: string;
    services: string;
    contact: string;
  };
  languageLabel: string;
  hero: {
    eyebrow: string;
    copy: string;
    primary: string;
    secondary: string;
  };
  quickPanelLabel: string;
  metrics: { value: string; label: string }[];
  quickLink: string;
  servicesEyebrow: string;
  servicesTitle: string;
  services: string[];
  equipmentEyebrow: string;
  equipmentTitle: string;
  equipment: string[];
  workflow: {
    eyebrow: string;
    title: string;
    copy: string;
    label: string;
    steps: string[];
  };
  contact: {
    pageTitle: string;
    heading: string;
    intro: string;
    role: string;
    companyLabel: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    websiteLabel: string;
    mapTitle: string;
  };
  footer: string;
  form: LeadFormCopy;
};

const languages: { code: LanguageCode; label: string }[] = [
  { code: "ro", label: "RO" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
];

const translations: Record<LanguageCode, SiteCopy> = {
  ro: {
    htmlLang: "ro",
    documentTitle: "EGM Horeca SRL | Service echipamente profesionale HoReCa",
    brandSubtitle: "Service echipamente profesionale HoReCa",
    navLabel: "Navigare principala",
    nav: {
      home: "Acasa",
      products: "Produse",
      services: "Servicii",
      contact: "Contact",
    },
    languageLabel: "Selectare limba",
    hero: {
      eyebrow: "Bucuresti si imprejurimi",
      copy: "Mentinerea bucatariilor profesionale in functiune prin reparatii rapide, mentenanta preventiva si piese de schimb pentru echipamente HoReCa.",
      primary: "Solicita interventie",
      secondary: "Trimite email",
    },
    quickPanelLabel: "Indicatori service",
    metrics: [
      { value: "24h", label: "raspuns rapid" },
      { value: "8+", label: "categorii echipamente" },
      { value: "2", label: "linii directe" },
    ],
    quickLink: "Programare service",
    servicesEyebrow: "Serviciile noastre",
    servicesTitle:
      "Interventii clare pentru echipamente care trebuie sa lucreze.",
    services: [
      "Service echipamente HoReCa",
      "Reparatii echipamente profesionale",
      "Mentenanta preventiva si corectiva",
      "Piese de schimb originale si compatibile",
      "Montaj si punere in functiune",
      "Interventii rapide la sediul clientului",
    ],
    equipmentEyebrow: "Echipamente deservite",
    equipmentTitle: "De la linia calda la zona de spalare si refrigerare.",
    equipment: [
      "Cuptoare profesionale",
      "Cuptoare combi",
      "Friteuze",
      "Plite si gratare",
      "Masini de spalat vase",
      "Frigidere si congelatoare",
      "Masini de gheata",
      "Masini de cafea",
    ],
    workflow: {
      eyebrow: "Flux de interventie",
      title: "Diagnostic, piesa potrivita, punere in functiune.",
      copy: "Cererile intrate prin site sunt preluate pentru contact rapid, diagnostic tehnic si programarea interventiei la sediul clientului.",
      label: "Etape interventie",
      steps: [
        "Preluare solicitare",
        "Diagnostic tehnic",
        "Reparatie si testare",
      ],
    },
    contact: {
      pageTitle: "Contact",
      heading: "Contacteaza-ne",
      intro:
        "Suntem deschisi sa iti raspundem la intrebarile despre produsele si serviciile noastre, precum si la modalitatile de colaborare existente.",
      role: "Administrator",
      companyLabel: "Companie",
      addressLabel: "Adresa",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      websiteLabel: "Website",
      mapTitle: "Harta EGM Horeca SRL",
    },
    footer: "Mentinem bucatariile profesionale in functiune.",
    form: {
      title: "Trimite mesaj",
      name: "Nume",
      email: "Email",
      subject: "Subiect",
      message: "Mesaj",
      messagePlaceholder: "Scrie mesajul tau aici",
      submitting: "Se trimite",
      submit: "Trimite",
      fallbackError: "Cererea nu a putut fi trimisa.",
      success:
        "Solicitarea a fost trimisa. Va contactam in cel mai scurt timp.",
    },
  },
  en: {
    htmlLang: "en",
    documentTitle: "EGM Horeca SRL | Professional HoReCa Equipment Service",
    brandSubtitle: "Professional HoReCa equipment service",
    navLabel: "Main navigation",
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      contact: "Contact",
    },
    languageLabel: "Language selector",
    hero: {
      eyebrow: "Bucharest and surrounding areas",
      copy: "Keeping professional kitchens running with fast repairs, preventive maintenance, and spare parts for HoReCa equipment.",
      primary: "Request service",
      secondary: "Send email",
    },
    quickPanelLabel: "Service indicators",
    metrics: [
      { value: "24h", label: "fast response" },
      { value: "8+", label: "equipment categories" },
      { value: "2", label: "direct lines" },
    ],
    quickLink: "Book service",
    servicesEyebrow: "Our services",
    servicesTitle: "Clear interventions for equipment that has to keep working.",
    services: [
      "HoReCa equipment service",
      "Professional equipment repairs",
      "Preventive and corrective maintenance",
      "Original and compatible spare parts",
      "Installation and commissioning",
      "Fast on-site interventions",
    ],
    equipmentEyebrow: "Equipment we service",
    equipmentTitle: "From the hot line to washing and refrigeration areas.",
    equipment: [
      "Professional ovens",
      "Combi ovens",
      "Deep fryers",
      "Cooktops and grills",
      "Dishwashers",
      "Refrigerators and freezers",
      "Ice machines",
      "Coffee machines",
    ],
    workflow: {
      eyebrow: "Service workflow",
      title: "Diagnosis, the right part, commissioning.",
      copy: "Requests sent through the site are picked up for quick contact, technical diagnosis, and scheduling the intervention at the client's location.",
      label: "Service steps",
      steps: ["Request intake", "Technical diagnosis", "Repair and testing"],
    },
    contact: {
      pageTitle: "Contact",
      heading: "Contact us",
      intro:
        "We are ready to answer questions about our products, services, and collaboration options.",
      role: "Administrator",
      companyLabel: "Company",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      websiteLabel: "Website",
      mapTitle: "EGM Horeca SRL map",
    },
    footer: "Keeping professional kitchens running.",
    form: {
      title: "Send message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      messagePlaceholder: "Write your message here",
      submitting: "Sending",
      submit: "Submit",
      fallbackError: "The request could not be sent.",
      success: "Your request has been sent. We will contact you shortly.",
    },
  },
  tr: {
    htmlLang: "tr",
    documentTitle: "EGM Horeca SRL | Profesyonel HoReCa Ekipman Servisi",
    brandSubtitle: "Profesyonel HoReCa ekipman servisi",
    navLabel: "Ana navigasyon",
    nav: {
      home: "Ana Sayfa",
      products: "Ürünler",
      services: "Hizmetler",
      contact: "İletişim",
    },
    languageLabel: "Dil seçici",
    hero: {
      eyebrow: "Bükreş ve çevresi",
      copy: "Profesyonel mutfakları hızlı tamir, önleyici bakım ve HoReCa ekipmanları için yedek parçalarla çalışır durumda tutuyoruz.",
      primary: "Servis iste",
      secondary: "E-posta gönder",
    },
    quickPanelLabel: "Servis göstergeleri",
    metrics: [
      { value: "24s", label: "hızlı dönüş" },
      { value: "8+", label: "ekipman kategorisi" },
      { value: "2", label: "direkt hat" },
    ],
    quickLink: "Servis randevusu",
    servicesEyebrow: "Hizmetlerimiz",
    servicesTitle: "Çalışmak zorunda olan ekipmanlar için net müdahaleler.",
    services: [
      "HoReCa ekipman servisi",
      "Profesyonel ekipman tamiri",
      "Önleyici ve düzeltici bakım",
      "Orijinal ve uyumlu yedek parçalar",
      "Montaj ve devreye alma",
      "Müşteri adresinde hızlı müdahale",
    ],
    equipmentEyebrow: "Servis verdiğimiz ekipmanlar",
    equipmentTitle: "Sıcak hattan yıkama ve soğutma alanlarına kadar.",
    equipment: [
      "Profesyonel fırınlar",
      "Kombi fırınlar",
      "Fritözler",
      "Ocaklar ve ızgaralar",
      "Bulaşık makineleri",
      "Buzdolapları ve dondurucular",
      "Buz makineleri",
      "Kahve makineleri",
    ],
    workflow: {
      eyebrow: "Servis akışı",
      title: "Teşhis, doğru parça, devreye alma.",
      copy: "Site üzerinden gelen talepler hızlı iletişim, teknik teşhis ve müşteri adresinde müdahale planlaması için alınır.",
      label: "Servis adımları",
      steps: ["Talep alımı", "Teknik teşhis", "Tamir ve test"],
    },
    contact: {
      pageTitle: "İletişim",
      heading: "Bizimle iletişime geçin",
      intro:
        "Ürünlerimiz, hizmetlerimiz ve iş birliği seçeneklerimiz hakkındaki sorularınızı yanıtlamaya hazırız.",
      role: "Yönetici",
      companyLabel: "Firma",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
      websiteLabel: "Website",
      mapTitle: "EGM Horeca SRL haritası",
    },
    footer: "Profesyonel mutfakları çalışır durumda tutuyoruz.",
    form: {
      title: "Mesaj gönder",
      name: "Ad Soyad",
      email: "E-posta",
      subject: "Konu",
      message: "Mesaj",
      messagePlaceholder: "Mesajınızı buraya yazın",
      submitting: "Gönderiliyor",
      submit: "Gönder",
      fallbackError: "Talep gönderilemedi.",
      success: "Talebiniz gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
    },
  },
  de: {
    htmlLang: "de",
    documentTitle: "EGM Horeca SRL | Service für professionelle HoReCa-Geräte",
    brandSubtitle: "Service für professionelle HoReCa-Geräte",
    navLabel: "Hauptnavigation",
    nav: {
      home: "Startseite",
      products: "Produkte",
      services: "Leistungen",
      contact: "Kontakt",
    },
    languageLabel: "Sprachauswahl",
    hero: {
      eyebrow: "Bukarest und Umgebung",
      copy: "Wir halten professionelle Küchen mit schnellen Reparaturen, vorbeugender Wartung und Ersatzteilen für HoReCa-Geräte in Betrieb.",
      primary: "Service anfragen",
      secondary: "E-Mail senden",
    },
    quickPanelLabel: "Servicekennzahlen",
    metrics: [
      { value: "24h", label: "schnelle Antwort" },
      { value: "8+", label: "Gerätekategorien" },
      { value: "2", label: "Direktleitungen" },
    ],
    quickLink: "Service buchen",
    servicesEyebrow: "Unsere Leistungen",
    servicesTitle: "Klare Einsätze für Geräte, die zuverlässig arbeiten müssen.",
    services: [
      "HoReCa-Geräteservice",
      "Reparaturen professioneller Geräte",
      "Vorbeugende und korrektive Wartung",
      "Originale und kompatible Ersatzteile",
      "Montage und Inbetriebnahme",
      "Schnelle Einsätze beim Kunden",
    ],
    equipmentEyebrow: "Betreute Geräte",
    equipmentTitle: "Von der warmen Linie bis zu Spül- und Kühlbereichen.",
    equipment: [
      "Professionelle Öfen",
      "Kombidämpfer",
      "Fritteusen",
      "Kochfelder und Grills",
      "Geschirrspüler",
      "Kühlschränke und Tiefkühler",
      "Eismaschinen",
      "Kaffeemaschinen",
    ],
    workflow: {
      eyebrow: "Serviceablauf",
      title: "Diagnose, passendes Teil, Inbetriebnahme.",
      copy: "Anfragen über die Website werden für schnelle Kontaktaufnahme, technische Diagnose und Terminplanung beim Kunden aufgenommen.",
      label: "Serviceschritte",
      steps: ["Anfrage aufnehmen", "Technische Diagnose", "Reparatur und Test"],
    },
    contact: {
      pageTitle: "Kontakt",
      heading: "Kontaktieren Sie uns",
      intro:
        "Wir beantworten gerne Fragen zu unseren Produkten, Leistungen und Möglichkeiten der Zusammenarbeit.",
      role: "Administrator",
      companyLabel: "Unternehmen",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      websiteLabel: "Website",
      mapTitle: "Karte EGM Horeca SRL",
    },
    footer: "Wir halten professionelle Küchen in Betrieb.",
    form: {
      title: "Nachricht senden",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      messagePlaceholder: "Schreiben Sie Ihre Nachricht hier",
      submitting: "Wird gesendet",
      submit: "Senden",
      fallbackError: "Die Anfrage konnte nicht gesendet werden.",
      success: "Ihre Anfrage wurde gesendet. Wir kontaktieren Sie in Kürze.",
    },
  },
};

const equipmentIcons = [
  ChefHat,
  Gauge,
  Fan,
  Sparkles,
  Cog,
  ShieldCheck,
  IceCreamBowl,
  Coffee,
];

function getSavedLanguage(): LanguageCode | null {
  let savedLanguage: string | null = null;

  try {
    savedLanguage = window.localStorage.getItem("egm-language");
  } catch {
    return null;
  }

  return languages.some((language) => language.code === savedLanguage)
    ? (savedLanguage as LanguageCode)
    : null;
}

function useLocalizedSiteCopy() {
  const [language, setLanguage] = useState<LanguageCode>("ro");
  const copy = translations[language];

  useEffect(() => {
    const savedLanguage = getSavedLanguage();

    if (!savedLanguage) {
      return;
    }

    const timeoutId = window.setTimeout(() => setLanguage(savedLanguage), 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.documentTitle;
  }, [copy.documentTitle, copy.htmlLang]);

  function selectLanguage(nextLanguage: LanguageCode) {
    setLanguage(nextLanguage);

    try {
      window.localStorage.setItem("egm-language", nextLanguage);
    } catch {
      // Ignore storage failures; the language button should still work.
    }
  }

  return { copy, language, selectLanguage };
}

function SiteHeader({
  copy,
  language,
  selectLanguage,
  page,
}: {
  copy: SiteCopy;
  language: LanguageCode;
  selectLanguage: (language: LanguageCode) => void;
  page: "home" | "contact" | "produce";
}) {
  const homeHref = page === "home" ? "#home" : "/";
  const productsHref = "/produce";
  const servicesHref = page === "home" ? "#services" : "/#services";

  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="EGM Horeca SRL">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
        </span>
        <span>
          <strong>EGM HORECA SRL</strong>
          <small>{copy.brandSubtitle}</small>
        </span>
      </Link>

      <nav aria-label={copy.navLabel}>
        <Link href={homeHref}>{copy.nav.home}</Link>
        <Link href={productsHref}>{copy.nav.products}</Link>
        <Link href={servicesHref}>{copy.nav.services}</Link>
        <Link href="/contact">{copy.nav.contact}</Link>
      </nav>

      <label className="language-select">
        <span className="sr-only">{copy.languageLabel}</span>
        <select
          value={language}
          onChange={(event) =>
            selectLanguage(event.target.value as LanguageCode)
          }
          aria-label={copy.languageLabel}
        >
          {languages.map((item) => (
            <option value={item.code} key={item.code}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      <a className="icon-button topbar-call" href="tel:+40737247777">
        <Phone size={18} aria-hidden="true" />
        <span>+40 737 247 777</span>
      </a>
    </header>
  );
}

function SiteFooter({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="footer">
      <span>EGM HORECA SRL</span>
      <span>{copy.footer}</span>
    </footer>
  );
}

function ContactSection({ copy }: { copy: SiteCopy }) {
  const contactRows = [
    {
      label: copy.contact.companyLabel,
      value: "EGM HORECA SRL",
      icon: Building2,
    },
    {
      label: copy.contact.role,
      value: "Aly Charyyev",
      icon: ShieldCheck,
    },
    {
      label: copy.contact.addressLabel,
      value: "Str. Grindeiului 3A, Bucuresti",
      icon: MapPin,
    },
    {
      label: copy.contact.phoneLabel,
      value: "+40 737 247 777 / +40 770 473 493",
      icon: Phone,
      href: "tel:+40737247777",
    },
    {
      label: copy.contact.emailLabel,
      value: "egmhoreca@gmail.com",
      icon: Mail,
      href: "mailto:egmhoreca@gmail.com",
    },
    {
      label: copy.contact.websiteLabel,
      value: "egmhoreca.ro",
      icon: Globe2,
      href: "https://egmhoreca.ro",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-title-band">
        <h2>{copy.contact.pageTitle}</h2>
      </div>
      <div className="contact-inner">
        <div className="contact-heading">
          <h3>{copy.contact.heading}</h3>
          <span aria-hidden="true" />
          <p>{copy.contact.intro}</p>
        </div>
        <div className="contact-content">
          <div className="contact-card" aria-label={copy.contact.heading}>
            {contactRows.map(({ label, value, icon: Icon, href }) => {
              const rowContent = (
                <>
                  <span className="contact-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="contact-row-text">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </>
              );

              return href ? (
                <a className="contact-row" href={href} key={label}>
                  {rowContent}
                </a>
              ) : (
                <div className="contact-row" key={label}>
                  {rowContent}
                </div>
              );
            })}
          </div>
          <LeadForm copy={copy.form} />
        </div>
        <div className="map-panel">
          <iframe
            title={copy.contact.mapTitle}
            src="https://www.google.com/maps?q=Str.%20Grindeiului%203A%2C%20Bucuresti&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ProductsSection({
  copy,
  language,
}: {
  copy: SiteCopy;
  language: LanguageCode;
}) {
  return (
    <section className="section equipment-section" id="products">
      <div className="section-heading compact">
        <p className="eyebrow">{copy.equipmentEyebrow}</p>
        <h2>{copy.equipmentTitle}</h2>
      </div>
      <div className="equipment-grid">
        {copy.equipment.map((name, index) => {
          const Icon = equipmentIcons[index];

          return (
            <article className="equipment-item" key={`${language}-${name}`}>
              <span>
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3>{name}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function LocalizedHome() {
  const { copy, language, selectLanguage } = useLocalizedSiteCopy();


  return (
    <main className="site-shell" id="home">
      <SiteHeader
        copy={copy}
        language={language}
        page="home"
        selectLanguage={selectLanguage}
      />

      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/egm-horeca-card.png"
          alt=""
          fill
          priority
          className="hero-media"
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">EGM HORECA SRL</h1>
          <p className="hero-copy">{copy.hero.copy}</p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact">
              <CalendarCheck size={19} aria-hidden="true" />
              <span>{copy.hero.primary}</span>
            </Link>
            <a className="secondary-action" href="mailto:egmhoreca@gmail.com">
              <Mail size={19} aria-hidden="true" />
              <span>{copy.hero.secondary}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="quick-panel" aria-label={copy.quickPanelLabel}>
        {copy.metrics.map((metric) => (
          <div key={`${language}-${metric.label}`}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
        <Link href="/contact" className="quick-link">
          <span>{copy.quickLink}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="section service-band" id="services">
        <div className="section-heading">
          <p className="eyebrow">{copy.servicesEyebrow}</p>
          <h2>{copy.servicesTitle}</h2>
        </div>
        <div className="service-grid">
          {copy.services.map((service) => (
            <article className="service-card" key={`${language}-${service}`}>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <ProductsSection copy={copy} language={language} />

      <section className="section workflow-section">
        <div className="workflow-copy">
          <p className="eyebrow">{copy.workflow.eyebrow}</p>
          <h2>{copy.workflow.title}</h2>
          <p>{copy.workflow.copy}</p>
        </div>
        <div className="workflow-steps" aria-label={copy.workflow.label}>
          {copy.workflow.steps.map((step, index) => (
            <div key={`${language}-${step}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter copy={copy} />
    </main>
  );
}

export function LocalizedContactPage() {
  const { copy, language, selectLanguage } = useLocalizedSiteCopy();

  return (
    <main className="site-shell contact-page-shell">
      <SiteHeader
        copy={copy}
        language={language}
        page="contact"
        selectLanguage={selectLanguage}
      />
      <ContactSection copy={copy} />
      <SiteFooter copy={copy} />
    </main>
  );
}

export function LocalizedProducePage() {
  const { copy, language, selectLanguage } = useLocalizedSiteCopy();

  return (
    <main className="site-shell produce-page-shell">
      <SiteHeader
        copy={copy}
        language={language}
        page="produce"
        selectLanguage={selectLanguage}
      />
      <ProductsSection copy={copy} language={language} />
      <SiteFooter copy={copy} />
    </main>
  );
}
