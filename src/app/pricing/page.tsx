import type { Metadata } from "next";
import PricingContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Transparent pricing for physiotherapy, rehabilitation, and fitness programs at VO2 Max in Mysuru.",
};

export default function PricingPage() {
  return <PricingContent />;
}
