import { Stethoscope } from "lucide-react";

export default function Loading() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#EEF1E4]">
          <Stethoscope className="h-8 w-8 animate-pulse text-primary" />
        </div>
        <div className="mx-auto h-1.5 w-48 overflow-hidden rounded-full bg-[#EEF1E4]">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-primary" />
        </div>
        <p className="mt-4 text-sm text-foreground/50">VO2 Max Physiotherapy</p>
      </div>
    </section>
  );
}
