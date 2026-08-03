"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  end,
  values,
  suffix = "",
  prefix = "",
}: {
  end?: number;
  values?: number[];
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const cyclingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          if (values && values.length > 0) {
            const duration = 2000;
            let valueIndex = 0;

            const animateToTarget = (target: number) => {
              const startTime = performance.now();
              const startValue = count;

              const animate = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(startValue + (target - startValue) * eased));
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  valueIndex++;
                  if (valueIndex >= values.length) valueIndex = 0;
                  cyclingRef.current = true;
                  setTimeout(() => {
                    animateToTarget(values[valueIndex]);
                  }, 3000);
                }
              };

              requestAnimationFrame(animate);
            };

            animateToTarget(values[0]);
          } else {
            const duration = 2000;
            const startTime = performance.now();

            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setCount(Math.floor(progress * (end ?? 0)));
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, values]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
