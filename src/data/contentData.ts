import type { ServiceItem, ApproachStep, TestimonialItem, BranchInfo } from '../types';

export const CENTER_INFO = {
  name: 'Aslan Child Development and Therapy Center',
  tagline: 'Supporting Every Step of Your Child’s Growth',
  address: '6, Raju St, Mudichur Rd, West Tambaram, Tambaram, Tamil Nadu 600045',
  shortAddress: 'West Tambaram & Chromepet, Chennai',
  landmark: '6, Raju St, Mudichur Rd, West Tambaram',
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM',
  closedDays: 'Sunday: Closed',
  phones: ['9445914020', '8072545109'],
  whatsapp: '9445914020',
  googleMapsUrl: 'https://www.google.com/maps/place/ASLAN+-+Occupational+Therapy,+Speech+Therapy,+Special+Education,+Physio+Therapy/@12.9268392,80.1029057,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525f051e448e3b:0x5a10d0687e59a966!8m2!3d12.926834!4d80.1054806!16s%2Fg%2F11l_18kd1x',
  latitude: '12.926834',
  longitude: '80.1054806',
  siteUrl: 'https://aslancdc.com',
  branches: [
    {
      id: 'main-branch',
      name: 'Main Branch (West Tambaram)',
      shortName: 'West Tambaram',
      address: '6, Raju St, Mudichur Rd, West Tambaram, Tambaram, Tamil Nadu 600045',
      street: '6, Raju St, Mudichur Rd',
      area: 'West Tambaram, Tambaram',
      cityStatePin: 'Chennai, Tamil Nadu – 600045',
      landmark: 'Mudichur Road',
      pincode: '600045',
      googleMapsUrl: 'https://www.google.com/maps/place/ASLAN+-+Occupational+Therapy,+Speech+Therapy,+Special+Education,+Physio+Therapy/@12.9268392,80.1029057,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525f051e448e3b:0x5a10d0687e59a966!8m2!3d12.926834!4d80.1054806!16s%2Fg%2F11l_18kd1x',
      embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1965!2d80.1029057!3d12.9268392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f051e448e3b%3A0x5a10d0687e59a966!2sASLAN%20-%20Occupational%20Therapy%2C%20Speech%20Therapy%2C%20Special%20Education%2C%20Physio%20Therapy!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
      isMain: true,
    },
    {
      id: 'chromepet-branch',
      name: 'Chromepet Branch',
      shortName: 'Chromepet',
      address: 'No: 7/4, 3rd Cross St, New Colony, Chromepet, Chennai, Tambaram, Tamil Nadu 600044',
      street: 'No: 7/4, 3rd Cross St, New Colony',
      area: 'Chromepet, Tambaram',
      cityStatePin: 'Chennai, Tamil Nadu – 600044',
      landmark: '3rd Cross St, New Colony',
      pincode: '600044',
      googleMapsUrl: 'https://www.google.com/maps/place/ASLAN+child+development+and+therapy+center/@12.952751,80.1390222,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525fc775eff365:0xc4ccc0b78a8df409!8m2!3d12.952751!4d80.1390222!16s%2Fg%2F11nvtp6v2q',
      embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6531!2d80.1390222!3d12.952751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fc775eff365%3A0xc4ccc0b78a8df409!2sASLAN%20child%20development%20and%20therapy%20center!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
      isMain: false,
    }
  ] as (BranchInfo & { street: string; area: string; cityStatePin: string; embedMapUrl: string })[]
};


