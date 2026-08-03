import type { Metadata } from "next";
import BookAppointmentContent from "./book-appointment-content";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your physiotherapy appointment at VO2 Max in Mysuru. Choose your service, date, and time.",
};

export default function BookAppointmentPage() {
  return <BookAppointmentContent />;
}
