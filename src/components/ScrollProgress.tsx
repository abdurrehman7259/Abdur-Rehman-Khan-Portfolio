"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-cyber-accent transition-all duration-100 ease-out shadow-[0_0_10px_#00f2ff]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
