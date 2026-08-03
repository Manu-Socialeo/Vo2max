import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Home, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-24">
      <div className="mx-auto max-w-[500px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[20px] bg-[#EEF1E4]">
          <Stethoscope className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-[120px] font-medium leading-none tracking-[-0.04em] text-primary">
          404
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          Oops! This page seems to have wandered off.
        </p>
        <p className="mt-2 text-sm text-foreground/50">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/services" className="btn-outline inline-flex">
            Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
