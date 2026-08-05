export const siteUrl = new URL("https://www.egmhoreca.ro");

export const seoKeywords = [
  "EGM Horeca",
  "EGM Horeca SRL",
  "service echipamente HoReCa Bucuresti",
  "reparatii echipamente HoReCa",
  "reparatii cuptoare profesionale",
  "mentenanta echipamente HoReCa",
  "piese schimb echipamente HoReCa",
  "service bucatarii profesionale",
  "masini spalat vase profesionale service",
  "frigidere profesionale service",
  "masini de gheata service",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "EGM Horeca SRL",
  alternateName: "EGM Horeca",
  url: absoluteUrl("/"),
  logo: absoluteUrl("/favicon.svg"),
  image: absoluteUrl("/egm-horeca-card.png"),
  description:
    "Service pentru echipamente profesionale HoReCa in Bucuresti: reparatii rapide, mentenanta preventiva si piese de schimb pentru bucatarii profesionale.",
  telephone: "+40737247777",
  email: "egmhoreca@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Grindeiului 3A",
    addressLocality: "Bucuresti",
    addressCountry: "RO",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bucuresti",
    },
    {
      "@type": "Country",
      name: "Romania",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+40737247777",
      email: "egmhoreca@gmail.com",
      contactType: "customer service",
      areaServed: "RO",
      availableLanguage: ["Romanian", "English", "Turkish", "German"],
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Reparatii echipamente HoReCa",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mentenanta echipamente profesionale HoReCa",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Piese de schimb pentru echipamente HoReCa",
      },
    },
  ],
};
