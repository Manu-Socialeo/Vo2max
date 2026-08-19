import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Medical disclaimer for VO2 Max Physiotherapy Rehabilitation & Fitness Center, Mysuru. Important notices about our website content and services.",
};

const sections = [
  {
    id: "not-medical-advice",
    title: "Not Medical Advice",
    content: (
      <p>
        The information provided on this website is for general informational purposes only
        and does not constitute professional medical advice, diagnosis, or treatment. Always
        seek the advice of a qualified healthcare provider with any questions you may have
        regarding a medical condition or treatment. Never disregard professional medical advice
        or delay in seeking it because of something you have read on this website.
      </p>
    ),
  },
  {
    id: "emergency-warning",
    title: "Emergency Warning",
    content: (
      <p>
        If you are experiencing a medical emergency, call <strong>108</strong> (emergency
        services in India) or visit the nearest hospital immediately. Do not rely on information
        from this website or email communication for emergency medical situations. This website
        is not designed to facilitate medical emergencies.
      </p>
    ),
  },
  {
    id: "results-may-vary",
    title: "Results May Vary",
    content: (
      <p>
        Individual results from physiotherapy, rehabilitation, and fitness programs may vary.
        Outcomes depend on various factors including the nature and severity of your condition,
        adherence to treatment plans, overall health status, and other individual circumstances.
        Any testimonials or success stories on this website reflect the experiences of specific
        individuals and are not guarantees of similar results.
      </p>
    ),
  },
  {
    id: "no-doctor-patient",
    title: "No Doctor-Patient Relationship",
    content: (
      <p>
        Your use of this website, including submitting contact forms or sending emails, does
        not create a doctor-patient relationship between you and VO2 Max Physiotherapy
        Rehabilitation & Fitness Center or any of its practitioners. A formal relationship
        is established only after an in-person consultation and mutual agreement. Information
        submitted through this website is not confidential medical communication until a
        formal relationship exists.
      </p>
    ),
  },
  {
    id: "external-links",
    title: "External Links",
    content: (
      <p>
        This website may contain links to external websites for your convenience. We do not
        endorse, control, or assume responsibility for the content, privacy practices, or
        accuracy of information on third-party sites. Visiting external links from this website
        is at your own risk. We encourage you to review the terms and policies of any external
        site you visit.
      </p>
    ),
  },
];

export default function MedicalDisclaimerPage() {
  return (
    <div className="bg-white text-slate-800">
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Medical Disclaimer
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50/70">
        <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs sm:p-12">
            <p className="text-sm leading-relaxed text-slate-600">
              The information on this website is intended for general informational purposes only.
            </p>
            <div className="mt-8 space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2 className="mb-3 text-lg font-bold text-slate-900">{s.title}</h2>
                  <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
