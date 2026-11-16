export type JourneyCategory = 'life' | 'education' | 'achievement' | 'job' | 'other'

export type SectionId = 'info' | 'jobs' | 'journey' | 'skills' | 'achievements' | 'contacts'

export interface PersonalSpec {
  label: string
  value: string
}

export type DetailSpan = {
  readonly text: string
  readonly highlight?: boolean
}

export type DetailContent = readonly DetailSpan[]

export interface JourneyEvent {
  year: string
  category: JourneyCategory
  title: string
  detail?: DetailContent
  jobId?: string
}

export interface JobDutyGroup {
  label: string
  items: readonly string[]
}

export interface JobBlock {
  label?: string
  groups: readonly JobDutyGroup[]
}

export interface JobRole {
  id: string
  organization: string
  appointment: string
  location: string
  dates: string
  blocks: readonly JobBlock[]
}

export interface SkillItem {
  name: string
  rating: number
  detail: string
  tools?: string[]
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export interface Achievement {
  title: string
  date: string
  category: string
  description: string
  image?: string
}

export interface ContactPhoneEntry {
  label: string
  href: string
  copyValue: string
}

export interface ContactLink {
  label: string
  href: string
  copyValue: string
  external?: boolean
  numbers?: ContactPhoneEntry[]
}

export type BioHighlight = 'service' | 'professional'

export type BioSpan = {
  readonly text: string
  readonly highlight?: BioHighlight
}

export type BioParagraph = readonly BioSpan[]

export const journeyCategoryLabels: Record<JourneyCategory, string> = {
  life: 'Life',
  education: 'Education',
  achievement: 'Achievement',
  job: 'Job',
  other: 'Other',
}

export const journeyCategoryOrder: JourneyCategory[] = [
  'life',
  'education',
  'achievement',
  'job',
  'other',
]

export const portfolio = {
  name: 'Tanvir Nahian Swapnil',
  lastCorrectedAt: '16 November 2026',
  title: 'General Manager — Operations, Administration, HR & Security',
  tagline: 'Retired Army Officer, Corps of Signals',
  careerObjective:
    'I am pursuing a career in operations, administration, HR, and security and safety, where I can use over 5 years of military leadership experience, 3 years of training, and 8 months in managerial roles to ensure robust safety protocols, efficient under-command management, and strategic operational success.',
  salutation: 'Assalamu Alaikum',
  bioIntro: [
    { text: 'I am Tanvir Nahian Swapnil — a ' },
    { text: 'commissioned officer', highlight: 'service' },
    { text: ' of the ' },
    { text: 'Bangladesh Army', highlight: 'service' },
    { text: ', retired with honor from the ' },
    { text: 'Corps of Signals as a Captain', highlight: 'service' },
    { text: ', and a graduate in ' },
    { text: 'Computer Science Engineering', highlight: 'professional' },
    { text: '. My service from ' },
    { text: '2020 to 2025', highlight: 'service' },
    {
      text: ' was defined by unwavering dedication to national duty, encompassing critical operations such as ',
    },
    { text: 'security', highlight: 'service' },
    { text: ', ' },
    { text: 'counter-instability missions', highlight: 'service' },
    { text: ' in the hill tracts, ' },
    { text: 'humanitarian coordination', highlight: 'service' },
    { text: ' during the ' },
    { text: 'FDMN crisis and COVID-19', highlight: 'service' },
    { text: ', and response to the ' },
    { text: 'cantonment security during the July 2024 unrest', highlight: 'service' },
    {
      text: '. These experiences forged in me a discipline that transcends uniform — a mindset of ',
    },
    { text: 'precision', highlight: 'professional' },
    { text: ', ' },
    { text: 'resilience', highlight: 'professional' },
    { text: ', and ' },
    { text: 'strategic clarity', highlight: 'professional' },
    { text: '.' },
  ] satisfies BioParagraph,
  bioTechnical: [
    {
      text: 'Parallel to my military obligations, I cultivated a deep proficiency in the ',
    },
    { text: 'digital domain', highlight: 'professional' },
    { text: '. From ' },
    { text: 'cybersecurity', highlight: 'professional' },
    { text: ' and ' },
    { text: 'web architecture', highlight: 'professional' },
    { text: ' to ' },
    { text: 'multimedia design', highlight: 'professional' },
    { text: ' and ' },
    { text: 'strategic presentation', highlight: 'professional' },
    {
      text: ', I pursued knowledge relentlessly — often in the quiet hours between deployments. My technical journey is not merely a skillset; it is an extension of my ethos: to ',
    },
    { text: 'adapt', highlight: 'professional' },
    { text: ', to ' },
    { text: 'learn', highlight: 'professional' },
    { text: ', and to ' },
    { text: 'lead with integrity', highlight: 'professional' },
    {
      text: ". Curiosity remains my compass, guiding me to approach every challenge with a learner's spirit and a ",
    },
    { text: "tactician's eye", highlight: 'professional' },
    { text: '.' },
  ] satisfies BioParagraph,
  bioClosing: [
    { text: 'Today, I channel my ' },
    { text: 'operational precision', highlight: 'professional' },
    { text: ' and ' },
    { text: 'leadership', highlight: 'professional' },
    { text: ' into ' },
    { text: 'ICT', highlight: 'professional' },
    { text: ', ' },
    { text: 'web development', highlight: 'professional' },
    { text: ', and ' },
    { text: 'user interface design', highlight: 'professional' },
    {
      text: '. I specialize in building systems that are both ',
    },
    { text: 'secure', highlight: 'professional' },
    {
      text: ' and visually engaging, with a focus on ',
    },
    { text: 'clean architecture', highlight: 'professional' },
    { text: ' and ' },
    { text: 'intuitive design', highlight: 'professional' },
    { text: '. As a ' },
    { text: 'Security & ICT Operations Specialist', highlight: 'professional' },
    { text: ' with over ' },
    { text: 'eight years of leadership experience', highlight: 'professional' },
    {
      text: ', I have managed and safeguarded under-command, infrastructure, and data in high-pressure environments. My portfolio reflects this journey — each branch a testament to the ',
    },
    { text: 'life', highlight: 'professional' },
    { text: " I've lived, the " },
    { text: 'skills', highlight: 'professional' },
    { text: " I've honed, and the " },
    { text: 'values', highlight: 'professional' },
    { text: ' I carry forward.' },
  ] satisfies BioParagraph,
  quote: {
    text: 'All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.',
    author: 'J.R.R. Tolkien',
  },
  personal: {
    serviceId: 'BA-10481',
    dob: '14 Sep 1998',
    nationality: 'Bangladeshi',
    gender: 'Male',
    location: 'Dhaka, Bangladesh',
    height: "5'8\"",
    weight: '62 kg',
    bloodGroup: 'O+ve',
    religion: 'Islam',
    sibling: '1 Sister : Sumaiya Tahrin Srijony (Married)',
    maritalStatus: 'Married – no kids',
    educationalBackground: 'Science',
    parents: {
      father: 'Md. Abu Sufian',
      mother: 'Tahmina Akter',
    },
    birthPlace: 'P.G. Hospital, Dhaka',
    nameOrigin:
      'Tanvir from Tahmina, Nahian from Sufian, and Swapnil chosen by my grandfather with my mother\'s agreement. My paternal grandfather used to call me Billu.',
    hobbies: ['Web Development', 'Web Surfing', 'Content Creation'],
  },
  education: [
    {
      institution: 'Military Institute of Science and Technology (MIST)',
      location: 'Mirpur, Dhaka',
      degree: 'BSc in Computer Science and Engineering',
      result: 'CGPA 3.39',
      year: '2022',
    },
    {
      institution: 'Signal Training School and Center',
      location: 'Jashore',
      degree: 'Cyber Security Course',
      result: 'Grade A (77%)',
      year: '2023',
    },
    {
      institution: 'Bir Shreshtha Noor Mohammad Public College',
      location: 'Pilkana, Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      result: 'GPA 5.00',
      year: '2016',
    },
    {
      institution: 'Ideal School and College',
      location: 'Motijheel, Dhaka',
      degree: 'Secondary School Certificate (SSC)',
      result: 'GPA 5.00',
      year: '2014',
    },
  ],
  skillHighlights: [
    'Under-command Administration',
    'HR Operations Management',
    'Safety Protocol Implementation',
    'Disciplinary Action Management',
    'Strategic Event Coordination',
    'Resource and Logistics Management',
    'Risk Assessment and Mitigation',
    'Regulatory Compliance',
    'Crisis and Emergency Response',
    'Cybersecurity & Cyber Auditing',
    'ICT Network Infrastructure',
    'Surveillance Systems (CCTV)',
    'Strategic Operations Planning',
    'Leadership',
    'Microsoft Office Suite',
    'Basic Coding (Java, C++, Web Stack)',
    'Web Development & Online Portals',
  ],
  skillCategories: [
    {
      category: 'IT , Development and Design',
      items: [
        {
          name: 'Website Developer',
          rating: 4.0,
          detail:
            'I build responsive, secure websites and online portals with clean architecture and intuitive user experience, combining my military discipline with modern web technologies.',
          tools: ['PHP', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'MySQL', 'Bootstrap', 'Oracle', 'WordPress'],
        },
        {
          name: 'App Developer',
          rating: 3.3,
          detail:
            'I can create mobile and desktop applications tailored to user needs with a focus on performance and usability. I created applications with Java during my training at BMA but over the years I have focused more on web development. However, I can restart and relearn quickly since I had the exposure.',
          tools: ['Flutter', 'React Native', 'Android Studio'],
        },
        {
          name: 'Web Security Auditor',
          rating: 3.7,
          detail:
            'Having completed the Cyber Security Course, I have in-depth knowledge of website security and auditing. I perform security audits to identify vulnerabilities and ensure compliance with best practices. During test sessions in Jessore, I conducted a live audit and security check at an Artillery Unit in the Cantonment and identified several vulnerabilities.',
          tools: ['Nmap', 'Wireshark', 'Metasploit'],
        },
        {
          name: 'Network Planner',
          rating: 4.0,
          detail:
            'I design and implement secure ICT networks for field communication, drawing on my Corps of Signals background and hands-on experience deploying networks in operational environments.',
          tools: ['Cisco', 'MikroTik', 'Ubiquiti'],
        },
        {
          name: 'MS PowerPoint',
          rating: 4.8,
          detail:
            'I have practiced PowerPoint since before my career and have mastered it professionally. I can create presentations in a distinct style quickly, for studies, operational plans, formal briefs, and organizational profiles.',
        },
        {
          name: 'Canva',
          rating: 4.0,
          detail:
            'I create visually appealing designs for social media, presentations, and branding using Canva. I usually prefer MS PowerPoint, but when I need an animated card quickly for birthdays or Eid with free templates, Canva is my go-to.',
        },
        {
          name: 'MS Word',
          rating: 4.2,
          detail:
            'I produce professional documents, reports, and correspondence with advanced formatting, templates, and collaborative editing features.',
        },
        {
          name: 'MS Excel',
          rating: 4.3,
          detail:
            'I manage and analyze data with Excel, including tables, macros, and charts. I can build a tracker that calculates who is present from leave, posting, and attachment records.',
        },
        {
          name: 'Google Docs, Slides & Sheets',
          rating: 4.0,
          detail:
            'I use Google Docs, Slides, and Sheets for shared documents, presentations, and spreadsheets when a team needs to work in the browser.',
        },
        {
          name: 'Google Earth',
          rating: 3.5,
          detail:
            'I use Google Earth to study ground, routes, and sites before planning movement, coverage, or a project visit.',
        },
        {
          name: 'AI-assisted Work',
          rating: 4.0,
          detail:
            'I use artificial and super-intelligence tools for practical office work: checking schedules, filtering information, drafting, and organizing records.',
        },
      ],
    },
    {
      category: 'Security & Operations',
      items: [
        {
          name: 'CCTV Planning & Installation',
          rating: 4.5,
          detail:
            'CCTV is the most common security system for any institution. I completed a CCTV course during my career and can plan coverage and install systems, as well as handle CCTV-related problems. As an engineer and field officer, I think from the intruder\'s perspective first — finding flaws before fixing them with additional measures like CCTV coverage.',
        },
        {
          name: 'Emergency Security Operations Planner',
          rating: 4.2,
          detail:
            'I create contingency plans for emergency security operations in critical environments. I deliberately planned a hostage rescue exercise on my own accord, showing troops how to rescue hostages in an under-construction building while terrorists were ordered to fire and flee on sight. One of four terrorists escaped, revealing weaknesses that would matter in a real mission — realism is how I treat my career.',
          tools: ['Risk Assessment', 'Rapid Deployment', 'Coordination with Agencies'],
        },
      ],
    },
    {
      category: 'Management and Administration',
      items: [
        {
          name: 'Administrative Manager',
          rating: 4.3,
          detail:
            'I served as adjutant for most of my military career — the most active administrative appointment in a unit. This taught me troops\' psychology and their way of doing tasks. I always found the right person for any task, or personally guided them to ensure smooth results while keeping resources organized to complete administrative work with minimal intervention from authorities.',
          tools: ['Scheduling', 'Resource Allocation', 'Reporting'],
        },
        {
          name: 'Resource Planner',
          rating: 4.0,
          detail:
            'I plan and allocate resources effectively to meet organizational goals. As an administrator I have always checked, restocked, and organized my resources. Future assumptions with multiple contingencies have kept me prepared for dire needs.',
          tools: ['Budget Management', 'Manpower Allocation', 'Timeline Optimization'],
        },
      ],
    },
    {
      category: 'Special Skills',
      items: [
        {
          name: 'Firing',
          rating: 4.5,
          detail:
            'As military personnel, we were trained to fire multiple weapon types. I competed as a best firer and participated in a Divisional Firing competition. Weapons: Assault Rifle (300m day / 100m night), Light Machine Gun (200m / 100m), Sub Machine Gun (200m / 100m), Rocket Launcher (500m day), Pistol (25m day), Grenade (75% accuracy day), Grenade Launcher Rifle (200m day).',
        },
        {
          name: 'Public Speaking',
          rating: 4.0,
          detail:
            'I deliver clear, confident presentations to diverse audiences — from briefing senior officers to addressing troops and civilian stakeholders.',
        },
        {
          name: 'Cultural',
          rating: 4.0,
          detail:
            'As someone from Bangladesh\'s rich cultural heritage, I participate in cultural activities whenever I can. I have no stage fear thanks to countless performances. Skills include drama, acting, and singing in chorus or solo.',
        },
        {
          name: 'Driving',
          rating: 3.0,
          detail: 'I drive a 4-wheeler. I do not hold a driving license yet.',
        },
        {
          name: 'Sports',
          rating: 3.5,
          detail: 'I play football, cricket, and badminton.',
        },
      ],
    },
    {
      category: 'Languages',
      items: [
        {
          name: 'Bangla',
          rating: 5.0,
          detail:
            'As a native speaker, I speak, write, and read fluently with excellent communication skills. I understand most regional accents and can adapt my accent to make conversations more natural.',
        },
        {
          name: 'English',
          rating: 4.7,
          detail:
            'Fluent in English with excellent written and verbal communication skills. I understand most countries\' accents and often speak in a mixed US and British accent.',
        },
        {
          name: 'Hindi',
          rating: 4.0,
          detail:
            'Strong conversational Hindi for everyday communication and understanding media and regional interactions.',
        },
        {
          name: 'Urdu',
          rating: 3.0,
          detail:
            'Basic proficiency in Urdu for conversational purposes. I can listen and understand Urdu most of the time, though conversation with a fluent speaker will be a bit slow.',
        },
        {
          name: 'Arabic',
          rating: 2.0,
          detail: 'I can read Arabic.',
        },
        {
          name: 'French',
          rating: 1.0,
          detail:
            'Started Learning French with the help of Duo lingo but could not progress much due to lack of time.',
        },{
          name: 'Japanese',
          rating: 0.2,
          detail:
            'Started Learning Japanese with the help of Duo lingo but could not progress much due to lack of time.',
        }
      ],
    },
  ] satisfies SkillCategory[],
  journey: [
    {
      year: '1998',
      category: 'life',
      title: 'Birth',
      detail: [
        { text: '14 September 1998', highlight: true },
        { text: ' — born at ' },
        { text: 'P.G. Hospital, Dhaka', highlight: true },
        { text: '. Many came to see my first glance. My father ' },
        { text: 'Md. Abu Sufian', highlight: true },
        { text: ' and mother ' },
        { text: 'Tahmina Akter', highlight: true },
        { text: ' welcomed me surrounded by relatives. My name blends both parents\' names: ' },
        { text: 'Tanvir', highlight: true },
        { text: ' from Tahmina, ' },
        { text: 'Nahian', highlight: true },
        { text: ' from Sufian, and ' },
        { text: 'Swapnil', highlight: true },
        { text: ' chosen by my grandfather. My paternal grandfather used to call me ' },
        { text: 'Billu', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2006',
      category: 'education',
      title: 'Joined Ideal Primary School',
      detail: [
        { text: 'Joined ' },
        { text: 'Ideal Primary School', highlight: true },
        { text: ' in ' },
        { text: 'class 2', highlight: true },
        { text: ' directly, skipping class 1 after being taught those subjects at home. Initially ' },
        { text: 'roll 55', highlight: true },
        { text: ' — second last in class — but quickly rose in academic ranking.' },
      ],
    },
    { year: '2004', category: 'education', title: 'Started Elementary School' },
    {
      year: '2010',
      category: 'education',
      title: 'Joined Ideal School and College',
      detail: [
        { text: 'Joined ' },
        { text: 'Ideal School and College', highlight: true },
        { text: ' in ' },
        { text: 'class 6', highlight: true },
        { text: '. Made new friends and started new journey. Quickly became a known face in the school.' },
      ],
    },
    {
      year: '2010',
      category: 'achievement',
      title: 'Inter-School Debate Championship',
      detail: [
        { text: 'Became the ' },
        { text: '2nd runners up', highlight: true },
        { text: ' in the ' },
        { text: 'inter-school debate championship', highlight: true },
        { text: ' — my first taste of public speaking success.' },
      ],
    },
    {
      year: '2011',
      category: 'education',
      title: 'Junior School Certificate - 4.86 GPA',
      detail: [
        { text: 'Completed ' },
        { text: 'Junior School Certificate', highlight: true },
        { text: ' with ' },
        { text: 'GPA 4.86', highlight: true },
        { text: ' from Ideal School and College in ' },
        { text: '2011', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2014',
      category: 'education',
      title: 'Senior School Certificate - 5.00 GPA',
      detail: [
        { text: 'Completed ' },
        { text: 'Senior School Certificate', highlight: true },
        { text: ' with ' },
        { text: 'GPA 5.00', highlight: true },
        { text: ' from Ideal School and College.' },
      ],
    },
    {
      year: '2014',
      category: 'education',
      title: 'Joined Bir Shreshtha Noor Mohammad Public College',
      detail: [
        { text: 'Joined ' },
        { text: 'Bir Shreshtha Noor Mohammad Public College', highlight: true },
        { text: ' in ' },
        { text: 'class 11', highlight: true },
        { text: '. Started a new journey in college. Started to learn more about the world.' },
      ],
    },
    {
      year: '2016',
      category: 'achievement',
      title: 'Higher Secondary Certificate - 5.00 GPA',
      detail: [
        { text: 'Completed ' },
        { text: 'Higher Secondary Certificate', highlight: true },
        { text: ' with ' },
        { text: 'GPA 5.00', highlight: true },
        { text: ' from Bir Shreshtha Noor Mohammad Public College.' },
      ],
    },
    { year: '2016', category: 'education', title: 'Graduated from Bir Shreshtha Noor Mohammad Public College' },
    { year: '2016', category: 'achievement', title: 'ISSB Selection' },
    {
      year: '2016',
      category: 'job',
      title: 'Joined BMA with 77 BMA Long Course',
      detail: [
        { text: 'Joined ' },
        { text: 'Bangladesh Military Academy', highlight: true },
        { text: ' with ' },
        { text: '77 BMA Long Course', highlight: true },
        { text: ' in platoon ' },
        { text: 'J1-(B)', highlight: true },
        { text: ' on ' },
        { text: '29th December 2016', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2017',
      category: 'education',
      title: 'Started MIST in BMA',
      detail: [
        { text: 'Started ' },
        { text: 'MIST', highlight: true },
        { text: ' in BMA on ' },
        { text: '20 January 2017', highlight: true },
        { text: '. Selected the subject ' },
        { text: 'Computer Science and Engineering', highlight: true },
        { text: ' for BSc.' },
      ],
    },
    {
      year: '2019',
      category: 'job',
      title: 'Commissioned as Army Officer - 29th December',
      detail: [
        { text: 'Commissioned as ' },
        { text: 'Army Officer', highlight: true },
        { text: ' in the ' },
        { text: 'Corps of Signals', highlight: true },
        { text: ' on ' },
        { text: '29th December 2019', highlight: true },
        { text: ' with ' },
        { text: 'BA-10481', highlight: true },
        { text: '. Started a new journey in the army.' },
      ],
    },
    {
      year: '2020',
      category: 'job',
      title: '11 Signal Battalion',
      jobId: 'sig11',
      detail: [
        { text: 'Joined ' },
        { text: '11 Signal Battalion', highlight: true },
        { text: ' in ' },
        { text: 'Dhaka Cantonment', highlight: true },
        { text: ' and served as ' },
        { text: 'Battalion Adjutant', highlight: true },
        { text: ' and later as ' },
        { text: 'Company/Platoon Commander', highlight: true },
        { text: ' until August 2024.' },
      ],
    },
    { year: '2020', category: 'education', title: 'Joined MIST in Dhaka' },
    {
      year: '2020',
      category: 'other',
      title: 'Pandemic Covid-19',
      detail: [
        { text: 'Pandemic ' },
        { text: 'Covid-19', highlight: true },
        { text: ' hit the world from march 2020. ' },
        { text: 'Lockdown', highlight: true },
        { text: ' was imposed in Bangladesh from ' },
        { text: '20th March 2020 to 5th May 2020', highlight: true },
        { text: '. I was stuck in ' },
        { text: 'MIST', highlight: true },
        { text: ' for a long time. But soon we were sent to units to do ' },
        { text: 'COVID duty', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2020',
      category: 'education',
      title: 'Return to MIST after Lockdown',
      detail: [
        { text: 'Returned to ' },
        { text: 'MIST', highlight: true },
        { text: ' after Lockdown on ' },
        { text: 'November 2020', highlight: true },
        { text: '. Started doing online classes and exams for a few days, and then started doing offline classes and exams (only for military guys)' },
      ],
    },
    {
      year: '2022',
      category: 'life',
      title: 'Contracted Covid-19',
      detail: [
        { text: 'Contracted ' },
        { text: 'Covid-19', highlight: true },
        { text: ' on ' },
        { text: 'january 2022', highlight: true },
        { text: '. I was isolated in my room for ' },
        { text: '14 days', highlight: true },
        { text: '. I was feeling very sick and had to take a lot of medicines. I was also very scared of dying, but ' },
        { text: 'Alhamdulillah I survived', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2022',
      category: 'job',
      title: 'Promoted to Captain',
      detail: [
        { text: 'Promoted to ' },
        { text: 'Captain', highlight: true },
        { text: ' on ' },
        { text: '7th March 2022', highlight: true },
        { text: '.I was so happy with this achievement.' },
      ],
    },
    {
      year: '2022',
      category: 'education',
      title: 'BSc in Computer Science and Engineering, CGPA 3.39',
      detail: [
        { text: 'Completed ' },
        { text: 'BSc in Computer Science and Engineering', highlight: true },
        { text: ' with ' },
        { text: 'CGPA 3.39', highlight: true },
        { text: ' from MIST' },
      ],
    },
    {
      year: '2022',
      category: 'education',
      title: 'Graduated from MIST',
      detail: [
        { text: 'Left ' },
        { text: 'MIST', highlight: true },
        { text: ' on ' },
        { text: 'April 2022', highlight: true },
        { text: ' after completing BSc.' },
      ],
    },
    {
      year: '2022',
      category: 'job',
      title: 'Returned to 11 Signal Battalion',
      jobId: 'sig11',
      detail: [
        { text: 'Returned to ' },
        { text: '11 Signal Battalion', highlight: true },
        { text: ' in ' },
        { text: 'Dhaka Cantonment', highlight: true },
        { text: ' after graduating from MIST.' },
      ],
    },
    {
      year: '2022',
      category: 'achievement',
      title: 'Officers Basic Course (Signals) 45',
      detail: [
        { text: 'Successfully completed ' },
        { text: 'Officers Basic Course (Signals) 45', highlight: true },
        { text: ' under the ' },
        { text: 'Signal Training Center and School', highlight: true },
        { text: ', with result of ' },
        { text: 'B Y', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2022',
      category: 'life',
      title: 'Contracted Covid-19 (2nd time)',
      detail: [
        { text: 'Contracted ' },
        { text: 'Covid-19', highlight: true },
        { text: ' again on ' },
        { text: 'June 2022', highlight: true },
        { text: '. This time I was very weary as I did not had any vaccinations done. But ' },
        { text: 'Alhamdulillah I survived again', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2023',
      category: 'achievement',
      title: 'Army Project Study',
      detail: [
        { text: 'I was assigned to ' },
        { text: 'Army Project Study', highlight: true },
        { text: ' under ' },
        { text: '86 Independent Signal Brigade', highlight: true },
        { text: '. I was mainly in charge of the ' },
        { text: 'Powerpoint Presentation', highlight: true },
        { text: ' and supporitng the team with contents for their parts. The Commander 86 Independent Signal Brigade was very impressed with my work and he gave me a lot of praise for my work. He even increased my ' },
        { text: 'Officers Personal Record (OPR) Marks by 2', highlight: true },
        { text: ' to lift me in to the ' },
        { text: 'Extraordinary Grade', highlight: true },
      ],
    },
    {
      year: '2023',
      category: 'achievement',
      title: 'Cyber Security Course 2',
      detail: [
        { text: 'Successfully completed ' },
        { text: 'Cyber Security Course - 2', highlight: true },
        { text: ' under the ' },
        { text: 'Signal Training Center and School', highlight: true },
        { text: ', with result of ' },
        { text: 'A', highlight: true },
      ],
    },
    {
      year: '2023',
      category: 'achievement',
      title: 'Basic Commando Course 73',
      detail: [
        { text: 'Successfully completed ' },
        { text: 'Basic Commando Course - 73', highlight: true },
        { text: ' under the ' },
        { text: 'School of Infantry and Tactics', highlight: true },
        { text: ' with result of ' },
        { text: 'B', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2023',
      category: 'achievement',
      title: "Officers' Weapons Course 107",
      detail: [
        { text: 'Successfully completed ' },
        { text: "Officers' Weapons Course - 107", highlight: true },
        { text: ' under the ' },
        { text: 'School of Infantry and Tactics', highlight: true },
        { text: ' with result of ' },
        { text: 'B+ Y+', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2024',
      category: 'job',
      title: 'Inter Divisional Firing Competition — Team Captain',
      detail: [
        { text: 'I was the ' },
        { text: 'team captain', highlight: true },
        { text: ' of the ' },
        { text: 'inter divisional firing competition', highlight: true },
        { text: '. I was the representative of ' },
        { text: '86 Independent Signal Brigade', highlight: true },
        { text: '. I feel proud of this rare opportunity to represent my unit and my ' },
        { text: 'Corps', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2024',
      category: 'other',
      title: 'July–August Political Incident',
      detail: [
        { text: 'During ' },
        { text: 'July and August 2024', highlight: true },
        { text: ', there was a ' },
        { text: 'political incident', highlight: true },
        { text: ' in Bangladesh. I was directly involved in this situation and I had to provide ' },
        { text: 'security', highlight: true },
        { text: ' to general people inside ' },
        { text: 'Dhaka', highlight: true },
        { text: ' and inside ' },
        { text: 'Cantonment area', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2024',
      category: 'job',
      title: 'Posting to 7 Signal Battalion',
      jobId: 'sig7',
      detail: [
        { text: 'Posted from ' },
        { text: '11 Signal Battalion', highlight: true },
        { text: ' to ' },
        { text: '7 Signal Battalion', highlight: true },
        { text: ' at ' },
        { text: 'Ramu, Cox\'s Bazar', highlight: true },
        { text: ', and served as ' },
        { text: 'Company Commander, 112 Brigade Signal Company', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2024',
      category: 'job',
      title: 'Hill Tracts Deployment',
      jobId: 'sig7',
      detail: [
        { text: 'Deployed to ' },
        { text: 'Bandarban, Chittagong Hill Tracts', highlight: true },
        { text: ' during ' },
        { text: 'Operation Uttoron', highlight: true },
        { text: ' as Company Commander, with duty as a staff member of ' },
        { text: '97 Infantry Brigade', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2025',
      category: 'job',
      title: 'Back to 7 Signal Battalion in Ramu',
      jobId: 'sig7',
      detail: [
        { text: 'Returned from ' },
        { text: 'Ruma, Bandarban', highlight: true },
        { text: ' to ' },
        { text: 'Ramu, Cox\'s Bazar', highlight: true },
        { text: ' and continued as Company Commander until June 2025.' },
      ],
    },
    {
      year: '2025',
      category: 'achievement',
      title: 'Recognition for PowerPoint Design',
      detail: [
        { text: 'I was recognized for my ' },
        { text: 'PowerPoint Design', highlight: true },
        { text: ' skills by the ' },
        { text: 'General Officer Commanding (GOC) 10 Infantry Division', highlight: true },
        { text: '. I was given a lot of praise for my work. I was very happy to receive this recognition.' },
      ],
    },
    {
      year: '2025',
      category: 'job',
      title: 'Leaving Army',
      detail: [
        { text: 'I was retired from the ' },
        { text: 'Bangladesh Army', highlight: true },
        { text: ' ' },
        { text: '2025', highlight: true },
        { text: '. I was very sad to leave my unit and my friends. I was very happy to serve my country for more than ' },
        { text: '5 years', highlight: true },
        { text: '. I was very proud of my service, and I will always remember my service.' },
      ],
    },
    {
      year: '2026',
      category: 'job',
      title: 'Automobile Association of Bangladesh',
      jobId: 'aab',
      detail: [
        { text: 'Deputy General Manager', highlight: true },
        { text: ' for Membership, Security Services and Issuance at ' },
        { text: '3B, Moghbazar, Dhaka', highlight: true },
        { text: '. ' },
        { text: 'March–April 2026', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2026',
      category: 'job',
      title: "General Manager, Dreamer's companies",
      jobId: 'dreamers',
      detail: [
        { text: 'General Manager', highlight: true },
        { text: ' of ' },
        { text: "Dreamer's Den, Dreamer's Construction, and Sweet Dream Agro Farm", highlight: true },
        { text: ' at ' },
        { text: 'Mirpur DOHS, Dhaka', highlight: true },
        { text: '. ' },
        { text: 'June–November 2026', highlight: true },
        { text: '.' },
      ],
    },
    {
      year: '2026',
      category: 'life',
      title: 'Got Married',
      detail: [
        { text: 'Got happily married to ' },
        { text: 'Tasnia Akter Ety', highlight: true },
        { text: ' on ' },
        { text: '21st August', highlight: true },
        { text: '. Alhamdulillah, with all the ongoing pressures in the current month, I was finally able to get this nice achievement of my life. Thanks to my beautiful and supportive wife, I can focus more on my work and progress further.' },
      ],
    },

  ] satisfies JourneyEvent[],
  jobs: [
    {
      id: 'dreamers',
      organization: "Dreamer's Den, Dreamer's Construction & Sweet Dream Agro Farm",
      appointment: 'General Manager',
      location: 'Mirpur DOHS, Dhaka',
      dates: 'June 2026 – November 2026',
      blocks: [
        {
          groups: [
            {
              label: 'Management and Admin & HR',
              items: [
                'Managed the team of all three companies by coordinating tasks, overseeing progress, and controlling the outcome.',
                'Managed work distribution for employees, along with leave and personal requirements.',
                'Created and implemented a chain of command for all three companies.',
                'Coordinated foreign partners’ visit programs and schedules for investment and expansion.',
                'Coordinated project and site supervisors in different areas of Bangladesh.',
                'Acted as HR manager and recruited and managed the companies’ human resources.',
              ],
            },
            {
              label: 'Business Management',
              items: [
                'Oversaw tender search and submission, from coordinating with tender floaters and collecting supplier quotes through delivery and bills.',
                'Coordinated business expansion from the Bangladesh Army to the Bangladesh Navy, the Army Aviation Group, and other organizations.',
                'Coordinated agro project expansion in Jolshiri, Dhaka, and the Rangpur farm.',
                'Supervised the CMTD MT shed from start through handover.',
                'Attended general and coordination meetings to expand business, especially supply.',
                'Pursued new customers for future supply-chain work.',
                'Pursued foreign sources to act as OEM and principals for Dreamer’s Den as a local agent.',
                'Built relationships with foreign principals, partners, and customers as the company point of contact.',
                'Ran digital marketing, social media, and online platforms.',
                'Handled invoicing, receivables, and payables, and kept the finances accountable and compliant.',
              ],
            },
            {
              label: 'IT and Automation',
              items: [
                'Created the official websites and online portfolios for Dreamer’s Den Event Management and Dreamer’s Construction, with achievements and catalogues.',
                'Created the official website and shopping page for Sweet Dream Agro Farm.',
                'Created the official portfolio for Dreamer’s Den Landscaping and Plantation.',
                'Supervised the physical profile portfolios for Dreamer’s Den Event Management and Dreamer’s Construction.',
                'Supervised the portfolio and website for Dreamer’s Den Parts Supply, for foreign partners and local agents.',
                'Automated tender-schedule checking and filtering, and coordinated with the ERP for quotations.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aab',
      organization: 'Automobile Association of Bangladesh',
      appointment: 'Deputy General Manager — Membership, Security Services and Issuance',
      location: '3B, Moghbazar, Dhaka',
      dates: 'March 2026 – April 2026',
      blocks: [
        {
          groups: [
            {
              label: 'Management',
              items: [
                'Managed the membership operations team, serving hundreds of customers daily.',
                'Created and implemented tiered membership benefit matrices, aligned with FIA benchmarks and the local context.',
                'Oversaw issuance management, with error-free documentation, compliance, and timely delivery of member services.',
                'Coordinated the launch of the NRB Membership program for members abroad and their families in Bangladesh.',
                'Launched the website for online services and membership, especially for non-resident Bangladeshis.',
                'Drafted organizational communications, announcements, and milestone campaigns for 2,300+ members nationwide.',
                'Benchmarked insurance packages and negotiated collaborations that expanded member coverage.',
                'Supervised the call center and digital support teams and improved response times.',
                'Tracked KPIs and prepared operational reports for management.',
                'Kept subscriptions steady through targeted outreach and retention campaigns.',
              ],
            },
            {
              label: 'Security',
              items: [
                'Directed the Security Services division, including insurance collaborations and member protection.',
                'Built and trained the in-house security team, and designed and delivered its security training.',
                'Supervised CCTV, access control, and vendor security.',
                'Set up incident reporting with rapid response.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sig7',
      organization: '7 Signal Battalion, Bangladesh Army',
      appointment: 'Company Commander — 112 Brigade Signal Company',
      location: 'Ramu, Cox’s Bazar',
      dates: 'August 2024 – June 2025',
      blocks: [
        {
          label: 'Hill Tracts — Bandarban',
          groups: [
            {
              label: 'Operation',
              items: [
                'Commanded over 500 under-command in counter-insurgency operations in the hills of Bandarban during Operation Uttoron 2024/25.',
                'Conducted tactical planning against Kuki-Chin National Army threats as a staff member of 97 Infantry Brigade.',
                'Prepared and managed operational budgets and resource allocation for patrols and camps in the Chittagong Hill Tracts.',
                'Conducted regular inspections of signal communication across difficult hill terrain.',
                'Built presentations for the Chittagong Hill Tracts Special Operations Plan.',
              ],
            },
            {
              label: 'Security',
              items: [
                'Conducted risk assessments for operations in the hostile environment of the Chittagong Hill Tracts.',
                'Maintained the security of paperwork while managing daily reports and returns.',
                'Designed secure ICT networks for field communication during counter-insurgency operations.',
                'Served as cybersecurity advisor for sensitive hill-tract operations during and after operational events.',
              ],
            },
            {
              label: 'Administration & HR',
              items: [
                'Planned and executed the company’s permanent relocation to Cox’s Bazar, including its installations, with zero incidents.',
                'Managed accommodation, leave, and deployment of under-command in remote camps.',
                'Maintained high morale and discipline across camps in the hills.',
                'Managed rations for troops in remote camps.',
                'Managed vehicle movement in and out of camps and headquarters.',
                'Visited camps periodically to check on troops and their conditions.',
                'Maintained almost 100% under-command readiness through leave and duty planning.',
              ],
            },
          ],
        },
        {
          label: 'Cox’s Bazar',
          groups: [
            {
              label: 'Operation',
              items: [
                'Participated in planning and preparing a new operational plan for 10 Infantry Division at Ramu Cantonment.',
                'Participated in incorporating the 97 Infantry Brigade operational plan into the 10 Infantry Division plan.',
                'Cleared to work on the classified operational planning for 10 Infantry Division.',
                'Took part in Operation Purbo Prachir in Cox’s Bazar.',
                'Built presentations for the divisional operation plan, officers’ OPR review, and divisional briefs.',
              ],
            },
            {
              label: 'Security',
              items: [
                'Ensured strict compliance with security protocols during deployment.',
                'Remained aware of under-command and their duties at post and in accommodation.',
              ],
            },
            {
              label: 'Administration & HR',
              items: [
                'Maintained high morale and discipline.',
                'Maintained accounts and funds.',
                'Planned and hosted the Freedom Fighters’ visit to Cox’s Bazar, and executed the visit logistics.',
                'Managed accommodation, leave, and deployment of company under-command.',
                'Managed rations for all troops, including those on attachment.',
                'Managed company paperwork and documentation.',
                'Inspected accommodation and the nearby area for cleanliness and hygiene.',
                'Built an Excel tracker that calculated present strength from leave, posting, and attachment data.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sig11',
      organization: '11 Signal Battalion, Bangladesh Army',
      appointment: 'Battalion Adjutant, then Company/Platoon Commander',
      location: 'Dhaka Cantonment, Dhaka',
      dates: 'January 2020 – August 2024',
      blocks: [
        {
          label: 'Battalion Adjutant',
          groups: [
            {
              label: 'Operation',
              items: [
                'Supervised administration and operations for over 500 soldiers at the same time.',
                'Took part in summer and winter training exercises as adjutant and as patrol commander.',
                'Took part in emergency drills, including fire and earthquake, as executive commander, and in rapid-action patrols as patrol commander.',
                'Represented 86 Independent Signal Brigade in the Inter-Divisional Firing Competition as team captain and best firer.',
                'Led content for the 86 Independent Signal Brigade Army Project Study. The Brigade Commander raised my Officers’ Personal Record marks by 2 for that work.',
                'Built presentations for the Army Project Study, Jolshiri Housing, and the Dhaka Ladies Club.',
                'Received formal recognition for PowerPoint design on an operational presentation.',
              ],
            },
            {
              label: 'Administration & HR',
              items: [
                'Managed accommodation, leave, and duty rosters.',
                'Enforced military discipline and the code of conduct.',
                'Oversaw daily office management and the clerks’ record-keeping.',
                'Implemented welfare and grievance handling for all under-command.',
                'Conducted regular inspections to keep the unit ready.',
                'Prepared and presented administrative reports to senior leaders.',
                'Facilitated training and professional development for subordinates.',
                'Managed resource allocation for administrative and security needs.',
                'Balanced the workload by managing how troops were distributed inside and outside the unit.',
                'Followed official written laws, rules, and regulations in every matter.',
                'Coordinated everyday vehicle movement inside and outside the unit and cantonment.',
                'Maintained the unit’s funds and accounts.',
                'Planned each day’s activities and published them the day before.',
                'Kept account of individual performance.',
                'Resolved complex disciplinary cases fairly while looking after the welfare of 500+ soldiers.',
              ],
            },
            {
              label: 'Security',
              items: [
                'Ensured compliance with security protocols during deployment.',
                'Remained aware of under-command and their duties at post and in accommodation.',
                'Maintained confidential records and documentation securely.',
              ],
            },
          ],
        },
        {
          label: 'Company/Platoon Commander',
          groups: [
            {
              label: 'Operation',
              items: [
                'Supervised and planned operations with over 500 soldiers over time.',
                'Planned and led the COVID-19 public awareness campaign across Dhaka North in 2020.',
                'Took part in cantonment defense during the July 2024 unrest.',
                'Led patrols aiding the civil administration around Dhaka Cantonment during August 2024.',
                'Coordinated and executed the inauguration program of Sena Prangan.',
                'Designed and ran a hostage-rescue training exercise to test troop readiness.',
              ],
            },
            {
              label: 'Administration & HR',
              items: [
                'Maintained accountability of individual duties, leave status, and distribution.',
                'Planned leave, accommodation, and deployment so the load stayed balanced.',
                'Oversaw the daily correspondence of the company and platoon.',
              ],
            },
            {
              label: 'Security',
              items: [
                'Coordinated security and surveillance for National Armed Forces Day at Sena Kunja in 2022 and 2023.',
                'Acted as Security and Surveillance Officer for Boshonto Boron in 2023 and 2024, including the Army-level event.',
                'Coordinated security, surveillance, and media coverage for the 2nd Bangladesh Youth Games in 2024.',
                'Coordinated surveillance, security, and administrative coverage for the inauguration of Sena Prangan in 2024.',
                'Ensured compliance with security protocols for activities inside and outside the cantonment.',
              ],
            },
          ],
        },
      ],
    },
  ] satisfies JobRole[],
  achievements: [
    {
      title: "GOC's Coin of Excellence",
      date: 'CHT Service',
      category: 'Honor',
      description:
        'Awarded for outstanding service in the Chittagong Hill Tracts under 24 Infantry Division.',
    },
    {
      title: 'Serving with 97 Infantry Brigade',
      date: 'CHT Deployment',
      category: 'Service',
      description:
        'A token memento for serving in the Chittagong Hill Tracts with HQ 97 Infantry Brigade — Southern Shield.',
    },
    {
      title: 'Basic Commando Course 73',
      date: 'Aug – Oct 2023',
      category: 'Military Course',
      description:
        'Successfully completed Basic Commando Course 73 under the School of Infantry and Tactics, Bangladesh Army. BA-10481 Captain Tanvir Nahian Swapnil.',
    },
    {
      title: "Officers' Weapons Course 107",
      date: 'Oct – Nov 2023',
      category: 'Military Course',
      description:
        "Successfully completed Officers' Weapons Course 107 under the School of Infantry and Tactics, Bangladesh Army. BA-10481 Captain Tanvir Nahian Swapnil.",
    },
    {
      title: 'Operation Utoron — Bandarban',
      date: '2024',
      category: 'Operations',
      description:
        'Commanded over 500 under-command during Operation Uttoron in Bandarban, Chittagong Hill Tracts. Designed secure ICT networks and served as cybersecurity advisor in remote operational areas.',
    },
  ] satisfies Achievement[],
  contacts: {
    email: 'officialtanvirnahian@gmail.com',
    phones: ['+8801790136979', '+8801608892998'],
    whatsapp: '+8801790136979',
    location: 'Dhaka, Bangladesh',
    cvUrl: `${import.meta.env.BASE_URL}Tanvir%20Nahian%20Swapnil%20CV%20Nov%202026.pdf`,
    allLinksHref: 'https://zabulanakakil.github.io/links',
    allLinksLabel: 'zabulanakakil.github.io/links',
    links: [
      {
        label: 'Email',
        href: 'mailto:officialtanvirnahian@gmail.com',
        copyValue: 'officialtanvirnahian@gmail.com',
        numbers: [
          {
            label: 'Primary',
            href: 'mailto:officialtanvirnahian@gmail.com',
            copyValue: 'officialtanvirnahian@gmail.com',
          },
          {
            label: 'Alt',
            href: 'mailto:zabulanakakil@gmail.com',
            copyValue: 'zabulanakakil@gmail.com',
          },
        ],
      },
      {
        label: 'WhatsApp',
        href: 'https://wa.me/8801790136979',
        copyValue: '+8801790136979',
        external: true,
        numbers: [
          {
            label: 'Primary',
            href: 'https://wa.me/8801790136979',
            copyValue: '+8801790136979',
          },
          {
            label: 'Alt',
            href: 'https://wa.me/8801608892998',
            copyValue: '+8801608892998',
          },
        ],
      },
      {
        label: 'Phone',
        href: 'tel:+8801790136979',
        copyValue: '+8801790136979',
        numbers: [
          {
            label: 'Primary',
            href: 'tel:+8801790136979',
            copyValue: '+8801790136979',
          },
          {
            label: 'Alt',
            href: 'tel:+8801608892998',
            copyValue: '+8801608892998',
          },
        ],
      },
      {
        label: 'Facebook',
        href: 'https://facebook.com/tanvir.nahian.96',
        copyValue: 'facebook.com/tanvir.nahian.96',
        external: true,
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/tanvirnahian',
        copyValue: 'instagram.com/tanvirnahian',
        external: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/capt-tanvir-nahian',
        copyValue: 'linkedin.com/in/capt-tanvir-nahian',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/ZabulanaKakil',
        copyValue: 'github.com/ZabulanaKakil',
        external: true,
      },
      {
        label: 'Discord',
        href: 'https://discord.com/users/guavanovitch',
        copyValue: 'guavanovitch',
        external: true,
      },
    ] satisfies ContactLink[],
  },
} as const

export const personalSpecs: PersonalSpec[] = [
  { label: 'Full Name', value: portfolio.name },
  { label: 'Nationality', value: portfolio.personal.nationality },
  { label: 'Gender', value: portfolio.personal.gender },
  { label: 'Date of Birth', value: portfolio.personal.dob },
  { label: 'Height', value: portfolio.personal.height },
  { label: 'Weight', value: portfolio.personal.weight },
  { label: 'Blood Group', value: portfolio.personal.bloodGroup },
  { label: 'Religion', value: portfolio.personal.religion },
  { label: 'Father\'s Name', value: portfolio.personal.parents.father },
  { label: 'Mother\'s Name', value: portfolio.personal.parents.mother },
  { label: 'Sibling', value: portfolio.personal.sibling },
  { label: 'Marital Status', value: portfolio.personal.maritalStatus },
  { label: 'Educational Background', value: portfolio.personal.educationalBackground },
  {
    label: 'Education',
    value: 'JSC GPA 4.86 · SSC GPA 5.00 · HSC GPA 5.00 · BSc CSE CGPA 3.39',
  },
  { label: 'Languages', value: 'Bangla, English, Hindi, Urdu, Arabic' },
  { label: 'Hobbies', value: portfolio.personal.hobbies.join(', ') },
]

export const navShortName = 'Tanvir Nahian'

export const sections: { id: SectionId; label: string }[] = [
  { id: 'info', label: 'Info' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'journey', label: 'Journey' },
  { id: 'contacts', label: 'Contacts' },
]
