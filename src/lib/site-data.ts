import applicationsData from "../../data/zh/applications.json";
import companyData from "../../data/zh/company.json";
import newsData from "../../data/zh/news.json";
import productsData from "../../data/zh/products.json";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  inquirable: boolean;
  minOrderQuantity: number;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export interface CompanyProfile {
  name: string;
  slogan: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}

export interface ApplicationUseCase {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  relatedProductSlugs: string[];
}

function toStringRecord(input: unknown): Record<string, string> {
  if (!input || typeof input !== "object") {
    return {};
  }

  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [key, String(value)]),
  );
}

export const products: Product[] = (productsData as unknown[]).map((item) => {
  const product = item as Record<string, unknown>;

  return {
    id: String(product.id ?? ""),
    slug: String(product.slug ?? ""),
    name: String(product.name ?? ""),
    category: String(product.category ?? ""),
    description: String(product.description ?? ""),
    specs: toStringRecord(product.specs),
    inquirable: Boolean(product.inquirable),
    minOrderQuantity: Number(product.minOrderQuantity ?? 1),
  };
});

export const news: NewsArticle[] = (newsData as unknown[]).map((item) => {
  const article = item as Record<string, unknown>;

  return {
    id: String(article.id ?? ""),
    slug: String(article.slug ?? ""),
    title: String(article.title ?? ""),
    date: String(article.date ?? ""),
    category: String(article.category ?? ""),
    excerpt: String(article.excerpt ?? ""),
    content: String(article.content ?? ""),
  };
});

const companyObject = companyData as Record<string, unknown>;

export const applications: ApplicationUseCase[] = (applicationsData as unknown[]).map((item) => {
  const useCase = item as Record<string, unknown>;
  const relatedProducts = Array.isArray(useCase.relatedProductSlugs)
    ? useCase.relatedProductSlugs.map((slug) => String(slug))
    : [];

  return {
    id: String(useCase.id ?? ""),
    slug: String(useCase.slug ?? ""),
    name: String(useCase.name ?? ""),
    summary: String(useCase.summary ?? ""),
    description: String(useCase.description ?? ""),
    relatedProductSlugs: relatedProducts,
  };
});

export const company: CompanyProfile = {
  name: String(companyObject.name ?? ""),
  slogan: String(companyObject.slogan ?? ""),
  description: String(companyObject.description ?? ""),
  phone: String(companyObject.phone ?? ""),
  email: String(companyObject.email ?? ""),
  address: String(companyObject.address ?? ""),
};

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getApplicationBySlug(slug: string) {
  return applications.find((useCase) => useCase.slug === slug);
}

export function getNewsBySlug(slug: string) {
  return news.find((article) => article.slug === slug);
}

export function getCategories() {
  return [...new Set(products.map((product) => product.category))];
}

export function getProductsForApplication(applicationSlug: string) {
  const useCase = getApplicationBySlug(applicationSlug);

  if (!useCase) {
    return [];
  }

  return products.filter((product) => useCase.relatedProductSlugs.includes(product.slug));
}

export function getApplicationsForProduct(productSlug: string) {
  return applications.filter((useCase) => useCase.relatedProductSlugs.includes(productSlug));
}
