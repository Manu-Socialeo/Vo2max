export interface ClinicInfo {
  name: string;
  shortName: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  addressShort: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  timings: string;
  instagram: string;
  linkedin: string;
  facebook: string;
  website: string;
}

export const clinic: ClinicInfo = {
  name: "VO2 Max Physiotherapy Rehabilitation & Fitness Center",
  shortName: "VO2 Max",
  email: "pinakinphysio@yahoo.com",
  phone: "+919480166770",
  whatsapp: "919480166770",
  address:
    "H1 Srihari Medical Trust, opposite to Learner's PU College, Vijayanagar II Stage, Mysuru, Karnataka 570017",
  addressShort: "H1, Srihari Medical Trust, Vijayanagar II Stage",
  landmark: "Opposite to Learner's PU College",
  city: "Mysuru",
  state: "Karnataka",
  pincode: "570017",
  timings: "Mon–Sat 09:00 AM – 09:00 PM",
  instagram: "https://www.instagram.com/vo2max_prf/",
  linkedin:
    "https://www.linkedin.com/company/vo2-max-physiotherapy-rehabilitation-fitness",
  facebook: "https://www.facebook.com/Vo2MaxPhysiotherapyRehabilitationFitness/",
  website: "https://vo2maxclinic.vercel.app",
};

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experience: string;
  bio: string;
  specialties: string[];
  image: string;
  linkedin?: string;
}

export const doctors: Doctor[] = [
  {
    id: "pradeep",
    name: "Dr. Pradeep Kumar M N",
    title: "Co-Founder and Head Physiotherapist",
    qualifications: "MPT, MIAP",
    experience: "18+ years",
    bio: "Dr. Pradeep Kumar M N is the Co-Founder and Head Physiotherapist at VO2 Max Physiotherapy Rehabilitation & Fitness Center. With over 18 years of clinical experience, he specializes in sports rehabilitation, orthopedic physiotherapy, and post-surgical recovery. His patient-centric approach has helped thousands across Mysuru regain mobility and lead pain-free lives.",
    specialties: [
      "Sports Injury Rehabilitation",
      "Orthopedic Physiotherapy",
      "Post-Surgical Rehabilitation",
      "Manual Therapy",
      "Exercise Therapy",
    ],
    image: "/images/team/dr-pradeep.webp",
  },
  {
    id: "pinakin",
    name: "Dr. Pinakin Prakash Ayare",
    title: "Co-Founder",
    qualifications: "MPT, MIAP",
    experience: "17+ years",
    bio: "Dr. Pinakin Prakash Ayare is the Co-Founder of VO2 Max Physiotherapy Rehabilitation & Fitness Center. With over 17 years of experience, he integrates modern rehabilitation techniques with personalized fitness programs for comprehensive patient care.",
    specialties: [
      "Cardiac Rehabilitation",
      "Neurology Rehabilitation",
      "Geriatric Physiotherapy",
      "Fitness & Wellness Training",
      "Posture Correction",
    ],
    image: "/images/team/dr-pinakin.webp",
    linkedin: "https://in.linkedin.com/in/pinakin-ayare",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: "physiotherapy", title: "Physiotherapy", description: "Expert treatment for musculoskeletal conditions, joint pain, and movement disorders using evidence-based techniques.", icon: "Stethoscope" },
  { id: "rehabilitation", title: "Rehabilitation", description: "Comprehensive programs to restore function after injury, surgery, or illness.", icon: "HeartPulse" },
  { id: "sports-rehabilitation", title: "Sports Rehab", description: "Specialized injury treatment and rehab programs for athletes of all levels.", icon: "Zap" },
  { id: "cardiac-rehabilitation", title: "Cardiac Rehabilitation", description: "Structured programs to improve cardiovascular health under expert supervision.", icon: "Heart" },
  { id: "exercise-therapy", title: "Exercise Therapy", description: "Therapeutic exercise programs tailored to your condition and recovery goals.", icon: "Dumbbell" },
  { id: "weight-loss", title: "Weight Loss", description: "Science-based programs combining exercise therapy with lifestyle modification.", icon: "Scale" },
  { id: "fat-loss", title: "Fat Loss", description: "Targeted programs to reduce body fat while preserving muscle mass.", icon: "Flame" },
  { id: "athletic-training", title: "Athletic Training", description: "Performance enhancement training focusing on strength, agility, and endurance.", icon: "Trophy" },
  { id: "functional-training", title: "Functional Training", description: "Movement-based training improving daily function, balance, and core strength.", icon: "Activity" },
  { id: "posture-correction", title: "Posture Correction", description: "Corrective programs addressing postural imbalances and preventing long-term issues.", icon: "Accessibility" },
  { id: "neurology-rehabilitation", title: "Neuro Rehabilitation", description: "Specialized rehab for stroke, spinal cord injuries, Parkinson's, and more.", icon: "Brain" },
  { id: "post-surgical-rehabilitation", title: "Post-Surgery Rehab", description: "Structured protocols following orthopedic surgeries for optimal recovery.", icon: "Bandage" },
  { id: "child-obesity-support", title: "Child Obesity Support", description: "Age-appropriate fitness programs promoting healthy habits for children.", icon: "Baby" },
  { id: "electrotherapy", title: "Electrotherapy", description: "Pain relief and muscle stimulation using TENS, IFT, ultrasound, and other electrical modalities.", icon: "Zap" },
];

