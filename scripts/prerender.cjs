/**
 * ASLAN CDC Static Pre-Rendering & HTML Generator
 * Renders actual React DOM into <div id="root"> for all 5 SEO pages
 * with synchronized Schema.org JSON-LD, metadata, canonical URLs, and Open Graph tags.
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const DIST_DIR = path.resolve(__dirname, '../dist');
const DIST_SSR_DIR = path.resolve(__dirname, '../dist-ssr');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');
const SSR_ENTRY_PATH = path.join(DIST_SSR_DIR, 'entry-server.js');

async function prerender() {
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.error('[PRERENDER] dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  if (!fs.existsSync(SSR_ENTRY_PATH)) {
    console.error('[PRERENDER] dist-ssr/entry-server.js not found. Run vite build --ssr first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

  // Load compiled server entry
  const serverEntry = await import(pathToFileURL(SSR_ENTRY_PATH).href);
  const {
    render,
    HOMEPAGE_FAQS,
    CHROMEPET_FAQS,
    WEST_TAMBARAM_FAQS,
    OCCUPATIONAL_THERAPY_FAQS,
    AUTISM_SUPPORT_FAQS
  } = serverEntry;

  const PAGES = [
    {
      path: '/',
      outputPath: path.join(DIST_DIR, 'index.html'),
      title: 'Child Development & Therapy Center in Tambaram & Chromepet | Aslan CDC',
      description: 'Aslan CDC is a premier child development and therapy center in West Tambaram & Chromepet, Chennai. Specialized occupational therapy, speech, and autism support.',
      canonicalUrl: 'https://aslancdc.com/',
      ogImage: 'https://aslancdc.com/images/sensory_gym_spider_net.webp',
      schemaGraph: [
        {
          '@type': 'MedicalOrganization',
          '@id': 'https://aslancdc.com/#organization',
          'name': 'Aslan Child Development and Therapy Center',
          'url': 'https://aslancdc.com/',
          'logo': 'https://aslancdc.com/images/aslan_logo_256.webp',
          'description': 'Premier child development and therapy center in Chennai with specialized facilities in West Tambaram and Chromepet.',
          'telephone': ['+91-9445914020', '+91-8072545109'],
          'sameAs': [
            'https://www.google.com/maps?cid=6489953835072047462',
            'https://www.google.com/maps?cid=14181057482404099081'
          ]
        },
        {
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
        },
        {
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
        }
      ],
      faqs: HOMEPAGE_FAQS
    },
    {
      path: '/locations/chromepet/',
      outputPath: path.join(DIST_DIR, 'locations/chromepet/index.html'),
      title: 'Child Development & Therapy Center in Chromepet | Aslan CDC',
      description: 'Dedicated child development and therapy center in New Colony, Chromepet. Providing pediatric occupational therapy, speech therapy, and autism support.',
      canonicalUrl: 'https://aslancdc.com/locations/chromepet/',
      ogImage: 'https://aslancdc.com/images/play_therapy_room.webp',
      schemaGraph: [
        {
          '@type': 'MedicalOrganization',
          '@id': 'https://aslancdc.com/#organization',
          'name': 'Aslan Child Development and Therapy Center',
          'url': 'https://aslancdc.com/',
          'logo': 'https://aslancdc.com/images/aslan_logo_256.webp',
          'description': 'Premier child development and therapy center in Chennai with specialized facilities in West Tambaram and Chromepet.',
          'telephone': ['+91-9445914020', '+91-8072545109']
        },
        {
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
        }
      ],
      faqs: CHROMEPET_FAQS
    },
    {
      path: '/locations/west-tambaram/',
      outputPath: path.join(DIST_DIR, 'locations/west-tambaram/index.html'),
      title: 'Child Development & Therapy Center in West Tambaram | Aslan',
      description: 'Main therapy facility in West Tambaram, Chennai. Featuring a full sensory gym, occupational therapy, speech therapy, special education, and ADL lab.',
      canonicalUrl: 'https://aslancdc.com/locations/west-tambaram/',
      ogImage: 'https://aslancdc.com/images/sensory_gym_spider_net.webp',
      schemaGraph: [
        {
          '@type': 'MedicalOrganization',
          '@id': 'https://aslancdc.com/#organization',
          'name': 'Aslan Child Development and Therapy Center',
          'url': 'https://aslancdc.com/',
          'logo': 'https://aslancdc.com/images/aslan_logo_256.webp',
          'description': 'Premier child development and therapy center in Chennai with specialized facilities in West Tambaram and Chromepet.',
          'telephone': ['+91-9445914020', '+91-8072545109']
        },
        {
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
        }
      ],
      faqs: WEST_TAMBARAM_FAQS
    },
    {
      path: '/services/occupational-therapy/',
      outputPath: path.join(DIST_DIR, 'services/occupational-therapy/index.html'),
      title: 'Pediatric Occupational Therapy in Tambaram & Chromepet | Aslan',
      description: 'Pediatric occupational therapy in West Tambaram & Chromepet, Chennai. Enhancing fine motor skills, sensory integration, balance, handwriting, and daily self-care.',
      canonicalUrl: 'https://aslancdc.com/services/occupational-therapy/',
      ogImage: 'https://aslancdc.com/images/sensory_gym_side.webp',
      schemaGraph: [
        {
          '@type': 'MedicalTherapy',
          'name': 'Pediatric Occupational Therapy',
          'description': 'Enhancing fine motor skills, sensory integration, handwriting, and daily self-care in children.',
          'provider': {
            '@type': 'MedicalOrganization',
            'name': 'Aslan Child Development and Therapy Center',
            'url': 'https://aslancdc.com/'
          }
        }
      ],
      faqs: OCCUPATIONAL_THERAPY_FAQS
    },
    {
      path: '/services/autism-support/',
      outputPath: path.join(DIST_DIR, 'services/autism-support/index.html'),
      title: 'Autism Therapy & Early Intervention in Tambaram & Chromepet',
      description: 'Compassionate autism developmental therapy in West Tambaram & Chromepet, Chennai. Multidisciplinary sensory, speech, behavioral, and individualized educational care.',
      canonicalUrl: 'https://aslancdc.com/services/autism-support/',
      ogImage: 'https://aslancdc.com/images/sensory_gym_spider_net.webp',
      schemaGraph: [
        {
          '@type': 'MedicalTherapy',
          'name': 'Autism Developmental Therapy & Support',
          'description': 'Multidisciplinary pediatric developmental therapy, speech therapy, sensory integration, and behavioral guidance for children on the autism spectrum.',
          'provider': {
            '@type': 'MedicalOrganization',
            'name': 'Aslan Child Development and Therapy Center',
            'url': 'https://aslancdc.com/'
          }
        }
      ],
      faqs: AUTISM_SUPPORT_FAQS
    },
    {
      path: '/404',
      outputPath: path.join(DIST_DIR, '404.html'),
      title: 'Page Not Found | Aslan Child Development and Therapy Center',
      description: 'The requested page was not found.',
      canonicalUrl: 'https://aslancdc.com/404',
      ogImage: 'https://aslancdc.com/images/sensory_gym_spider_net.webp',
      noindex: true,
      schemaGraph: []
    }
  ];

  function generateHtmlForPage(page, template) {
    let html = template;

    // 1. Remove any existing JSON-LD scripts and robots tags from template
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');
    html = html.replace(/<meta name="robots" content=".*?" \/>\s*/gi, '');

    // 2. Pre-render the actual React DOM tree into <div id="root">
    if (page.path !== '/404') {
      try {
        const { appHtml } = render(page.path);
        if (appHtml) {
          html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        }
      } catch (err) {
        console.error(`[PRERENDER] Error rendering body for ${page.path}:`, err);
      }
    } else {
      try {
        const { appHtml } = render('/404');
        if (appHtml) {
          html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        }
      } catch {
        // Fallback for 404
      }
    }

    // 3. Robots directive for noindex pages
    if (page.noindex) {
      html = html.replace(
        '</head>',
        '    <meta name="robots" content="noindex, nofollow" />\n  </head>'
      );
    }

    // 4. Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

    // 5. Replace Meta Description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/i,
      `<meta name="description" content="${page.description}" />`
    );

    // 6. Replace Canonical Link
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/i,
      `<link rel="canonical" href="${page.canonicalUrl}" />`
    );

    // 7. Replace OG Tags
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/i,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/i,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/i,
      `<meta property="og:url" content="${page.canonicalUrl}" />`
    );
    html = html.replace(
      /<meta property="og:image" content=".*?" \/>/i,
      `<meta property="og:image" content="${page.ogImage}" />`
    );

    // 8. Replace Twitter Tags
    html = html.replace(
      /<meta name="twitter:title" content=".*?" \/>/i,
      `<meta name="twitter:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/i,
      `<meta name="twitter:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta name="twitter:image" content=".*?" \/>/i,
      `<meta name="twitter:image" content="${page.ogImage}" />`
    );

    // 9. Build JSON-LD Structured Data
    let schemas = [];
    if (page.schemaGraph && page.schemaGraph.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@graph': page.schemaGraph
      });
    }

    if (page.faqs && page.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': page.faqs.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      });
    }

    // 10. Inject Schemas into head
    if (schemas.length > 0) {
      const jsonLdBlock = schemas.map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`).join('\n');
      html = html.replace('</head>', `  ${jsonLdBlock}\n  </head>`);
    }

    return html;
  }

  console.log('[PRERENDER] Starting true static body HTML pre-rendering...');

  for (const page of PAGES) {
    const dir = path.dirname(page.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const generatedHtml = generateHtmlForPage(page, baseHtml);
    fs.writeFileSync(page.outputPath, generatedHtml, 'utf8');
    const hasContent = generatedHtml.includes('<div id="root"><') && !generatedHtml.includes('<div id="root"></div>');
    console.log(`[PRERENDER] ✓ Generated: ${path.relative(DIST_DIR, page.outputPath)} (Static Body Rendered: ${hasContent})`);
  }

  // Cleanup temporary dist-ssr directory
  try {
    fs.rmSync(DIST_SSR_DIR, { recursive: true, force: true });
    console.log('[PRERENDER] ✓ Cleaned up dist-ssr bundle.');
  } catch {
    // Ignore cleanup errors
  }

  console.log('[PRERENDER] All static SEO pages with pre-rendered body HTML generated successfully.');
}

prerender().catch(err => {
  console.error('[PRERENDER] Unhandled fatal error:', err);
  process.exit(1);
});
