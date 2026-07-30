"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChefHat,
  Coffee,
  Cog,
  Fan,
  Gauge,
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
    services: string;
    equipment: string;
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
    eyebrow: string;
    role: string;
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
      services: "Servicii",
      equipment: "Echipamente",
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
      eyebrow: "Contact direct",
      role: "Administrator",
    },
    footer: "Mentinem bucatariile profesionale in functiune.",
    form: {
      title: "Solicitare service",
      name: "Nume",
      phone: "Telefon",
      email: "Email",
      service: "Tip serviciu",
      details: "Detalii",
      detailsPlaceholder: "Echipament, model, problema observata",
      submitting: "Se trimite",
      submit: "Trimite solicitarea",
      fallbackError: "Cererea nu a putut fi trimisa.",
      success:
        "Solicitarea a fost trimisa. Va contactam in cel mai scurt timp.",
      options: [
        "Reparatie urgenta",
        "Mentenanta preventiva",
        "Piese de schimb",
        "Montaj si punere in functiune",
        "Diagnostic echipament",
      ],
    },
  },
  en: {
    htmlLang: "en",
    documentTitle: "EGM Horeca SRL | Professional HoReCa Equipment Service",
    brandSubtitle: "Professional HoReCa equipment service",
    navLabel: "Main navigation",
    nav: {
      services: "Services",
      equipment: "Equipment",
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
      eyebrow: "Direct contact",
      role: "Administrator",
    },
    footer: "Keeping professional kitchens running.",
    form: {
      title: "Service request",
      name: "Name",
      phone: "Phone",
      email: "Email",
      service: "Service type",
      details: "Details",
      detailsPlaceholder: "Equipment, model, observed issue",
      submitting: "Sending",
      submit: "Send request",
      fallbackError: "The request could not be sent.",
      success: "Your request has been sent. We will contact you shortly.",
      options: [
        "Urgent repair",
        "Preventive maintenance",
        "Spare parts",
        "Installation and commissioning",
        "Equipment diagnosis",
      ],
    },
  },
  tr: {
    htmlLang: "tr",
    documentTitle: "EGM Horeca SRL | Profesyonel HoReCa Ekipman Servisi",
    brandSubtitle: "Profesyonel HoReCa ekipman servisi",
    navLabel: "Ana navigasyon",
    nav: {
      services: "Hizmetler",
      equipment: "Ekipmanlar",
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
      eyebrow: "Doğrudan iletişim",
      role: "Yönetici",
    },
    footer: "Profesyonel mutfakları çalışır durumda tutuyoruz.",
    form: {
      title: "Servis talebi",
      name: "Ad Soyad",
      phone: "Telefon",
      email: "E-posta",
      service: "Hizmet türü",
      details: "Detaylar",
      detailsPlaceholder: "Ekipman, model, görülen sorun",
      submitting: "Gönderiliyor",
      submit: "Talebi gönder",
      fallbackError: "Talep gönderilemedi.",
      success: "Talebiniz gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
      options: [
        "Acil tamir",
        "Önleyici bakım",
        "Yedek parçalar",
        "Montaj ve devreye alma",
        "Ekipman teşhisi",
      ],
    },
  },
  de: {
    htmlLang: "de",
    documentTitle: "EGM Horeca SRL | Service für professionelle HoReCa-Geräte",
    brandSubtitle: "Service für professionelle HoReCa-Geräte",
    navLabel: "Hauptnavigation",
    nav: {
      services: "Leistungen",
      equipment: "Geräte",
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
      eyebrow: "Direkter Kontakt",
      role: "Administrator",
    },
    footer: "Wir halten professionelle Küchen in Betrieb.",
    form: {
      title: "Serviceanfrage",
      name: "Name",
      phone: "Telefon",
      email: "E-Mail",
      service: "Serviceart",
      details: "Details",
      detailsPlaceholder: "Gerät, Modell, beobachtetes Problem",
      submitting: "Wird gesendet",
      submit: "Anfrage senden",
      fallbackError: "Die Anfrage konnte nicht gesendet werden.",
      success: "Ihre Anfrage wurde gesendet. Wir kontaktieren Sie in Kürze.",
      options: [
        "Dringende Reparatur",
        "Vorbeugende Wartung",
        "Ersatzteile",
        "Montage und Inbetriebnahme",
        "Gerätediagnose",
      ],
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

export function LocalizedHome() {
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


  return (
    <main className="site-shell">
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
          <a href="#servicii">{copy.nav.services}</a>
          <a href="#echipamente">{copy.nav.equipment}</a>
          <a href="#contact">{copy.nav.contact}</a>
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
            <a className="primary-action" href="#contact">
              <CalendarCheck size={19} aria-hidden="true" />
              <span>{copy.hero.primary}</span>
            </a>
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
        <a href="#contact" className="quick-link">
          <span>{copy.quickLink}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="section service-band" id="servicii">
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

      <section className="section equipment-section" id="echipamente">
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

      <section className="section contact-section" id="contact">
        <div className="contact-details">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>Aly Charyyev</h2>
          <p className="role">{copy.contact.role}</p>
          <div className="contact-list">
            <a href="tel:+40737247777">
              <Phone size={20} aria-hidden="true" />
              <span>+40 737 247 777</span>
            </a>
            <a href="tel:+40770473493">
              <Phone size={20} aria-hidden="true" />
              <span>+40 770 473 493</span>
            </a>
            <a href="mailto:egmhoreca@gmail.com">
              <Mail size={20} aria-hidden="true" />
              <span>egmhoreca@gmail.com</span>
            </a>
            <span>
              <MapPin size={20} aria-hidden="true" />
              <span>Str. Grindeiului 3A, Bucuresti</span>
            </span>
          </div>
        </div>
        <LeadForm copy={copy.form} />
      </section>

      <footer className="footer">
        <span>EGM HORECA SRL</span>
        <span>{copy.footer}</span>
      </footer>
    </main>
  );
}