export const servicesSlugs = services.map(s => s.id);

export const serviceCategories = [
  { title: "Manual therapy", slug: "/services/manual-therapy" },
  { title: "Sports rehab", slug: "/services/sports-rehabilitation" },
  { title: "Post-surgery care", slug: "/services/post-surgical-rehabilitation" },
  { title: "Electrotherapy", slug: "/services/electrotherapy" },
  { title: "Exercise therapy", slug: "/services/exercise-therapy" },
];

export const faqs = [
  { question: "What types of conditions do you treat?", answer: "We treat a wide range including sports injuries, back and neck pain, joint disorders, post-surgical conditions, neurological disorders, cardiac rehabilitation needs, and weight management issues." },
  { question: "How do I book an appointment?", answer: "Call us at +919480166770, send a WhatsApp message, or visit our center at H1 Shrihari Medical Trust, opposite Learner's PU College, Vijayanagar II Stage, Mysuru." },
  { question: "Do I need a referral from my doctor?", answer: "A referral is not mandatory. You can directly book an appointment for an initial assessment." },
  { question: "What should I wear to my session?", answer: "Wear comfortable, loose-fitting clothing that allows easy movement. Sports attire is ideal." },
  { question: "How long does a typical session last?", answer: "Sessions typically last 45–60 minutes depending on your condition and treatment plan." },
];

export const testimonials = [
  { id: "1", name: "Venkatesh", text: "VO2 Max has been instrumental in my marathon journey. The team's expertise in sports rehabilitation helped me prepare for and complete the Boston Marathon. Truly world-class care in Mysuru!", rating: 5 },
  { id: "2", name: "Shreelatha", text: "After my knee surgery, I thought I would never walk normally again. Thanks to the dedicated team at VO2 Max, I'm back to my daily routine without any pain.", rating: 5 },
  { id: "3", name: "Jayant", text: "The physiotherapy treatment exceeded all expectations. My chronic back pain is finally gone after years of suffering. Professional, caring, and results-oriented.", rating: 5 },
  { id: "4", name: "Hemanth", text: "Best fitness and rehabilitation center in Mysuru. The trainers are knowledgeable and I've achieved my fitness goals faster than I ever thought possible.", rating: 5 },
  { id: "5", name: "Kalavathi", text: "The weight loss program at VO2 Max has been life-changing. The holistic approach combining exercise therapy and lifestyle guidance helped me lose weight and keep it off.", rating: 5 },
  { id: "6", name: "Shambhavi", text: "The posture correction program has made a tremendous difference. No more neck pain from working at my desk all day. Thank you, Dr. Pradeep!", rating: 5 },
];