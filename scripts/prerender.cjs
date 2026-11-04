/**
 * ASLAN CDC Static Pre-Rendering & HTML Generator
 * Generates physical directory structures and pre-rendered HTML files
 * with static metadata, Open Graph tags, canonical URLs, and Schema.org JSON-LD
 * for Hostinger Apache deployment.
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error('[PRERENDER] dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

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
    faqs: [
      {
        question: 'Which is the top Child Development Center in Tambaram & Chromepet?',
        answer: 'Aslan Child Development and Therapy Center operates two specialized facilities in West Tambaram (Mudichur Road) and Chromepet (New Colony). We provide pediatric occupational therapy, speech therapy, special education, sensory integration therapy, and behavioral guidance.'
      },
      {
        question: 'Where can I get Specialized Education in Tambaram & Chromepet?',
        answer: 'Aslan CDC provides Specialized Education with Individualized Education Plans (IEP), school readiness programs, attention skill development, and multi-sensory learning for children with autism, ADHD, learning disabilities, and developmental delays.'
      },
      {
        question: 'What conditions are supported at Aslan Therapy Center?',
        answer: 'Aslan CDC specializes in therapeutic support for ADHD, Autism Spectrum Disorder (ASD), speech delays, stuttering, apraxia, sensory processing differences (SPD), global developmental delay (GDD), cerebral palsy, Down syndrome, and classroom behavior challenges.'
      },
      {
        question: 'How do I choose between the West Tambaram and Chromepet centers?',
        answer: 'Both centers provide qualified occupational therapy, speech therapy, and special education. Families seeking extensive sensory gym sessions and ADL independence lab training frequently visit our West Tambaram main branch, while our Chromepet center provides quiet, distraction-free 1-on-1 cubicles and early childhood play therapy rooms.'
      }
    ]
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
        '@type': 'MedicalClinic',
        '@id': 'https://aslancdc.com/locations/chromepet/#clinic',
        'name': 'Aslan Child Development and Therapy Center - Chromepet',
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
    faqs: [
      {
        question: 'Which neighborhoods are served by the Chromepet center?',
        answer: 'Our Chromepet branch primarily serves families living in Chromepet, New Colony, Hasthinapuram, Radha Nagar, Pallavaram, Nemilichery, and surrounding southern Chennai suburbs.'
      },
      {
        question: 'How do I schedule an appointment for my child at the Chromepet branch?',
        answer: 'You can schedule an appointment by submitting the appointment form on this page or by contacting our team directly at 9445914020. Our care coordinator will schedule an initial observational consultation.'
      },
      {
        question: 'What should we bring to the initial consultation?',
        answer: 'Please bring any previous developmental reports, pediatrician observation notes, and school feedback, along with a note of your personal observations regarding your child\'s daily routines.'
      },
      {
        question: 'How does the Chromepet branch differ from the West Tambaram branch?',
        answer: 'Both centers deliver professional occupational therapy, speech therapy, and special education. Our West Tambaram main branch additionally houses our full sensory gym and life-skills independence lab, while Chromepet offers focused, quiet 1-on-1 cubicles and early play therapy rooms.'
      }
    ]
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
        '@type': 'MedicalClinic',
        '@id': 'https://aslancdc.com/locations/west-tambaram/#clinic',
        'name': 'Aslan Child Development and Therapy Center - West Tambaram',
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
    faqs: [
      {
        question: 'What facilities are available in the West Tambaram sensory gym?',
        answer: 'Our West Tambaram sensory gym includes suspended swings, spider climbing nets, balance ladders, crash mats, and sensory tactile paths designed to help children organize vestibular, proprioceptive, and tactile inputs.'
      },
      {
        question: 'Does Aslan CDC provide home-visit appointments from West Tambaram?',
        answer: 'Yes, for families unable to travel to the clinic for certain sessions, our team offers structured home appointments within our local service radius across West Tambaram and Mudichur.'
      },
      {
        question: 'What age groups do you support at the West Tambaram center?',
        answer: 'We support infants, toddlers, young children, and adolescents through early intervention, school-age therapy, and teen independence training.'
      },
      {
        question: 'Can we visit both branches?',
        answer: 'Yes. Families residing closer to Chromepet can attend sessions at our New Colony center, while visiting West Tambaram for specialized sensory gym sessions.'
      }
    ]
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
    faqs: [
      {
        question: 'How long is a typical pediatric occupational therapy session?',
        answer: 'A standard occupational therapy session is typically 45 minutes of direct, play-based intervention followed by a collaborative discussion with parents to review home practice strategies.'
      },
      {
        question: 'At what age can a child begin occupational therapy?',
        answer: 'Occupational therapy can begin as early as infancy through early intervention programs, supporting motor delays, sensory feeding difficulties, and posture.'
      },
      {
        question: 'How does Occupational Therapy differ from Physiotherapy?',
        answer: 'While physiotherapy focuses primarily on gross motor mobility and muscle strength, occupational therapy focuses on functional independence, fine motor skills, handwriting, and daily living routines.'
      },
      {
        question: 'Which Aslan CDC branch offers occupational therapy?',
        answer: 'Both our West Tambaram (Mudichur Road) and Chromepet (New Colony) centers provide qualified occupational therapy.'
      }
    ]
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
        'name': 'Autism Developmental Support & Early Intervention',
        'description': 'Comprehensive multidisciplinary developmental support including sensory integration, speech stimulation, and positive behavioral shaping for children on the autism spectrum.',
        'provider': {
          '@type': 'MedicalOrganization',
          'name': 'Aslan Child Development and Therapy Center',
          'url': 'https://aslancdc.com/'
        }
      }
    ],
    faqs: [
      {
        question: 'Can Aslan CDC support my child if we don\'t have a formal diagnosis yet?',
        answer: 'Yes. If your child exhibits speech delays, sensory sensitivities, lack of eye contact, or behavioral challenges, you do not need to wait for a formal medical report to begin functional therapy.'
      },
      {
        question: 'Which Aslan branch provides autism support programs?',
        answer: 'Both our West Tambaram (Mudichur Road) and Chromepet (New Colony) centers offer comprehensive autism developmental therapy, speech therapy, and behavioral guidance.'
      },
      {
        question: 'How many sessions per week will my child need?',
        answer: 'Session frequency is determined collaboratively following the initial observational evaluation, typically ranging from 2 to 5 sessions per week.'
      },
      {
        question: 'Do you offer school readiness programs for children on the spectrum?',
        answer: 'Yes. Our school readiness curriculum focuses on sitting tolerance, circle time participation, following instructions, and peer interaction.'
      }
    ]
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

  // Remove any existing JSON-LD scripts and robots tags from template
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');
  html = html.replace(/<meta name="robots" content=".*?" \/>\s*/gi, '');

  if (page.noindex) {
    html = html.replace(
      '</head>',
      '    <meta name="robots" content="noindex, nofollow" />\n  </head>'
    );
  }

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${page.canonicalUrl}" />`
  );

  // Replace OG Tags
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

  // Replace Twitter Tags
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

  // Build JSON-LD Structured Data
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

  // Inject Schemas into head
  if (schemas.length > 0) {
    const jsonLdBlock = schemas.map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`).join('\n');
    html = html.replace('</head>', `  ${jsonLdBlock}\n  </head>`);
  }

  return html;
}

// Generate all pages
console.log('[PRERENDER] Starting static page generation for Hostinger...');

PAGES.forEach(page => {
  const dir = path.dirname(page.outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const generatedHtml = generateHtmlForPage(page, baseHtml);
  fs.writeFileSync(page.outputPath, generatedHtml, 'utf8');
  console.log(`[PRERENDER] ✓ Generated: ${path.relative(DIST_DIR, page.outputPath)}`);
});

console.log('[PRERENDER] All static SEO pages generated successfully.');
