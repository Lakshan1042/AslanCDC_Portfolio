import React, { useEffect } from 'react';
import { CENTER_INFO } from '../data/contentData';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  noindex?: boolean;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  branchType?: 'main' | 'chromepet' | 'all';
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  noindex = false,
  ogImage = 'https://aslancdc.com/images/sensory_gym_spider_net.webp',
  breadcrumbs = [],
  faqs = [],
  branchType = 'all',
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
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

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

    // 6. Schema.org Injection
    const clinicSchemaId = 'aslan-clinic-schema';
    let clinicScript = document.getElementById(clinicSchemaId) as HTMLScriptElement | null;
    if (!clinicScript) {
      clinicScript = document.createElement('script');
      clinicScript.id = clinicSchemaId;
      clinicScript.type = 'application/ld+json';
      document.head.appendChild(clinicScript);
    }

    const organizationSchema = {
      '@type': 'MedicalOrganization',
      '@id': 'https://aslancdc.com/#organization',
      'name': CENTER_INFO.name,
      'url': 'https://aslancdc.com/',
      'logo': 'https://aslancdc.com/images/aslan_logo_256.webp',
      'description': 'Premier child development and therapy center in Chennai with specialized facilities in West Tambaram and Chromepet.',
      'telephone': CENTER_INFO.phones.map(p => `+91-${p}`),
    };

    const westTambaramClinic = {
      '@type': 'MedicalClinic',
      '@id': 'https://aslancdc.com/locations/west-tambaram/#clinic',
      'name': 'Aslan Child Development and Therapy Center - West Tambaram',
      'parentOrganization': { '@id': 'https://aslancdc.com/#organization' },
      'url': 'https://aslancdc.com/locations/west-tambaram/',
      'image': 'https://aslancdc.com/images/sensory_gym_spider_net.webp',
      'telephone': '+91-9445914020',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '6, Raju St, Mudichur Rd, West Tambaram',
        'addressLocality': 'Chennai',
        'addressRegion': 'Tamil Nadu',
        'postalCode': '600045',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '12.926834',
        'longitude': '80.1054806'
      },
      'openingHoursSpecification': [{
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00'
      }]
    };

    const chromepetClinic = {
      '@type': 'MedicalClinic',
      '@id': 'https://aslancdc.com/locations/chromepet/#clinic',
      'name': 'Aslan Child Development and Therapy Center - Chromepet',
      'parentOrganization': { '@id': 'https://aslancdc.com/#organization' },
      'url': 'https://aslancdc.com/locations/chromepet/',
      'image': 'https://aslancdc.com/images/play_therapy_room.webp',
      'telephone': '+91-9445914020',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'No: 7/4, 3rd Cross St, New Colony, Chromepet',
        'addressLocality': 'Chennai',
        'addressRegion': 'Tamil Nadu',
        'postalCode': '600044',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '12.952751',
        'longitude': '80.1390222'
      },
      'openingHoursSpecification': [{
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00'
      }]
    };

    let graphData: unknown[] = [organizationSchema];
    if (branchType === 'main') {
      graphData = [organizationSchema, westTambaramClinic];
    } else if (branchType === 'chromepet') {
      graphData = [organizationSchema, chromepetClinic];
    } else {
      graphData = [organizationSchema, westTambaramClinic, chromepetClinic];
    }

    clinicScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graphData
    });

    // 7. FAQPage Schema Injection (strictly matching visible FAQs)
    const faqSchemaId = 'aslan-faq-schema';
    let faqScript = document.getElementById(faqSchemaId) as HTMLScriptElement | null;
    if (faqs && faqs.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = faqSchemaId;
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      });
    } else if (faqScript) {
      faqScript.remove();
    }

    // 8. Breadcrumb Schema Injection
    const breadcrumbSchemaId = 'aslan-breadcrumb-schema';
    let breadcrumbScript = document.getElementById(breadcrumbSchemaId) as HTMLScriptElement | null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = breadcrumbSchemaId;
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'name': b.name,
          'item': b.url
        }))
      });
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

  }, [title, description, canonicalUrl, noindex, ogImage, breadcrumbs, faqs, branchType]);

  return null;
};
