export const SITE_URL = "https://pixelabai.com";
export const SITE_NAME = "Pixelab AI";
export const DEFAULT_DESCRIPTION = "Aprende a usar la Inteligencia Artificial para transformar tu negocio y tu vida.";
export const DEFAULT_OG_IMAGE = "/og-default.svg";

export const PERSON = {
  name: "Jorge De Armas",
  jobTitle: "Especialista en IA aplicada",
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com"],
};

export function buildBreadcrumbList(items: Array<{ name: string; path: string }>) {
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
