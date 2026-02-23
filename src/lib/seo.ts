export const SITE_URL = "https://pixelabai.com";
export const SITE_NAME = "Pixelab AI";
export const DEFAULT_DESCRIPTION =
  "Aprende a usar la Inteligencia Artificial para transformar tu negocio y tu vida.";
export const DEFAULT_OG_IMAGE = "/og-default.svg";

export const PERSON = {
  name: "Jorge De Armas",
  jobTitle: "Especialista en IA aplicada",
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com"],
};

export const ORGANIZATION = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
};

export function buildBreadcrumbList(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    url: PERSON.url,
    sameAs: PERSON.sameAs,
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: {
      "@type": "ImageObject",
      url: ORGANIZATION.logo,
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION.logo,
      },
    },
    inLanguage: "es-ES",
  };
}

export function getFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  datePublished,
  url,
  image,
}: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: PERSON.name,
      url: PERSON.url,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
    },
    image: [image],
  };
}

export function getCourseSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
    },
    offers: {
      "@type": "Offer",
      url,
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  };
}

export function getItemListSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
