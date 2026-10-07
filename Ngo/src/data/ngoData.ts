import heroChildImg from '../assets/images/hero_child_education_1791398140415.jpg';
import aboutMotherImg from '../assets/images/about_mother_child_1791398157298.jpg';
import causeWaterImg from '../assets/images/cause_clean_water_1791398172773.jpg';
import causeSchoolImg from '../assets/images/cause_school_supplies_1791398186873.jpg';
import causeMealsImg from '../assets/images/cause_nutrition_meals_1791398199234.jpg';

import { Cause, NGOEvent, NewsArticle, Testimonial, ActivityPhoto } from '../types.ts';

export const NGO_INFO = {
  name: 'SoliKind',
  tagline: 'Humanitarian & Child Welfare Relief',
  phone: '+1 (239) 555-0108',
  phoneAlt: '+(684) 555-0102',
  address: '244 Royal Ln. Mesa, New Jersey 463',
  email: 'hope@solikind.org',
  registeredId: '501(c)(3) EIN: 84-2938102',
  charityRating: 'Platinum Transparency 2026',
  yearFounded: 2008,
  heroImage: heroChildImg,
  aboutImage: aboutMotherImg,
};

export const IMPACT_STATS = [
  {
    value: '326',
    label: 'Total Campaigns',
    subtext: 'Across 18 underserved regions',
  },
  {
    value: '$28.4M',
    label: 'Total Funds Raised',
    subtext: '89% directed straight to field programs',
  },
  {
    value: '125K',
    label: 'Happy Volunteers',
    subtext: 'Active humanitarians on the ground',
  },
  {
    value: '18+',
    label: 'Years of Impact',
    subtext: 'Continuous community building since 2008',
  },
];