export const ENVIRONMENT_GALLERY = [
  {
    id: 'gallery-1',
    src: '/images/hero_therapy.png',
    alt: 'Sensory integration therapy gym with therapy swings, balance beam, and exercise mats at Aslan CDC Tambaram',
    tag: 'Sensory Gym & Motor Therapy',
    layout: 'featured',
  },
  {
    id: 'gallery-2',
    src: '/images/therapy_cubicles.jpg',
    alt: 'Individual therapy room and speech activity area with divider curtain at Aslan Child Development Center',
    tag: 'Individual Therapy Cubicles',
    layout: 'stacked',
  },
  {
    id: 'gallery-3',
    src: '/images/ball_pit.jpg',
    alt: 'Sensory ball pit play area with colorful play balls, steps, and mini trampoline at Aslan CDC',
    tag: 'Sensory Ball Pit & Play Area',
    layout: 'stacked',
  },
  {
    id: 'gallery-4',
    src: '/images/learning_session.png',
    alt: 'Special education classroom with colorful kidney-shaped activity table and learning charts in Tambaram',
    tag: 'Specialized Education Classroom',
    layout: 'medium',
  },
  {
    id: 'gallery-5',
    src: '/images/consultation_desk.jpg',
    alt: 'Doctor consultation desk with Kalam World Record certificate and awards wall at Aslan CDC',
    tag: 'Consultation Desk & Awards',
    layout: 'supporting',
  },
  {
    id: 'gallery-6',
    src: '/images/sensory_gym_side.jpg',
    alt: 'Occupational therapy gym equipment with mini trampoline and climbing ladder at Aslan CDC',
    tag: 'Occupational Therapy Gym',
    layout: 'supporting',
  },
];

export interface SeoConditionCategory {
  title: string;
  description: string;
  conditions: string[];
}

export const SEO_CONDITIONS_CATEGORIES: SeoConditionCategory[] = [
  {
    title: 'Speech & Language Conditions',
    description: 'Speech sound clarity, articulation, language delays, and speech fluency disorders.',
    conditions: [
      'Aphasia',
      'Cleft lip/palate',
      'Stuttering',
      'Cluttering',
      'Puberphonia',
      'Dysphagia',
      'Dysarthria',
      'Phonological delay',
      'Misarticulation'
    ]
  },
  {
    title: 'Speech Motor & Communication Disorders',
    description: 'Motor speech planning, non-verbal communication, and eating/swallowing coordination.',
    conditions: [
      'Apraxia',
      'ASD (Autism Spectrum Disorder)',
      'ADHD (Attention Deficit Hyperactivity Disorder)',
      'GDD (Global Developmental Delay)',
      'AAC (Augmentative & Alternative Communication)',
      'Chewing/swallowing difficulties',
      'Motor speech disorder'
    ]
  },
  {
    title: 'Neurodevelopmental, Motor & Sensory Needs',
    description: 'Sensory processing, posture, coordination, behavior, learning, and physical conditions.',
    conditions: [
      'Autism spectrum disorder (ASD)',
      'Cerebral palsy',
      'Global development delay',
      'Developmental coordination disorder (DCD/ Dyspraxia)',
      'Hypotonia and hypertonia',
      'Sensory and regulatory issues',
      'Sensory processing disorder',
      'Sensory based feeding difficulties',
      'Downs syndrome',
      'Traumatic brain injury',
      'Brachial plexus injuries',
      'Learning disability',
      'Visual motor difficulties',
      'Poor attention',
      'Classroom difficulties',
      'Behaviour issues'
    ]
  }
];

export const ALL_SEO_KEYWORDS: string[] = Array.from(
  new Set(SEO_CONDITIONS_CATEGORIES.flatMap((cat) => cat.conditions))
);

