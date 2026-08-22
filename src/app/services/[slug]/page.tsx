import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { services, servicesSlugs, clinic } from "@/lib/clinic";
import FaqAccordion from "@/components/FaqAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

const serviceContent: Record<
  string,
  {
    description: string;
    benefits: string[];
    audience: string;
    faqs: { question: string; answer: string }[];
  }
> = {
  "physiotherapy": {
    description:
      "Physiotherapy is a science-based healthcare profession that helps restore movement and function when someone is affected by injury, illness, or disability. At VO2 Max Physiotherapy in Mysuru, we use a combination of manual therapy, therapeutic exercises, and electrotherapy to treat a wide range of conditions. Our approach begins with a thorough assessment to identify the root cause of your pain or dysfunction. We then design a personalized treatment plan that addresses not just your symptoms but the underlying issues. Our physiotherapists are highly trained in evidence-based techniques including joint mobilization, soft tissue release, and neuromuscular reeducation. Whether you are dealing with chronic back pain, a sports injury, or post-surgical recovery, our team provides the expert care you need to regain your quality of life. We treat each patient as an individual, recognizing that every recovery journey is unique. Our center in Vijayanagar II Stage, Mysuru, is equipped with modern facilities to support your rehabilitation. We also educate you on self-management strategies to prevent future problems and maintain your progress long after your treatment sessions end.",
    benefits: [
      "Effective pain relief without medication or surgery",
      "Improved mobility and range of motion",
      "Personalized treatment plans tailored to your goals",
      "Non-invasive, drug-free approach to healing",
      "Long-term strategies for injury prevention",
    ],
    audience:
      "Physiotherapy is ideal for anyone experiencing pain, limited mobility, or recovering from an injury. Whether you are an athlete, a desk worker with posture issues, a senior dealing with arthritis, or someone preparing for or recovering from surgery, our physiotherapy programs can help you move better and feel better.",
    faqs: [
      { question: "How many physiotherapy sessions will I need?", answer: "The number of sessions depends on your condition. Acute issues often improve in 4–6 sessions, while chronic conditions may benefit from ongoing care over several weeks or months." },
      { question: "Is physiotherapy covered by insurance?", answer: "Many health insurance plans in India cover physiotherapy. Please check with your provider or contact our center for assistance with insurance claims." },
      { question: "What happens during the first appointment?", answer: "Your first visit includes a comprehensive assessment — we review your medical history, perform a physical examination, discuss your goals, and create a personalized treatment plan." },
      { question: "Can physiotherapy help with chronic conditions like arthritis?", answer: "Yes — physiotherapy is highly effective for managing arthritis through pain-relieving modalities, joint protection techniques, and exercises that maintain mobility and strength." },
    ],
  },
  "rehabilitation": {
    description:
      "Rehabilitation is a structured, goal-oriented process designed to help you regain maximum function and independence after an injury, surgery, or illness. At VO2 Max Physiotherapy in Mysuru, our rehabilitation programs are built on a foundation of evidence-based practice and personalized care. We understand that every patient's journey is different, which is why we invest time in understanding your specific condition, lifestyle, and recovery goals. Our team combines advanced therapeutic techniques with compassionate support to guide you through each phase of recovery. From the initial protective phase to the final return-to-activity phase, our programs are carefully progressed to ensure safe and effective outcomes. We work closely with your surgeon or physician when needed to coordinate care. Our rehabilitation center in Vijayanagar II Stage, Mysuru, offers a supportive environment where you can focus on your recovery. We also provide home exercise programs to complement your in-clinic sessions, ensuring you make consistent progress between visits.",
    benefits: [
      "Structured, phased approach to safe recovery",
      "Regain independence in daily activities",
      "Reduce risk of re-injury through proper technique",
      "Improve strength, flexibility, and coordination",
      "Expert guidance from experienced physiotherapists",
    ],
    audience:
      "Our rehabilitation programs are designed for individuals recovering from orthopedic surgeries (knee replacement, ACL reconstruction, rotator cuff repair), stroke survivors, people with spinal cord injuries, those recovering from serious illnesses, and anyone needing structured support to regain function after a significant health event.",
    faqs: [
      { question: "When should I start rehabilitation after surgery?", answer: "Early mobilization often begins within days of surgery, following your surgeon's protocol. Starting rehabilitation early can significantly improve outcomes." },
      { question: "How long does a rehabilitation program typically last?", answer: "Program duration varies widely — from 6 weeks for minor injuries to 6 months or more for major surgeries or neurological conditions." },
      { question: "Will I have exercises to do at home?", answer: "Yes — we provide detailed home exercise programs to complement your in-clinic sessions and accelerate your progress." },
      { question: "How do I know if rehabilitation is working?", answer: "We track objective measures such as range of motion, strength, and functional tests throughout your program to monitor progress and adjust your plan as needed." },
    ],
  },
  "sports-rehabilitation": {
    description:
      "Sports rehabilitation is a specialized branch of physiotherapy focused on the prevention, diagnosis, treatment, and rehabilitation of sports-related injuries. At VO2 Max Physiotherapy in Mysuru, we understand the unique demands that sport places on your body. Our sports rehab programs are designed to not only heal your injury but also address the underlying causes to prevent recurrence. We work with athletes from all disciplines — cricket, football, athletics, basketball, tennis, badminton, and more. Our team has extensive experience managing conditions ranging from acute ligament sprains and muscle tears to chronic overuse injuries like tendinopathy and stress fractures. We follow evidence-based return-to-play protocols that ensure you are truly ready to compete before clearing you for sport. Our facility in Vijayanagar II Stage, Mysuru, is equipped for sport-specific rehabilitation. We also provide guidance on injury prevention strategies, warm-up routines, and recovery techniques to keep you performing at your best.",
    benefits: [
      "Sport-specific rehabilitation for optimal return to play",
      "Address root causes to prevent re-injury",
      "Evidence-based return-to-play protocols",
      "Improved performance through movement optimization",
      "Expert care from experienced sports physiotherapists",
    ],
    audience:
      "Sports rehabilitation is for athletes of all levels — from professional competitors to weekend warriors and school sports participants. If you have a sports-related injury or want to prevent one, our specialized programs can help you recover and perform at your best.",
    faqs: [
      { question: "How soon can I return to sport after an injury?", answer: "Return timelines depend on your specific injury. We use objective return-to-play criteria rather than arbitrary timeframes to ensure you are truly ready." },
      { question: "What is sport-specific rehabilitation?", answer: "It involves exercises and drills that mimic the movements, intensity, and energy demands of your particular sport, preparing you for competition." },
      { question: "Do you treat chronic sports injuries?", answer: "Yes — we treat both acute and chronic conditions including tendinopathy, shin splints, runner's knee, and other overuse injuries." },
      { question: "Can sports rehab improve my performance?", answer: "Absolutely — many athletes use our programs to address movement inefficiencies, correct imbalances, and enhance performance even without an injury." },
    ],
  },
  "cardiac-rehabilitation": {
    description:
      "Cardiac rehabilitation is a medically supervised program designed to improve cardiovascular health in individuals with heart conditions. At VO2 Max Physiotherapy in Mysuru, our cardiac rehab program is led by experienced professionals who understand the complexities of heart disease management. We provide a safe, structured environment where you can exercise under supervision while learning about heart-healthy living. Our program combines carefully monitored aerobic exercise, resistance training, nutritional guidance, and stress management techniques. We work closely with your cardiologist to ensure your program aligns with your medical management plan. Whether you have had a heart attack, undergone bypass surgery or angioplasty, or are managing chronic heart conditions, our program is designed to meet you where you are and help you progress safely. Our center in Mysuru provides a welcoming atmosphere where you can focus on rebuilding your cardiovascular health with confidence.",
    benefits: [
      "Improve cardiovascular fitness and endurance",
      "Reduce risk of future cardiac events",
      "Learn heart-healthy lifestyle habits",
      "Supervised exercise in a safe environment",
      "Ongoing monitoring of vital signs during sessions",
    ],
    audience:
      "Cardiac rehabilitation is suitable for individuals with a history of heart attack, coronary artery bypass surgery, angioplasty or stenting, stable angina, heart failure, or those at high risk of cardiovascular disease. A referral from your cardiologist is recommended.",
    faqs: [
      { question: "Is cardiac rehabilitation safe?", answer: "Yes — all sessions are closely supervised with continuous monitoring of heart rate, blood pressure, and perceived exertion to ensure safety." },
      { question: "How long does a cardiac rehab program last?", answer: "Programs typically run 8–12 weeks with sessions 2–3 times per week, though duration is tailored to individual needs." },
      { question: "Do I need a referral from my cardiologist?", answer: "A referral is recommended. We coordinate with your cardiologist to ensure your program complements your medical care." },
      { question: "Can I join if I have other health conditions like diabetes?", answer: "Yes — our program is designed to accommodate multiple health conditions, and we work with your healthcare team to ensure comprehensive care." },
    ],
  },
  "exercise-therapy": {
    description:
      "Exercise therapy is a structured, evidence-based approach using prescribed physical activity to treat injuries, manage chronic conditions, and improve physical function. Unlike general fitness training, exercise therapy involves specific movements and progressions designed to address identified impairments. At VO2 Max Physiotherapy in Mysuru, our exercise therapy programs are grounded in biomechanics and exercise physiology. We prescribe exercises that target your specific needs — whether that is restoring range of motion after surgery, building strength around an unstable joint, or improving balance to prevent falls. Each program is carefully progressed as you improve, ensuring continued challenge without compromising safety. Our therapists provide hands-on guidance and feedback to ensure you perform exercises correctly. We also teach you to recognize and respond to your body's signals, empowering you to take an active role in your recovery. Our center in Mysuru offers a well-equipped space for therapeutic exercise under expert supervision.",
    benefits: [
      "Targeted exercises for your specific condition",
      "Progressive programming for continuous improvement",
      "Improved strength, flexibility, and coordination",
      "Reduced pain and better joint function",
      "Empowerment through self-management skills",
    ],
    audience:
      "Exercise therapy benefits anyone with musculoskeletal conditions like back pain, knee osteoarthritis, shoulder problems, or neck pain. It is also effective for chronic disease management including diabetes, obesity, and heart disease, as well as for general physical conditioning.",
    faqs: [
      { question: "How is exercise therapy different from regular exercise?", answer: "Exercise therapy is specifically prescribed based on your condition and recovery stage, with targeted progressions that a general workout program does not provide." },
      { question: "Will I get a home exercise program?", answer: "Yes — we provide detailed home programs to complement your in-clinic sessions and maximize your progress." },
      { question: "How soon will I see results?", answer: "Many patients notice improvements within 2–4 weeks of consistent participation, though individual results vary based on condition and adherence." },
      { question: "Is exercise therapy painful?", answer: "Therapeutic exercises should not cause sharp pain. Some muscle soreness is normal as your body adapts, but we adjust the program to keep you comfortable." },
    ],
  },
  "weight-loss": {
    description:
      "Weight loss is a journey that requires the right combination of exercise, nutrition, and lifestyle modification. At VO2 Max Physiotherapy in Mysuru, we offer science-based weight loss programs that produce sustainable results. Our approach goes beyond counting calories — we address the factors that contribute to weight gain including metabolic health, physical activity levels, eating behaviors, and stress. Our program begins with a comprehensive assessment including body composition analysis and metabolic rate evaluation. We then design a personalized plan combining exercise prescription, nutritional guidance, and behavioral strategies. Our physiotherapists understand how to design exercise programs that are effective for weight loss while being safe for individuals with joint concerns or other medical conditions. We provide ongoing support and accountability to help you stay on track. Our center in Vijayanagar II Stage, Mysuru, offers a supportive community where you can work toward your goals with expert guidance.",
    benefits: [
      "Sustainable weight loss through evidence-based methods",
      "Personalized exercise and nutrition plans",
      "Improved metabolic health and energy levels",
      "Ongoing support and accountability",
      "Expert guidance from qualified physiotherapists",
    ],
    audience:
      "Our weight loss program is for anyone struggling with excess weight who wants a structured, science-based approach. It is particularly suitable for individuals who have tried fad diets or generic programs without lasting success, and those who need exercise guidance that accommodates joint pain or medical conditions.",
    faqs: [
      { question: "How much weight can I expect to lose?", answer: "Healthy, sustainable weight loss is 0.5–1 kg per week. Our focus is on long-term results rather than rapid weight loss." },
      { question: "Do I need to follow a specific diet?", answer: "We provide nutritional guidance and practical recommendations rather than rigid meal plans. We help you make sustainable changes to your eating habits." },
      { question: "Can I join if I have knee or back pain?", answer: "Absolutely — our physiotherapists design low-impact programs that work around your limitations while still being effective for weight loss." },
      { question: "How often should I attend sessions?", answer: "We recommend 2–3 supervised sessions per week, combined with our home program recommendations for optimal results." },
    ],
  },
  "fat-loss": {
    description:
      "Fat loss is distinct from weight loss — it focuses specifically on reducing body fat percentage while preserving or building lean muscle mass. At VO2 Max Physiotherapy in Mysuru, our fat loss programs use the latest exercise science to help you achieve a leaner, healthier body composition. We understand that effective fat loss requires a comprehensive approach combining strategic exercise, proper nutrition, and recovery optimization. Our program begins with a detailed body composition analysis to establish your baseline and track progress accurately. We then design a program combining high-intensity interval training, resistance training, and metabolic conditioning to maximize fat burning while preserving muscle. Our team provides guidance on nutrition strategies that support fat loss without extreme deprivation. We also address factors like sleep and stress management that significantly impact metabolic health. Our Mysuru center provides the ideal environment for your fat loss journey.",
    benefits: [
      "Reduce body fat while preserving lean muscle",
      "Boost metabolism through strategic exercise",
      "Improved body composition and shape",
      "Better metabolic and cardiovascular health",
      "Sustainable, evidence-based approach",
    ],
    audience:
      "Our fat loss program is ideal for individuals who want to reduce body fat percentage, improve muscle definition, and enhance metabolic health. It is suitable for anyone who has struggled with general weight loss programs and wants a more targeted, science-based approach.",
    faqs: [
      { question: "How is fat loss different from weight loss?", answer: "Fat loss targets body fat specifically. General weight loss can include muscle and water loss. Our approach preserves muscle while reducing fat." },
      { question: "Can I target fat loss from specific areas?", answer: "Spot reduction is a myth — fat loss occurs throughout the body. However, as overall body fat reduces, you will see changes in all areas." },
      { question: "What types of exercise are most effective?", answer: "A combination of resistance training and high-intensity interval training (HIIT) is most effective for fat loss." },
      { question: "How long until I see results?", answer: "Many people notice changes in body composition within 4–6 weeks of consistent training and nutrition adherence." },
    ],
  },
  "athletic-training": {
    description:
      "Athletic training is a specialized discipline focused on developing the physical qualities required for sport performance. At VO2 Max Physiotherapy in Mysuru, we help athletes of all levels enhance their strength, speed, agility, power, and endurance through structured, sport-specific programs. Our approach is grounded in exercise science and biomechanics. We begin with a comprehensive assessment of your current physical capabilities including strength testing, power measurement, speed and agility evaluation, and movement screening. Based on this assessment, we design a program targeting your specific performance goals while addressing any movement limitations or injury risk factors. Our training programs incorporate strength development, plyometrics, speed and agility drills, energy system conditioning, and mobility work. Whether you are preparing for competition season, recovering from a layoff, or looking to take your performance to the next level, our experienced team provides the guidance you need. Train at our facility in Mysuru and experience the difference that professional athletic training makes.",
    benefits: [
      "Sport-specific performance enhancement",
      "Improved strength, speed, power, and agility",
      "Reduced injury risk through proper conditioning",
      "Periodized programs for peak performance timing",
      "Expert coaching from qualified professionals",
    ],
    audience:
      "Athletic training is for competitive athletes in team or individual sports, school and college sports participants, recreational athletes looking to improve, and individuals training for fitness events like marathons, triathlons, or obstacle course races.",
    faqs: [
      { question: "Do I need to be a professional athlete?", answer: "Not at all — our programs cater to athletes of all levels from beginners to professionals." },
      { question: "How is athletic training different from personal training?", answer: "Athletic training is sport-specific and emphasizes qualities like power, agility, and sport-specific movement patterns rather than general fitness." },
      { question: "How often should I train?", answer: "Most athletes train 3–5 times per week depending on their sport season and performance goals." },
      { question: "Will this help prevent injuries?", answer: "Yes — addressing movement quality, muscle balance, and conditioning significantly reduces injury risk." },
    ],
  },
  "functional-training": {
    description:
      "Functional training focuses on exercises that improve your ability to perform daily activities with ease and efficiency. Unlike traditional gym exercises that isolate individual muscles, functional training emphasizes integrated movement patterns involving multiple joints and muscle groups working together. At VO2 Max Physiotherapy in Mysuru, we use functional training to help patients move better, reduce pain, and improve quality of life. Our programs incorporate exercises that mirror real-world movements — squatting, lunging, pushing, pulling, twisting, and walking. We progress from basic movement patterns to more complex combinations, always prioritizing movement quality over load. Functional training is particularly valuable for older adults looking to maintain independence, individuals recovering from injuries, and anyone wanting to move with greater ease and confidence. Our center in Vijayanagar II Stage, Mysuru, offers a functional training environment designed to prepare you for the movements that matter most in your daily life.",
    benefits: [
      "Improved performance in daily activities",
      "Better balance, stability, and coordination",
      "Reduced risk of falls and injuries",
      "Enhanced core strength and posture",
      "Movements that transfer to real-world function",
    ],
    audience:
      "Functional training benefits everyone — from older adults wanting to maintain independence and reduce fall risk, to athletes wanting to improve movement quality, to office workers dealing with postural issues. It is especially valuable for those returning from injury.",
    faqs: [
      { question: "Is functional training suitable for beginners?", answer: "Yes — all exercises can be modified to suit your current fitness level and ability." },
      { question: "What equipment do you use?", answer: "We use bodyweight exercises, resistance bands, kettlebells, medicine balls, stability balls, and other functional training equipment." },
      { question: "Can functional training help with back pain?", answer: "Yes — improving core stability and movement patterns is highly effective for managing and preventing back pain." },
      { question: "How is this different from traditional weight training?", answer: "Functional training emphasizes movement quality and coordination across multiple joints, while traditional training often isolates individual muscles." },
    ],
  },
  "posture-correction": {
    description:
      "Posture correction is a systematic approach to identifying and addressing postural imbalances that contribute to pain, dysfunction, and long-term joint degeneration. At VO2 Max Physiotherapy in Mysuru, our posture correction programs are based on a detailed understanding of how modern lifestyles — prolonged sitting, smartphone use, and repetitive work — affect your body's alignment. We begin with a comprehensive postural assessment that evaluates your standing and sitting posture, movement patterns, and muscle imbalances. Common issues we address include forward head posture, rounded shoulders, upper and lower cross syndromes, and pelvic imbalances. Our correction programs combine stretching shortened, overactive muscles with strengthening elongated, weak muscles, along with movement reeducation to establish new, healthier postural habits. We also provide ergonomic advice for your workspace and daily activities. Our Mysuru clinic offers the expert guidance you need to transform your posture and eliminate pain caused by poor alignment.",
    benefits: [
      "Reduce or eliminate chronic neck, shoulder, and back pain",
      "Improve breathing and circulation",
      "Enhanced appearance and confidence",
      "Prevent long-term joint degeneration",
      "Better performance in daily activities and sport",
    ],
    audience:
      "Posture correction is for anyone who spends long hours at a desk, uses smartphones extensively, experiences chronic neck or back pain, or has noticed their posture deteriorating. It is also valuable for athletes looking to optimize movement efficiency and prevent injuries.",
    faqs: [
      { question: "How long does posture correction take?", answer: "With consistent effort, noticeable improvements typically occur within 4–8 weeks. However, establishing lasting habits takes ongoing practice." },
      { question: "Can posture be corrected at any age?", answer: "Yes — while it is easier to correct in younger individuals, meaningful improvement is possible at any age with consistent effort." },
      { question: "Do I need to continue exercises indefinitely?", answer: "Once good posture becomes a habit, maintenance exercises are minimal. We teach you strategies to integrate good posture into your daily life." },
      { question: "Will posture correction help my headaches?", answer: "Many tension headaches and cervicogenic headaches are caused by poor posture — correcting it often provides significant relief." },
    ],
  },
  "neurology-rehabilitation": {
    description:
      "Neurological rehabilitation is a specialized form of therapy for individuals with conditions affecting the brain, spinal cord, and peripheral nerves. At VO2 Max Physiotherapy in Mysuru, we provide compassionate, expert care for patients facing neurological challenges. Our team understands the complex nature of neurological conditions and the profound impact they have on patients and their families. We work with individuals recovering from stroke, living with Parkinson's disease, managing multiple sclerosis, and adapting to spinal cord injuries. Our approach combines motor retraining, balance and coordination exercises, strength training, and functional task practice to maximize independence and quality of life. We involve family members and caregivers in the rehabilitation process, providing education and training to support recovery at home. Our center in Mysuru offers a supportive, accessible environment where neurological patients can work toward their goals with dignity and hope.",
    benefits: [
      "Improved motor function and movement control",
      "Better balance and reduced fall risk",
      "Increased independence in daily activities",
      "Enhanced quality of life and well-being",
      "Family education and caregiver support",
    ],
    audience:
      "Neurological rehabilitation is for individuals affected by stroke, spinal cord injury, Parkinson's disease, multiple sclerosis, peripheral neuropathy, balance disorders, post-neurosurgery recovery, and other conditions affecting the nervous system.",
    faqs: [
      { question: "How soon after a stroke should rehab begin?", answer: "Early rehabilitation — as soon as the patient is medically stable — produces the best outcomes. Even delayed rehabilitation can be beneficial." },
      { question: "Is improvement possible for long-standing conditions?", answer: "Yes — the brain remains capable of adaptation and learning throughout life. Improvement is possible even years after a neurological event." },
      { question: "Do you involve family in the process?", answer: "Absolutely — family involvement is crucial. We train caregivers in supporting exercises, safe transfers, and creating a supportive home environment." },
      { question: "What is the main goal of neuro rehabilitation?", answer: "The primary goal is maximizing function, independence, and quality of life, tailored to each patient's unique circumstances and goals." },
    ],
  },
  "post-surgical-rehabilitation": {
    description:
      "Post-surgical rehabilitation is a critical component of the recovery process following orthopedic surgery. The success of your surgery depends significantly on the quality and consistency of your rehabilitation afterward. At VO2 Max Physiotherapy in Mysuru, we provide structured, evidence-based rehab protocols designed to optimize your surgical outcome. We work in coordination with your surgeon to ensure our protocols align with their post-operative guidelines. Our phased approach progresses from pain management and protection of the surgical site through range of motion restoration, strength rebuilding, and finally return to full activity. Common surgeries we support include knee and hip replacement, ACL reconstruction, rotator cuff repair, spinal surgery, and fracture fixation. Our experienced therapists provide hands-on guidance, manual therapy, and exercise prescription throughout each phase of recovery. Rehabilitate with confidence at our center in Vijayanagar II Stage, Mysuru, where we are committed to helping you achieve the best possible surgical outcome.",
    benefits: [
      "Optimize surgical outcomes through structured rehab",
      "Safely restore range of motion and strength",
      "Reduce post-operative pain and swelling",
      "Prevent complications like scar tissue and stiffness",
      "Return to daily activities and sport sooner",
    ],
    audience:
      "Post-surgical rehabilitation is essential for anyone undergoing orthopedic surgery — including knee replacement, hip replacement, ACL reconstruction, rotator cuff repair, meniscus surgery, spinal surgery, fracture fixation, and other musculoskeletal surgeries.",
    faqs: [
      { question: "When can I start rehab after surgery?", answer: "Rehabilitation often begins within days of surgery, following your surgeon's protocol. Early, guided movement is important for optimal recovery." },
      { question: "Will rehabilitation be painful?", answer: "Some discomfort is expected, especially in early stages. We work within your tolerance and use pain management techniques to keep you comfortable." },
      { question: "How long does post-surgical rehab take?", answer: "Duration varies — from 6 weeks for minor procedures to 6 months or more for major reconstructions like ACL or joint replacement." },
      { question: "Can I just do exercises at home instead?", answer: "Home exercises are an important complement, but regular in-clinic sessions are essential for proper progression, manual therapy, and professional guidance." },
    ],
  },
  "child-obesity-support": {
    description:
      "Childhood obesity support programs address the growing challenge of excess weight in children through age-appropriate physical activity, nutritional guidance, and lifestyle modification. At VO2 Max Physiotherapy in Mysuru, we provide specialized programs designed to help children achieve healthy weight while building positive relationships with physical activity and healthy eating. Our approach is fundamentally different from adult weight loss programs — we focus on creating enjoyable experiences that children want to participate in, building confidence and competence in movement. Activities include games, sports skills, obstacle courses, and structured exercises — all designed to be fun and engaging. We involve parents throughout the process, providing guidance on nutrition, activity recommendations, and strategies for creating a supportive home environment. Our goal is not just weight management but establishing lifelong healthy habits. Our Mysuru center provides a safe, non-judgmental environment where children can thrive.",
    benefits: [
      "Healthy weight management through enjoyable activity",
      "Build confidence and positive body image",
      "Develop fundamental movement skills",
      "Establish lifelong healthy habits",
      "Family-centered approach with parental guidance",
    ],
    audience:
      "Our child obesity support program is designed for children aged 6–16 who are above a healthy weight and would benefit from structured physical activity and lifestyle guidance. We work closely with families to create sustainable change.",
    faqs: [
      { question: "At what age can children join?", answer: "Our program is designed for children aged 6–16 years, with activities tailored to each age group." },
      { question: "Is medical clearance required?", answer: "We recommend consulting your pediatrician before starting the program, though it is not mandatory." },
      { question: "How are parents involved?", answer: "Parents receive nutritional guidance, activity recommendations, and strategies to support healthy habits at home. We believe family involvement is essential." },
      { question: "What types of activities are included?", answer: "Games, sports, obstacle courses, dance, and structured exercises — all designed to be engaging, fun, and developmentally appropriate." },
    ],
  },
  "electrotherapy": {
    description:
      "Electrotherapy is a specialized physiotherapy modality that uses electrical energy to relieve pain, stimulate muscles, and accelerate tissue healing. At VO2 Max Physiotherapy in Mysuru, we integrate electrotherapy into our treatment plans to provide effective, drug-free pain relief and muscle rehabilitation. Our clinic in Vijayanagar II Stage is equipped with modern electrotherapy devices including TENS machines, IFT units, ultrasound therapy equipment, and EMS systems. Electrotherapy works by delivering controlled electrical impulses to targeted areas of the body, which can block pain signals, reduce inflammation, improve blood circulation, and promote the natural healing process. Whether you are dealing with a sports injury, chronic back pain, post-surgical recovery, or a neurological condition, our experienced physiotherapists will assess your needs and select the most appropriate electrotherapy modality for your condition. We combine electrotherapy with manual therapy and exercise therapy to ensure comprehensive, long-lasting results for our patients in Mysuru.",
    benefits: [
      "Effective drug-free pain relief",
      "Reduced inflammation and swelling",
      "Improved blood circulation to injured tissues",
      "Restored muscle function and strength",
      "Accelerated tissue healing and recovery",
    ],
    audience:
      "Electrotherapy is suitable for patients experiencing acute or chronic pain, those recovering from injuries or surgeries, individuals with muscle weakness or atrophy, and anyone seeking a non-invasive, drug-free approach to pain management and rehabilitation. It is particularly beneficial for patients with back pain, arthritis, sports injuries, and post-surgical conditions.",
    faqs: [
      { question: "Is electrotherapy safe?", answer: "Yes — electrotherapy is a well-established, safe treatment when administered by trained professionals. We carefully adjust settings to ensure your comfort and safety throughout each session." },
      { question: "How many sessions will I need?", answer: "The number of sessions depends on your condition. Acute injuries may respond within 4–6 sessions, while chronic conditions may require ongoing treatment over several weeks." },
      { question: "Does electrotherapy hurt?", answer: "Most patients feel a gentle tingling or pulsing sensation, but it should not be painful. If you experience any discomfort, we immediately adjust the settings." },
      { question: "Can electrotherapy be combined with other treatments?", answer: "Absolutely — electrotherapy works best as part of a comprehensive treatment plan that may include manual therapy, exercise therapy, and patient education." },
    ],
  },
};

