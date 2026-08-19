import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Appointment Policy",
  description:
    "Booking, cancellation, and appointment policies for VO2 Max Physiotherapy Rehabilitation & Fitness Center, Mysuru.",
};

const sections = [
  {
    id: "booking",
    title: "Booking",
    content: (
      <p>
        Appointments can be booked by phone, WhatsApp, email, or through our website contact
        form. We recommend booking at least 24 hours in advance to secure your preferred time
        slot. Walk-in appointments are subject to availability and may involve waiting time.
        New patients are requested to arrive 15 minutes early to complete the necessary
        paperwork and initial assessment forms.
      </p>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content: (
      <p>
        We require at least 24 hours&rsquo; notice for cancellations. Cancellations made less
        than 24 hours before the scheduled appointment may be subject to a cancellation fee of
        50% of the consultation charge. This policy allows us to offer the time slot to other
        patients in need of care. To cancel or reschedule, please call us at{" "}
        <a href={`tel:${clinic.phone}`} className="text-primary hover:underline">{clinic.phone}</a>{" "}
        or send a WhatsApp message.
      </p>
    ),
  },
  {
    id: "late-arrivals",
    title: "Late Arrivals",
    content: (
      <p>
        If you arrive late for your appointment, we will make every effort to accommodate you.
        However, please note that your session may be shortened to avoid delays for subsequent
        patients. If you are more than 15 minutes late without prior notice, we reserve the
        right to reschedule your appointment to another available time slot.
      </p>
    ),
  },
  {
    id: "no-show",
    title: "No-Show Policy",
    content: (
      <p>
        Failure to attend a scheduled appointment without prior cancellation is considered a
        no-show. Repeated no-shows may result in being charged the full consultation fee and
        may affect your ability to book future appointments. We understand that unforeseen
        circumstances can arise, so please communicate with us as early as possible if you
        are unable to attend.
      </p>
    ),
  },
  {
    id: "payment",
    title: "Payment",
    content: (
      <p>
        Payment for services is due at the time of consultation unless other arrangements have
        been made in advance. We accept cash, UPI (Google Pay, PhonePe, Paytm), and bank
        transfers. For ongoing treatment plans, we offer package rates and installment options.
        Please contact us for details on pricing and payment plans. Insurance claim assistance
        is available for applicable health insurance policies.
      </p>
    ),
  },
  {
    id: "rescheduling",
    title: "Rescheduling",
    content: (
      <p>
        We are happy to reschedule your appointment subject to availability. Please notify us
        at least 24 hours before the original appointment time to avoid any cancellation
        charges. We will do our best to accommodate your preferred alternative time slot.
        Multiple rescheduling requests for the same appointment may be subject to a small fee.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <div className="space-y-2">
        <p>
          For questions about our appointment policies or to book, cancel, or reschedule, please
          reach out to us:
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <a href={`tel:${clinic.phone}`} className="text-primary hover:underline">{clinic.phone}</a>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <a href={`mailto:${clinic.email}`} className="text-primary hover:underline">{clinic.email}</a>
        </p>
        <p className="text-sm text-foreground/60">
          Address: {clinic.addressShort}, {clinic.landmark}, {clinic.city}, {clinic.state}
        </p>
      </div>
    ),
  },
];

export default function AppointmentPolicyPage() {
  return (
    <div className="bg-white text-slate-800">
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Appointment Policy
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
              At VO2 Max Physiotherapy, we strive to provide timely, high-quality care to all
              our patients. Please review our appointment policies to help us serve you better.
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
