import { COMPANY_INFO, FAQ_DATA } from './constants';

const SITE_URL = 'https://shreejitaxiservice.in';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: COMPANY_INFO.name,
  alternateName: COMPANY_INFO.nameHindi,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  image: `${SITE_URL}/images/preview/preview1.jpg`,
  telephone: `+91${COMPANY_INFO.phone1}`,
  email: COMPANY_INFO.email,
  foundingDate: '2010',
  founder: {
    '@type': 'Person',
    name: COMPANY_INFO.owner,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Swarg Ashram Colony, GTB Nagar, Mukherjee Nagar',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110009',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.7079,
    longitude: 77.2100,
  },
  areaServed: [
    { '@type': 'City', name: 'New Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Ghaziabad' },
    { '@type': 'City', name: 'Faridabad' },
  ],
  serviceType: [
    'Airport Transfer',
    'Outstation Taxi',
    'Local Taxi',
    'Pilgrimage Tours',
    'Corporate Travel',
    'Wedding Transportation',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: 'Rs. 1000 - Rs. 10000',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '2500',
    bestRating: '5',
  },
  sameAs: [
    'https://www.instagram.com/shree_ji_ki_sawari/',
    'https://www.facebook.com/people/Vijay-Yadav/100026899362934/',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
