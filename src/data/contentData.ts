import type { ServiceItem, ApproachStep, TestimonialItem, BranchInfo } from '../types';

export const CENTER_INFO = {
  name: 'Aslan Child Development Center',
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
    alt: 'Pediatric therapist interacting with child in sensory therapy room at Aslan CDC Tambaram',
    tag: 'Sensory & Motor Therapy Room',
    layout: 'featured',
  },
  {
    id: 'gallery-2',
    src: '/images/speech_session.png',
    alt: 'Speech therapist conducting language and articulation activity with child in West Tambaram',
    tag: 'Speech Studio',
    layout: 'stacked',
  },
  {
    id: 'gallery-3',
    src: '/images/sensory_room.png',
    alt: 'Occupational therapy sensory integration gym at Aslan Child Development Center',
    tag: 'Sensory Gym',
    layout: 'stacked',
  },
  {
    id: 'gallery-4',
    src: '/images/learning_session.png',
    alt: 'Special educator guiding child through tailored learning activity at Aslan CDC',
    tag: 'Specialized Education',
    layout: 'medium',
  },
  {
    id: 'gallery-5',
    src: '/images/social_activity.png',
    alt: 'Children participating in guided social play and teamwork exercise in Chennai',
    tag: 'Social Play Group',
    layout: 'supporting',
  },
  {
    id: 'gallery-6',
    src: '/images/center_interior.png',
    alt: 'Reception and consultation lounge at Aslan Child Development Center West Tambaram',
    tag: 'Consultation Lounge',
    layout: 'supporting',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'specialized-therapy',
    slug: 'specialized-therapy',
    title: 'Specialized Therapy',
    category: 'therapy',
    shortDescription: 'Occupational Therapy and Speech & Language Therapy tailored to enhance sensory processing, motor coordination, communication clarity, and daily skills.',
    fullDescription: 'Specialized therapy at Aslan Child Development Center combines evidence-based pediatric clinical interventions with a warm, sensory-friendly atmosphere. We focus on individual developmental goals, empowering children to build functional motor, communication, and self-regulation skills.',
    highlights: [
      'Occupational Therapy & Sensory Integration',
      'Speech & Articulation Therapy',
      'Fine & Gross Motor Coordination',
      'Self-Regulation & Daily Independence'
    ],
    whoItHelps: [
      'Children experiencing sensory processing or environmental sensitivities.',
      'Children working to improve speech clarity, vocabulary, or articulation.',
      'Children building motor coordination, grip strength, and posture stability.',
      'Children developing daily independence at home and school.'
    ],
    whatToExpect: [
      'Warm observational evaluation by qualified therapists.',
      'Custom developmental care plan tailored to your child’s natural pace.',
      'Engaging 1-on-1 sessions incorporating play-based interventions.',
      'Continuous parent feedback and home activity guidance.'
    ],
    iconName: 'Activity',
    seoTitle: 'Specialized Therapy for Children | Aslan CDC | Tambaram',
    seoDescription: 'Specialized pediatric therapy sessions in West Tambaram, Chennai designed to enhance emotional, social, sensory, and cognitive development.'
  },
  {
    id: 'speech-therapy',
    slug: 'speech-therapy',
    title: 'Speech & Language Therapy',
    category: 'therapy',
    shortDescription: 'Empowering children to communicate clearly, develop expressiveness, improve speech clarity, and build social communication confidence.',
    fullDescription: 'Speech & Language Therapy at Aslan Child Development Center helps children overcome communication barriers, pronounce sounds accurately, and build expressiveness. Our qualified Speech Therapists create engaging sessions tailored around your child’s vocabulary and social pragmatic needs.',
    highlights: [
      'Speech Sound Articulation & Clarity',
      'Expressive & Receptive Language Building',
      'Social Communication & Pragmatics',
      'Fluency & Early Communication Encouragement'
    ],
    whoItHelps: [
      'Children experiencing delay in speaking or combining words.',
      'Children seeking assistance with sound articulation or pronunciation.',
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
    seoTitle: 'Speech Therapy for Children in Tambaram, Chennai | Aslan CDC',
    seoDescription: 'Pediatric speech and language therapy in West Tambaram, Chennai. Helping children build speech clarity, articulation, and social communication.'
  },
  {
    id: 'occupational-therapy',
    slug: 'occupational-therapy',
    title: 'Occupational Therapy',
    category: 'therapy',
    shortDescription: 'Enhancing sensory processing, motor coordination, self-regulation, and daily living skills in a supportive, play-based environment.',
    fullDescription: 'Occupational Therapy at Aslan focuses on helping children perform everyday functional tasks with confidence. From fine motor grip and handwriting to gross motor balance and sensory regulation, our therapists tailor activities to each child’s natural learning style.',
    highlights: [
      'Sensory Integration & Processing Support',
      'Fine Motor & Handwriting Development',
      'Gross Motor Coordination & Balance',
      'Self-Care & Daily Living Skills'
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
    seoTitle: 'Occupational Therapy for Children in Tambaram | Aslan CDC',
    seoDescription: 'Occupational therapy for children in West Tambaram, Chennai. Enhancing sensory processing, motor coordination, handwriting, and daily independence.'
  },
  {
    id: 'specialized-education',
    slug: 'specialized-education',
    title: 'Specialized Education',
    category: 'education',
    shortDescription: 'Individualized learning plans focused on unique learning styles, strengthening academic confidence, attention span, and cognitive growth.',
    fullDescription: 'Specialized Education at Aslan Child Development Center provides adapted learning strategies for children who process information differently. Our Special Educators design Individualized Education Plans (IEP) that foster attention, foundational literacy, numeracy, and school readiness.',
    highlights: [
      'Individualized Education Plans (IEP)',
      'Attention Span & Cognitive Skill Building',
      'Foundational Literacy & Numeracy',
      'Sensory-Friendly Learning Adaptations'
    ],
    whoItHelps: [
      'Children who benefit fromadapted, 1-on-1 educational support.',
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
    seoTitle: 'Specialized Education for Children | Aslan CDC | Chennai',
    seoDescription: 'Tailored educational programs for children in West Tambaram, Chennai. Individualized education plans focusing on unique learning styles and cognitive growth.'
  },
  {
    id: 'social-developmental-activities',
    slug: 'social-developmental-activities',
    title: 'Social & Developmental Activities',
    category: 'activities',
    shortDescription: 'Structured group play and interactive sessions designed to build peer teamwork, emotional regulation, and social communication confidence.',
    fullDescription: 'Social & Developmental Activities at Aslan encourage children to connect, collaborate, and build peer relationships in a supportive environment. Guided group interactions foster turn-taking, emotional expression, and shared confidence.',
    highlights: [
      'Guided Peer Social Play Groups',
      'Emotional Recognition & Regulation',
      'Collaborative Team Activities',
      'Peer Interaction & Self-Confidence'
    ],
    whoItHelps: [
      'Children building confidence in peer group settings.',
      'Children practicing emotional regulation during play.',
      'Children learning sharing, turn-taking, and active listening.',
      'Children developing cooperative problem-solving skills.'
    ],
    whatToExpect: [
      'Small, structured group circles led by developmental specialists.',
      'Interactive games, art, and rhythm teamwork challenges.',
      'Positive reinforcement for social turn-taking.',
      'Empathetic guidance for emotional expression.'
    ],
    iconName: 'Users',
    seoTitle: 'Social & Developmental Programs for Children | Aslan CDC',
    seoDescription: 'Engaging group activities promoting peer play, emotional regulation, teamwork, and social confidence at Aslan Child Development Center.'
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
    id: 'test-1',
    parentName: 'Parent of 5-year-old child',
    childAge: 'Speech Therapy',
    program: 'Speech & Communication Support',
    quote: 'The warm, calm atmosphere at Aslan made a noticeable difference right away. Seeing our child feel comfortable and eager to attend sessions has given our family immense confidence.',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    parentName: 'Parent of 6-year-old child',
    childAge: 'Occupational Therapy',
    program: 'Occupational & Sensory Support',
    quote: 'The therapists at Aslan take the time to truly understand each child. The structured activities have helped improve focus and daily coordination in a very encouraging way.',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    parentName: 'Parent of 4-year-old child',
    childAge: 'Specialized Education',
    program: 'Tailored Learning Support',
    quote: 'Aslan provides a supportive space where every step of growth is valued. The guidance given to parents for home practice has been invaluable for us.',
    isPlaceholder: true
  }
];
