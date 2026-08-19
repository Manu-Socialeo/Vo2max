import { Activity } from "lucide-react";

export default function Loading() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <Activity className="h-8 w-8 animate-pulse text-[#0052FF]" />
        </div>
        <div className="mx-auto h-1.5 w-48 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-[#0052FF]" />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          VO2 Max Physiotherapy
        </p>
      </div>
    </section>
  );
}
