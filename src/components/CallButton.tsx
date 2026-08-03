import { Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";

export default function CallButton() {
  return (
    <a
      href={`tel:${clinic.phone}`}
      className="call-float flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      aria-label="Call us"
      data-conversion="call_click"
      data-conversion-label="Floating Call Button"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}