export const SERVICES: ServiceItem[] = [
  {
    id: 'occupational-therapy',
    slug: 'occupational-therapy',
    title: 'Occupational Therapy',
    category: 'therapy',
    shortDescription: 'Enhancing sensory processing, motor coordination, self-regulation, handwriting, and daily living skills in a supportive, play-based environment.',
    fullDescription: 'Occupational Therapy at Aslan Child Development and Therapy Center focuses on helping children master everyday functional tasks with confidence. From fine motor grip and handwriting to gross motor balance, posture control, and sensory regulation, our therapists tailor activities to each child’s natural learning pace.',
    highlights: [
      'Sensory Integration & Regulation Support',
      'Fine Motor Skills & Pencil Control',
      'Gross Motor Coordination & Posture Balance',
      'Self-Care & Daily Living Independence'
    ],
    whoItHelps: [
      'Children experiencing sensory over-responsiveness or under-responsiveness.',
      'Children working on pencil grip, scissor skills, or visual motor control.',
      'Children improving posture control, balance, and spatial awareness.',
      'Children strengthening self-dressing, feeding, and executive organization.'
    ],
    whatToExpect: [
      'Sensory-friendly observational evaluation.',
      'Therapeutic sensory motor equipment tailored for child comfort.',
      'Milestone tracking focused on real-world independence.',
      'Collaborative parent consultations after sessions.'
    ],
    iconName: 'Activity',
    seoTitle: 'Occupational Therapy for Children in Tambaram & Chromepet | Aslan CDC',
    seoDescription: 'Pediatric occupational therapy in West Tambaram, Chennai. Enhancing sensory processing, motor coordination, handwriting, and daily independence.',
    relatedConditions: [
      'Developmental coordination disorder (DCD/ Dyspraxia)',
      'Hypotonia and hypertonia',
      'Visual motor difficulties',
      'Brachial plexus injuries',
      'Cerebral palsy',
      'Downs syndrome',
      'Traumatic brain injury'
    ]
  },
  {
    id: 'speech-therapy',
    slug: 'speech-therapy',
    title: 'Speech Therapy',
    category: 'therapy',
    shortDescription: 'Empowering children to communicate clearly, develop expressive language, improve speech articulation, and build conversational confidence.',
    fullDescription: 'Speech & Language Therapy at Aslan Child Development and Therapy Center helps children overcome communication barriers, pronounce sounds accurately, and build expressiveness. Our qualified Speech-Language Pathologists create engaging sessions tailored around your child’s vocabulary, articulation, and social pragmatic needs.',
    highlights: [
      'Speech Sound Articulation & Pronunciation',
      'Expressive & Receptive Language Building',
      'Stuttering & Fluency Support',
      'Social Communication & Pragmatics'
    ],
    whoItHelps: [
      'Children experiencing delay in speaking or combining words.',
      'Children seeking assistance with sound articulation, stuttering, or cluttering.',
      'Children needing support with listening comprehension and following instructions.',
      'Children building confidence for peer interaction and classroom settings.'
    ],
    whatToExpect: [
      'Initial speech and language evaluation in a supportive setting.',
      'Interactive games, visual cards, and articulation exercises.',
      'Individualized goals focused on expressive confidence and clarity.',
      'Practical home strategy guidance for parents.'
    ],
    iconName: 'MessageCircle',
    seoTitle: 'Speech Therapy for Children in Tambaram & Chromepet | Aslan CDC',
    seoDescription: 'Pediatric speech therapy in West Tambaram, Chennai. Helping children build speech clarity, articulation, language expression, and social communication.',
    relatedConditions: [
      'Aphasia',
      'Stuttering',
      'Cluttering',
      'Puberphonia',
      'Dysarthria',
      'Phonological delay',
      'Misarticulation',
      'Apraxia',
      'Motor speech disorder',
      'AAC'
    ]
  },
  {
    id: 'special-education',
    slug: 'special-education',
    title: 'Special Education',
    category: 'education',
    shortDescription: 'Individualized learning plans focused on unique learning styles, strengthening academic confidence, attention span, and cognitive growth.',
    fullDescription: 'Special Education at Aslan Child Development and Therapy Center provides adapted learning strategies for children who process information differently. Our Special Educators design Individualized Education Plans (IEP) that foster attention, foundational literacy, numeracy, problem-solving, and cognitive self-reliance.',
    highlights: [
      'Individualized Education Plans (IEP)',
      'Attention Span & Cognitive Skill Building',
      'Foundational Literacy & Numeracy',
      'Sensory-Friendly Multi-Sensory Adaptations'
    ],
    whoItHelps: [
      'Children who benefit from adapted, 1-on-1 educational support.',
      'Children building attention span, task completion, and working memory.',
      'Children developing foundational reading, writing, and math concepts.',
      'Children preparing for mainstream or specialized academic environments.'
    ],
    whatToExpect: [
      'Cognitive learning style observation.',
      'Adaptive multi-sensory teaching tools and structured pace.',
      'Step-by-step academic readiness milestones.',
      'Teacher-parent strategy alignment.'
    ],
    iconName: 'BookOpen',
    seoTitle: 'Special Education Services in Tambaram & Chromepet | Aslan CDC',
    seoDescription: 'Tailored special educational programs in West Tambaram, Chennai. Individualized education plans (IEP) focusing on unique learning styles and cognitive growth.',
    relatedConditions: [
      'Learning disability',
      'Classroom difficulties',
      'Poor attention',
      'ADHD',
      'Autism spectrum disorder (ASD)',
      'Global development delay'
    ]
  },
  {
    id: 'school-readiness-program',
    slug: 'school-readiness-program',
    title: 'School Readiness Program',
    category: 'education',
    shortDescription: 'Structured readiness training fostering sitting tolerance, classroom etiquette, pencil control, and smooth group transition skills.',
    fullDescription: 'Aslan’s School Readiness Program prepares young learners to transition smoothly into mainstream or special school environments. We focus on key foundational competencies such as sitting tolerance, following multi-step classroom instructions, group circle participation, pencil control, and social adaptability.',
    highlights: [
      'Sitting Tolerance & Classroom Task Focus',
      'Routine Following & Peer Group Adaptability',
      'Pre-Writing & Fine Motor Hand Readiness',
      'Social Communication & Circle Time'
    ],
    whoItHelps: [
      'Young children preparing for preschool or kindergarten admission.',
      'Children needing assistance with sitting tolerance and task completion.',
      'Children adapting to structured group schedules and instructions.',
      'Children building foundational social confidence for school.'
    ],
    whatToExpect: [
      'Simulated classroom circle time activities.',
      'Pencil grip and table-top readiness exercises.',
      'Structured group play fostering cooperation.',
      'Parent consultations regarding school transition recommendations.'
    ],
    iconName: 'GraduationCap',
    seoTitle: 'School Readiness Program for Kids in Tambaram | Aslan CDC',
    seoDescription: 'School Readiness Program in West Tambaram & Chromepet, Chennai. Preparing young children for classroom routines, sitting tolerance, and learning.',
    relatedConditions: [
      'Poor attention',
      'Classroom difficulties',
      'Behaviour issues',
      'Sensory and regulatory issues',
      'Global development delay'
    ]
  },
  {
    id: 'primitive-reflex-integration',
    slug: 'primitive-reflex-integration',
    title: 'Primitive Reflex Integration',
    category: 'therapy',
    shortDescription: 'Targeted motor movement patterns to integrate retained primary reflexes, supporting balance, coordination, posture, and emotional control.',
    fullDescription: 'Primitive reflex integration targets automatic survival movement patterns present at birth that may remain un-integrated in early childhood. Retained reflexes can impede posture, motor coordination, emotional self-regulation, and visual tracking. Our specialized reflex integration therapy utilizes structured rhythmic movement patterns to achieve neurological maturity.',
    highlights: [
      'Retained Primary Reflex Assessment (Moro, ATNR, STNR, TLR)',
      'Rhythmic Movement Integration Exercises',
      'Postural Alignment & Balance Stability',
      'Neurological Support for Learning & Focus'
    ],
    whoItHelps: [
      'Children with posture instability, balance difficulties, or motor clumsiness.',
      'Children experiencing emotional reactivity or sensory overload.',
      'Children with persistent visual tracking, reading, or handwriting struggles.',
      'Children with DCD/Dyspraxia, ADHD, or learning challenges.'
    ],
    whatToExpect: [
      'Systematic screening of primary primitive reflexes.',
      'Individualized movement sequences designed for clinical and home practice.',
      'Gradual observation of improved physical balance and emotional calm.',
      'Home exercise routine guidance for parents.'
    ],
    iconName: 'RefreshCw',
    seoTitle: 'Primitive Reflex Integration Therapy in Tambaram | Aslan CDC',
    seoDescription: 'Primitive Reflex Integration Therapy in West Tambaram, Chennai. Improving motor coordination, balance, postural stability, and emotional regulation.',
    relatedConditions: [
      'Developmental coordination disorder (DCD/ Dyspraxia)',
      'Hypotonia and hypertonia',
      'ADHD',
      'Sensory processing disorder',
      'Visual motor difficulties'
    ]
  },
  {
    id: 'hearing-test-pta',
    slug: 'hearing-test-pta',
    title: 'Hearing Test - Pure Tone Audiometry (PTA)',
    category: 'assessment',
    shortDescription: 'Precise clinical hearing assessments using Pure Tone Audiometry (PTA) to evaluate hearing thresholds and auditory perception sensitivity.',
    fullDescription: 'Pure Tone Audiometry (PTA) is the gold standard clinical hearing assessment used to measure sound perception across varying pitches and volumes. At Aslan CDC, our hearing tests evaluate hearing sensitivity to identify any auditory barriers that could affect speech development, classroom learning, or social interaction.',
    highlights: [
      'Clinical Pure Tone Audiometry (PTA) Testing',
      'Frequency-Specific Auditory Sensitivity Mapping',
      'Pediatric Sound-Conditioned Evaluation',
      'Early Detection of Auditory Impairment'
    ],
    whoItHelps: [
      'Children exhibiting speech delays or reduced responsiveness to sound.',
      'Children suspected of hearing loss or middle ear fluid issues.',
      'Children needing routine pre-school or developmental hearing screening.',
      'Children struggling with auditory discrimination in noisy environments.'
    ],
    whatToExpect: [
      'Gentle, child-friendly hearing assessment in a calibrated setting.',
      'Detailed audiogram showing hearing thresholds across frequencies.',
      'Expert consultation regarding auditory health and speech impact.',
      'Guidance on recommendations or speech therapy follow-up if indicated.'
    ],
    iconName: 'Volume2',
    seoTitle: 'Hearing Test - Pure Tone Audiometry (PTA) in Tambaram | Aslan CDC',
    seoDescription: 'Clinical Pure Tone Audiometry (PTA) hearing test in West Tambaram & Chromepet, Chennai for accurate pediatric hearing evaluation.',
    relatedConditions: [
      'Phonological delay',
      'Misarticulation',
      'AAC',
      'Aphasia'
    ]
  },
  {
    id: 'oral-placement-therapy',
    slug: 'oral-placement-therapy',
    title: 'Oral Placement Therapy (OPT)',
    category: 'therapy',
    shortDescription: 'Tactile-proprioceptive approach to speech production and feeding skills, strengthening lip, tongue, and jaw placement.',
    fullDescription: 'Oral Placement Therapy (OPT) is a specialized speech and feeding intervention technique using tactile-proprioceptive stimulation combined with auditory and visual cues. OPT targets lip closure, tongue elevation, and jaw stability required for clear speech sound articulation, chewing, and safe swallowing.',
    highlights: [
      'Jaw Stability, Lip Closure & Tongue Movement',
      'Tactile & Proprioceptive Speech Tools',
      'Chewing & Swallowing Coordination (Dysphagia)',
      'Saliva Management & Drooling Support'
    ],
    whoItHelps: [
      'Children with motor speech disorders, dysarthria, or apraxia.',
      'Children experiencing chewing or swallowing difficulties.',
      'Children with low oral muscle tone (hypotonia) or drooling.',
      'Children with cleft lip/palate or speech clarity challenges.'
    ],
    whatToExpect: [
      'Detailed oral motor structural and functional evaluation.',
      'Hands-on session using specialized therapeutic tools (horns, straws, bite blocks).',
      'Targeted muscle strength progression for sound production.',
      'Parent coaching for daily oral placement exercises.'
    ],
    iconName: 'Smile',
    seoTitle: 'Oral Placement Therapy (OPT) in Tambaram & Chromepet | Aslan CDC',
    seoDescription: 'Specialized Oral Placement Therapy (OPT) in West Tambaram, Chennai for speech clarity, oral muscle strength, and chewing/swallowing difficulties.',
    relatedConditions: [
      'Chewing/swallowing difficulties',
      'Dysphagia',
      'Dysarthria',
      'Apraxia',
      'Cleft lip/palate',
      'Motor speech disorder',
      'Hypotonia and hypertonia'
    ]
  },
  {
    id: 'psychology-counselling',
    slug: 'psychology-counselling',
    title: 'Psychology Counselling',
    category: 'support',
    shortDescription: 'Professional psychological guidance, parent counseling, emotional well-being support, and child behavioral guidance.',
    fullDescription: 'Psychological Counselling at Aslan Child Development and Therapy Center provides a supportive, empathetic space for children and parents. Our qualified child psychologists help families navigate emotional challenges, anxiety, behavioral difficulties, developmental diagnosis acceptance, and positive parenting strategies.',
    highlights: [
      'Child Emotional & Mental Well-Being Support',
      'Parent Guidance & Coping Strategies',
      'Behavioral Management & Positive Discipline',
      'Anxiety & Environmental Adaptation Counseling'
    ],
    whoItHelps: [
      'Parents seeking guidance following a developmental diagnosis (ASD, ADHD, GDD).',
      'Children coping with emotional outbursts, anxiety, or low self-esteem.',
      'Families seeking effective, positive discipline techniques.',
      'Children struggling with school adaptation or social anxiety.'
    ],
    whatToExpect: [
      'Warm, confidential counseling consultation.',
      'Customized emotional and behavioral action plans for home.',
      'Practical parenting tools for routine structure and calm communication.',
      'Collaborative care alignment with therapists.'
    ],
    iconName: 'HeartHandshake',
    seoTitle: 'Child & Parent Psychology Counselling in Tambaram | Aslan CDC',
    seoDescription: 'Pediatric psychology counselling and parent guidance in West Tambaram & Chromepet, Chennai for emotional health and behavior.',
    relatedConditions: [
      'Behaviour issues',
      'Sensory and regulatory issues',
      'ADHD',
      'Autism spectrum disorder (ASD)',
      'Poor attention',
      'Classroom difficulties'
    ]
  },
  {
    id: 'sensory-integration-therapy',
    slug: 'sensory-integration-therapy',
    title: 'Sensory Integration Therapy',
    category: 'therapy',
    shortDescription: 'Helping children process, organize, and regulate sensory inputs (tactile, vestibular, proprioceptive) in a specialized sensory gym.',
    fullDescription: 'Sensory Integration Therapy helps children whose nervous systems process sensory input differently. Utilizing a fully equipped sensory gym with therapeutic swings, crash pads, climbing walls, and textured tools, our therapists help children achieve emotional regulation, motor planning, and body awareness.',
    highlights: [
      'Vestibular, Proprioceptive & Tactile Processing',
      'Specialized Sensory Gym Equipment & Swings',
      'Self-Regulation & Meltdown Reduction',
      'Sensory-Based Feeding & Texture Support'
    ],
    whoItHelps: [
      'Children with Sensory Processing Disorder (SPD) or sensory overload.',
      'Children with Autism Spectrum Disorder (ASD) or ADHD.',
      'Children experiencing sensory-based feeding difficulties or texture sensitivity.',
      'Children struggling with movement regulation or environmental transitions.'
    ],
    whatToExpect: [
      'Sensory processing profile evaluation.',
      'Dynamic sessions in a sensory gym matching the child’s sensory threshold.',
      'Gradual tolerance building and self-soothing skill mastery.',
      'Customized "Sensory Diet" plan for home and classroom.'
    ],
    iconName: 'Compass',
    seoTitle: 'Sensory Integration Therapy in Tambaram & Chromepet | Aslan CDC',
    seoDescription: 'Sensory Integration Therapy in West Tambaram, Chennai. Equipping children with sensory processing tools, sensory gym sessions, and self-regulation.',
    relatedConditions: [
      'Sensory processing disorder',
      'Sensory and regulatory issues',
      'Sensory based feeding difficulties',
      'Autism spectrum disorder (ASD)',
      'ADHD',
      'Hypotonia and hypertonia'
    ]
  },
  {
    id: 'behaviour-modification-therapy',
    slug: 'behaviour-modification-therapy',
    title: 'Behaviour Modification Therapy',
    category: 'support',
    shortDescription: 'Positive reinforcement and structured behavioral interventions to manage classroom difficulties, attention, and positive behaviors.',
    fullDescription: 'Behaviour Modification Therapy at Aslan CDC focuses on replacing challenging or non-functional behaviors with constructive, positive actions using evidence-based reinforcement and structured routines. Our therapists work closely with parents to improve sitting tolerance, reduce tantrums, and foster social cooperation.',
    highlights: [
      'Positive Reinforcement Systems & Visual Schedules',
      'Tantrum & Meltdown Management Techniques',
      'Sitting Tolerance & Task Compliance Training',
      'Functional Behavior Assessment (FBA)'
    ],
    whoItHelps: [
      'Children displaying frequent tantrums, defiance, or aggression.',
      'Children with ADHD or ASD requiring structured daily routines.',
      'Children struggling with attention deficits or classroom compliance.',
      'Parents seeking consistent, positive behavioral strategies.'
    ],
    whatToExpect: [
      'Functional behavior evaluation and pattern tracking.',
      'Custom visual charts and reward reinforcement systems.',
      'Step-by-step behavior shaping during clinical sessions.',
      'Empathetic parent coaching for home application.'
    ],
    iconName: 'CheckCircle2',
    seoTitle: 'Behaviour Modification Therapy in Tambaram, Chennai | Aslan CDC',
    seoDescription: 'Behavior modification therapy in West Tambaram & Chromepet, Chennai to improve focus, sitting tolerance, classroom behaviors, and social harmony.',
    relatedConditions: [
      'Behaviour issues',
      'Poor attention',
      'Classroom difficulties',
      'ADHD',
      'Autism spectrum disorder (ASD)',
      'Sensory and regulatory issues'
    ]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: 1,
    title: 'Understand',
    subtitle: 'Listening to Your Child’s Unique Story',
    description: 'We begin with an empathetic conversation to understand your child’s strengths, routines, and family goals.'
  },
  {
    step: 2,
    title: 'Assess',
    subtitle: 'Comprehensive Developmental Evaluation',
    description: 'Our qualified professionals conduct careful observational evaluations to identify sensory, speech, and motor needs.'
  },
  {
    step: 3,
    title: 'Plan',
    subtitle: 'Tailored Development Roadmap',
    description: 'We co-create a personalized growth plan with clear milestones tailored to your child’s natural pace.'
  },
  {
    step: 4,
    title: 'Support',
    subtitle: 'Nurturing & Professional Therapy',
    description: 'Through structured, engaging sessions, we provide consistent support while encouraging steady progress.'
  },
  {
    step: 5,
    title: 'Grow',
    subtitle: 'Celebrating Milestones Together',
    description: 'Regular progress reviews ensure lasting gains, transitioning skills smoothly into daily home routines.'
  }
];

export const TESTIMONIAL_PLACEHOLDERS: TestimonialItem[] = [
  {
    id: 'test-3',
    parentName: 'Parent of Developmental Care',
    childAge: 'Behavioral Care',
    program: 'Sitting Tolerance & Behavioral Progress',
    quote: "My child's life has changed after joining this therapy center. Vickey Sir has a positive mindset and continuously help for my child make progress every day, especially in improving sitting tolerance and behavior.",
    isPlaceholder: false
  },
  {
    id: 'test-1',
    parentName: 'Parent Review',
    childAge: 'Pediatric Care',
    program: 'Structured & Personalized Therapy',
    quote: 'This therapy center provides excellent service with well-trained therapists. The sessions are structured and personalized based on individual needs. The environment is clean and comfortable. I could see clear improvement over time. Highly recommended.',
    isPlaceholder: false
  },
  {
    id: 'test-2',
    parentName: 'Grateful Parent',
    childAge: 'Autism Support',
    program: 'Autism Developmental Support',
    quote: "This center has supported us in many things, vicky sir's mindset is so helpful in the terms of autism kids. Grateful to ASLAN",
    isPlaceholder: false
  }
];

