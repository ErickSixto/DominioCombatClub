import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const animateFrom = {
  up: { hidden: "opacity-0 translate-y-8", show: "opacity-100 translate-y-0" },
  left: { hidden: "opacity-0 -translate-x-12 translate-y-0", show: "opacity-100 translate-x-0 translate-y-0" },
  right: { hidden: "opacity-0 translate-x-12 translate-y-0", show: "opacity-100 translate-x-0 translate-y-0" },
};

export function AnimateIn({ children, className = "", delay = 0, as: Tag = "div", from = "up" }) {
  const [ref, inView] = useInView();
  const a = animateFrom[from] || animateFrom.up;
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? a.show : a.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
