import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://shreejitaxiservice.in';
const SITE_NAME = 'Shree Ji Taxi Service';
const DEFAULT_IMAGE = `${SITE_URL}/images/preview/preview1.jpg`;

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEOHead({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  structuredData,
}: SEOHeadProps) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1536" />
      <meta property="og:image:height" content="1024" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
