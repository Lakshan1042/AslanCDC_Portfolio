import React, { useEffect } from 'react';
import { CENTER_INFO } from '../data/contentData';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  noindex?: boolean;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  noindex = false,
  ogImage = 'https://aslancdc.com/images/hero_therapy.png',
  breadcrumbs = [],
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to set meta tag
    const setMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper function to set link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Set Meta Description & Robots
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    // 3. Set Canonical URL
    setLink('canonical', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', CENTER_INFO.name);

    // 5. Twitter Card Tags
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 6. LocalBusiness / MedicalClinic Schema Injection
    const clinicSchemaId = 'aslan-clinic-schema';
    let clinicScript = document.getElementById(clinicSchemaId) as HTMLScriptElement | null;
    if (!clinicScript) {
      clinicScript = document.createElement('script');
      clinicScript.id = clinicSchemaId;
      clinicScript.type = 'application/ld+json';
      document.head.appendChild(clinicScript);
    }

    const clinicSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': CENTER_INFO.name,
      'description': 'Specialized pediatric therapy, speech therapy, occupational therapy, and education in West Tambaram, Chennai.',
      'url': CENTER_INFO.siteUrl,
      'logo': `${CENTER_INFO.siteUrl}/favicon.svg`,
      'image': ogImage,
      'telephone': CENTER_INFO.phones.map(p => `+91-${p}`),
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2nd Floor, Sha Complex, Mudichur Road, West Tambaram',
        'addressLocality': 'Chennai',
        'addressRegion': 'Tamil Nadu',
        'postalCode': '600045',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': CENTER_INFO.latitude,
        'longitude': CENTER_INFO.longitude
      },
      'openingHoursSpecification': [{
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00'
      }],
      'areaServed': ['West Tambaram', 'Tambaram', 'Chennai', 'Tamil Nadu'],
      'medicalSpecialty': ['Pediatric Therapy', 'Occupational Therapy', 'Speech Therapy', 'Special Education']
    };
    clinicScript.text = JSON.stringify(clinicSchema);

    // 7. Breadcrumb Schema Injection
    const breadcrumbSchemaId = 'aslan-breadcrumb-schema';
    let breadcrumbScript = document.getElementById(breadcrumbSchemaId) as HTMLScriptElement | null;
    if (breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = breadcrumbSchemaId;
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'name': b.name,
          'item': b.url
        }))
      };
      breadcrumbScript.text = JSON.stringify(breadcrumbListSchema);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

  }, [title, description, canonicalUrl, noindex, ogImage, breadcrumbs]);

  return null;
};