export const CAUSES_DATA: Cause[] = [
  {
    id: 'cause-education',
    title: "Let's be Kind For The Poor Children",
    category: 'education',
    categoryLabel: 'Education Access',
    description:
      'Charity is the heartbeat of compassion, a force bridging the gaps between privilege and acute scarcity for children longing to learn.',
    fullStory:
      'In marginalized rural settlements, more than 4,200 children lack basic classrooms, desks, and accredited educators. Through our Back-To-School Initiative, your support constructs weather-resilient modular classrooms, distributes learning kits with curriculum textbooks, and funds accredited teacher stipends. Every child supported completes elementary schooling with foundational literacy and mathematical skills.',
    image: causeSchoolImg,
    raised: 80050,
    goal: 100000,
    donorsCount: 1420,
    featured: true,
    location: 'Eastern Rift Valley & Semi-Arid Districts',
    impactMetrics: [
      '4,200 students equipped with books and uniforms',
      '14 solar-powered learning sanctuaries built',
      '98% student attendance retention rate',
    ],
  },
  {
    id: 'cause-nutrition',
    title: 'Changing lives one meal at a time',
    category: 'nutrition',
    categoryLabel: 'Hunger Relief',
    description:
      'Every day is a journey for food security. We bridge the distance between empty cupboards and warm, nutrient-dense daily meals.',
    fullStory:
      'Chronic child malnutrition hinders cognitive growth and leaves infants vulnerable to preventable illnesses. SoliKind community kitchens cook and distribute over 15,000 warm, protein-rich lunches daily in schools and rural community centers. We partner directly with local smallholder farmers to purchase sustainable staples, fueling children and empowering the local agrarian economy.',
    image: causeMealsImg,
    raised: 71000,
    goal: 100000,
    donorsCount: 980,
    featured: true,
    location: 'Highland Agricultural Zones & Urban Fringes',
    impactMetrics: [
      '15,000 hot balanced lunches served daily',
      '34 community gardens established with local mothers',
      'Reduction of severe child stunting by 41%',
    ],
  },
  {
    id: 'cause-water',
    title: 'The Thirsty are Waiting For Your Help',
    category: 'water',
    categoryLabel: 'Clean Water',
    description:
      'Charity is a beacon of hope illuminating the darkest corners of despair. Clean, reliable water unlocks health, school attendance, and life.',
    fullStory:
      'Young girls in remote villages trek up to four hours every morning carrying 20-liter jerrycans of contaminated pond water. We install deep, solar-hybrid drilled boreholes equipped with reverse-osmosis filtration and community distribution taps. Safe drinking water eradicates cholera, prevents waterborne parasite infections, and returns thousands of hours to girls for their education.',
    image: causeWaterImg,
    raised: 71125,
    goal: 120000,
    donorsCount: 1150,
    featured: true,
    location: 'Northern Basin & Arid Lowlands',
    impactMetrics: [
      '68 solar-powered deep boreholes operational',
      '120,000+ residents with direct access to clean water',
      'Zero reported cholera cases in served settlements',
    ],
  },
  {
    id: 'cause-healthcare',
    title: 'Mobile Clinics for Remote Settlements',
    category: 'healthcare',
    categoryLabel: 'Medical Care',
    description:
      'Delivering essential pediatric checkups, maternal health screenings, and life-saving immunizations directly to isolated mountain hamlets.',
    fullStory:
      'When the nearest hospital is a 30-mile journey on foot, preventable illnesses quickly turn tragic. Our all-terrain mobile clinics travel across remote dirt corridors with volunteer doctors, pediatric medicines, emergency vaccines, and ultrasound diagnostic kits, safeguarding expecting mothers and newborns.',
    image: causeWaterImg,
    raised: 49300,
    goal: 75000,
    donorsCount: 640,
    featured: false,
    location: 'High Mountain Outposts',
    impactMetrics: [
      '18,500 patient visits conducted annually',
      '100% infant immunization coverage in reached villages',
      'Over 2,400 safe deliveries assisted',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'SoliKind is a beacon of hope and rigorous transparency. Its commitment to transparency and community empowerment translates every single dollar into verifiable field change with detailed donor updates.',
    author: 'Elizabeth Doe',
    role: 'Global Philanthropy Partner',
    location: 'Geneva, Switzerland',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 't-2',
    quote:
      'I was impressed by the clarity of keeping donors informed about the tangible outcomes of their contributions. Regular field updates make me proud to be a monthly recurring donor for 5 years.',
    author: 'Esther Howard',
    role: 'Monthly Sustaining Donor',
    location: 'Austin, Texas',
    avatarBg: 'bg-amber-600',
  },
  {
    id: 't-3',
    quote:
      'Their comprehensive approach resonates with us. SoliKind’s dedication to creating lasting change across varied levels of society equips communities with skills to thrive autonomously.',
    author: 'Arthur Vance',
    role: 'Community Development Leader',
    location: 'Nairobi, Kenya',
    avatarBg: 'bg-teal-700',
  },
];

export const UPCOMING_EVENTS: NGOEvent[] = [
  {
    id: 'event-clothing',
    title: 'Your Old Clothes Are Their Happiness',
    date: 'OCT 24, 2026',
    month: 'OCT',
    day: '24',
    time: '9:00 AM - 3:00 PM EST',
    location: 'Mesa Central Hub, NJ',
    address: '244 Royal Ln. Mesa, New Jersey',
    description:
      'Join our annual community sorting and bundling drive. We pack clean winter jackets, thermal blankets, and shoes for cold-climate refugee camps.',
    category: 'Community Drive',
    spotsLeft: 42,
    image: causeSchoolImg,
  },
  {
    id: 'event-water-walk',
    title: 'Solve the Water Problem of World',
    date: 'NOV 12, 2026',
    month: 'NOV',
    day: '12',
    time: '8:30 AM - 1:00 PM EST',
    location: 'Hudson Riverfront Park',
    address: 'Pavilion Pier 4, Jersey City, NJ',
    description:
      'Walk 5 kilometers with a 5-liter water jug to experience the daily trek made by millions, and raise funds to sponsor two new village water boreholes.',
    category: 'Charity Run & Walk',
    spotsLeft: 85,
    image: causeWaterImg,
  },
  {
    id: 'event-school-fair',
    title: 'School For African Poor Children',
    date: 'DEC 05, 2026',
    month: 'DEC',
    day: '05',
    time: '6:00 PM - 10:00 PM EST',
    location: 'Grand Heritage Ballroom',
    address: '500 Atlantic Ave, Philadelphia, PA',
    description:
      'An inspiring evening featuring field documentary screenings, keynote speakers, cultural artisan auctions, and pledges for 2027 school buildings.',
    category: 'Annual Benefit Gala',
    spotsLeft: 28,
    image: causeMealsImg,
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Help make their dreams come true: Inside our 2026 learning centers',
    excerpt:
      'Remember, a world of difference begins with one single lesson. See how solar lamps and digital tablets opened new horizons for 850 rural students.',
    content:
      'Education remains the most enduring weapon against extreme hardship. This month, SoliKind completed installation of high-efficiency rooftop solar arrays and satellite-linked educational tablets in 12 remote schools. For the first time in their lives, students can read past sunset and explore digital math curricula. Teachers reported that drop-out rates dropped by 80% in the first quarter.',
    date: 'Oct 02, 2026',
    author: 'Elena Gomez',
    readTime: '4 min read',
    category: 'Education Report',
    image: causeSchoolImg,
  },
  {
    id: 'news-2',
    title: 'They also deserve proper education as you: Teacher training update',
    excerpt:
      'Charity is a beacon of hope illuminating the quietest corners of despair. Meet the 40 local instructors who graduated from our pedagogy fellowship.',
    content:
      'Investing in brick and mortar is only half the solution; skilled educators are the soul of schooling. Through our Teacher Mentorship Fellowship, 40 young teachers from regional districts completed accredited pedagogical certification. They now instruct over 2,000 pupils with modern bilingual literacy and STEM hands-on kits.',
    date: 'Sep 27, 2026',
    author: 'Dr. Michael Chen',
    readTime: '5 min read',
    category: 'Field Dispatch',
    image: causeMealsImg,
  },
  {
    id: 'news-3',
    title: 'Your clothes give them a warm hug: Winter emergency preparation',
    excerpt:
      'Cold weather is descending rapidly on the mountain camps. Here is how our rapid-response distribution teams are ensuring no toddler shivers.',
    content:
      'With winter temperatures plunging below freezing in high-altitude settlements, prompt action saves lives. Our logistics warehouse has already processed 18,000 winter thermal jackets, fleece blankets, and heavy boots. In collaboration with local dispatch coordinators, door-to-door distribution ensures vulnerable elders and toddlers receive emergency supplies.',
    date: 'Sep 19, 2026',
    author: 'Sarah Jenkins',
    readTime: '3 min read',
    category: 'Emergency Aid',
    image: causeWaterImg,
  },
];

export const GALLERY_ITEMS: ActivityPhoto[] = [
  {
    id: 'g-1',
    title: 'Morning Reading Circle',
    category: 'Education',
    location: 'Rift Valley Schoolhouse',
    image: causeSchoolImg,
    description: 'Students gather for their daily reading hour with newly delivered library books.',
  },
  {
    id: 'g-2',
    title: 'Solar Water Tap Opening',
    category: 'Clean Water',
    location: 'Turkana Well 14',
    image: causeWaterImg,
    description: 'The first fresh water stream flows from a solar-powered borehole providing water for 3,000 people.',
  },
  {
    id: 'g-3',
    title: 'Warm Meal Distribution',
    category: 'Nutrition',
    location: 'Community Center 3',
    image: causeMealsImg,
    description: 'Hot, protein-packed lentil and rice bowls served fresh to preschool students.',
  },
  {
    id: 'g-4',
    title: 'Maternal Care & Wellness',
    category: 'Healthcare',
    location: 'Mobile Clinic Team 2',
    image: aboutMotherImg,
    description: 'Prenatal wellness checkups and nutritional supplements provided to new mothers.',
  },
  {
    id: 'g-5',
    title: 'Bright Smiles & Hope',
    category: 'Humanitarian',
    location: 'Learning Sanctuary',
    image: heroChildImg,
    description: 'The vibrant joy and optimism of children given a safe space to grow and learn.',
  },
  {
    id: 'g-6',
    title: 'Hands of Relief & Community',
    category: 'Volunteer',
    location: 'Mesa Supply Hub',
    image: causeWaterImg,
    description: 'Local and international volunteers assembling hygiene and clean water filtration kits.',
  },
];

export const IMPACT_CALCULATOR_PRESETS = [
  {
    amount: 25,
    title: 'Classroom Essentials Kit',
    impact: 'Supplies 3 students with notebooks, geometry sets, and textbooks for a full school term.',
  },
  {
    amount: 50,
    title: 'Clean Water for 2 Families',
    impact: 'Provides clean solar-filtered drinking water for two households for 3 months.',
  },
  {
    amount: 100,
    title: '150 Nutritious Hot Lunches',
    impact: 'Prepares and delivers 150 wholesome meals for children attending community learning centers.',
  },
  {
    amount: 250,
    title: 'Emergency Medical & Vaccine Box',
    impact: 'Equips a mobile field clinic with diagnostic test strips, antibiotics, and pediatric immunizations.',
  },
  {
    amount: 500,
    title: 'Solar Water Pump Installation Share',
    impact: 'Funds durable hardware components for deep underground borehole pumping systems.',
  },
];
