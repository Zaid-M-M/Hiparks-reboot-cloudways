import { notFound } from "next/navigation";
import NDHero from "./components/NDHero";
import NDContent from "./components/NDContent";
import FormSec from "@/components/Factory/Formsec";

export const revalidate = 3600; // ISR: Revalidate every hour
export const dynamic = 'force-static';
export const dynamicParams = true;

const WP_BASE =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${WP_BASE}/media_news?per_page=100`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) return [];
    
    const news = await res.json();
    return news.map((item) => ({
      slug: item.slug,
    }));
  } catch {
    return [];
  }
}

/**
 * Format WordPress uploads URL → frontend URL
 */
function formatMediaUrl(url) {
  if (!url) return "";
  return url.replace(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads",
    "/wp-content/uploads"
  );
}

/**
 * Fetch a single media_news post by slug
 */
async function fetchMediaNewsBySlug(slug) {
  try {
    const res = await fetch(`${WP_BASE}/media_news?slug=${slug}`, {
      next: { revalidate: 3600 } // ISR cache
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch media_news: ${res.status}`);
    }

    const data = await res.json();
    return data?.length ? data[0] : null;
  } catch (err) {
    console.error("Error fetching media_news:", err);
    return null;
  }
}

/* -----------------------------------------------------------
   ✅ generateMetadata()
----------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const mediaNews = await fetchMediaNewsBySlug(slug);

  if (!mediaNews) {
    return {
      title: "News Not Found",
      description: "The requested news article could not be found.",
    };
  }

  // Meta title + description from ACF
  const metaTitle = mediaNews.acf?.m_news_meta_title;

  const metaDescription = mediaNews.acf?.m_news_meta_description;

  // OG Image from ACF (supports string or object)
  const rawOgImage =
    typeof mediaNews.acf?.m_news_image === "string"
      ? mediaNews.acf?.m_news_image
      : mediaNews.acf?.m_news_image?.url || mediaNews.acf?.m_news_image || "";

  const ogImage = formatMediaUrl(rawOgImage);

  return {
    title: metaTitle,
    description: metaDescription,

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `https://yourdomain.com/media-news/${slug}`,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: metaTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : [],
    },
  };
}

/* -----------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------- */
export default async function MediaNewsPage({ params }) {
  const { slug } = await params;

  const mediaNews = await fetchMediaNewsBySlug(slug);

  if (!mediaNews) {
    notFound();
  }

  return (
    <>
      <NDHero slug={slug} newsData={mediaNews} />
      {/* <h1>ZAID</h1> */}
      <NDContent slug={slug} newsData={mediaNews} />
      <FormSec />
    </>
  );
}