export async function generateStaticParams() {
  return servicesSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  const title = `${service.title} | VO2 Max Physiotherapy Mysuru`;
  return {
    title,
    description: serviceContent[slug]?.description.slice(0, 160) ?? service.description,
    alternates: { canonical: `https://vo2max.in/services/${slug}` },
    openGraph: { title, description: service.description, url: `https://vo2max.in/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const content = serviceContent[slug];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vo2max.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://vo2max.in/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://vo2max.in/services/${slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: `${service.title} at VO2 Max Physiotherapy`,
    description: content?.description ?? service.description,
    url: `https://vo2max.in/services/${slug}`,
    provider: {
      "@type": "MedicalClinic",
      name: "VO2 Max Physiotherapy Rehabilitation & Fitness Center",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mysuru",
        addressRegion: "Karnataka",
      },
    },
  };

  return (
    <div className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-blue-200">
            Specialized Clinical Protocol
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{service.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{service.description}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="section-subtitle">Clinical Overview</span>
            <h2 className="mt-4 text-slate-900">About this treatment</h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{content?.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="section-subtitle">Treatment Outcomes</span>
            <h2 className="mt-4 text-slate-900">Key Clinical Benefits</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {content?.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0052FF]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="section-subtitle">Target Candidates</span>
            <h2 className="mt-4 text-slate-900">Who is this protocol for?</h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{content?.audience}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="section-subtitle">FAQ</span>
            <h2 className="mt-4 text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={content?.faqs ?? []} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 via-slate-900 to-slate-950" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">Ready to Begin Your Recovery?</h2>
          <p className="mx-auto mt-4 max-w-xl text-xs text-slate-300 sm:text-sm">
            Book a clinical consultation with Dr. Pradeep Kumar &amp; the specialized team at VO2 Max Mysuru.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=Hi%20VO2%20Max,%20I'd%20like%20to%20consult%20regarding%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md hover:bg-emerald-500/25"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20"
            >
              <Phone className="h-4 w-4 text-[#00D2FF]" /> Call {clinic.phone}
            </a>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0052FF] to-[#0042D1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg"
            >
              Book Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
