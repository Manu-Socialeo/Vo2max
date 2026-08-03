import { clinic } from "@/lib/clinic";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = clinic.whatsapp;
  const message = encodeURIComponent(
    "Hi, I would like to book an appointment"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
      data-conversion="whatsapp_click"
      data-conversion-label="Floating WhatsApp Button"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}