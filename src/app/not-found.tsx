import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Home, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | VO2 Max Physiotherapy",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white py-24">
      <div className="mx-auto max-w-[500px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <Activity className="h-8 w-8 text-[#0052FF]" />
        </div>
        <h1 className="text-7xl font-bold tracking-tight text-[#0052FF]">
          404
        </h1>
        <p className="mt-4 text-lg font-bold text-slate-800">
          Page Not Found
        </p>
        <p className="mt-2 text-xs text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
