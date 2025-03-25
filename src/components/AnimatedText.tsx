
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  tag = "h1",
  delay = 0,
  duration = 0.05,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLElement>(null);
  const letters = text.split("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [once]);

  const Tag = tag;

  return (
    <Tag ref={textRef} className={cn("overflow-hidden", className)}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-transform duration-700 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
          style={{
            transitionDelay: `${delay + index * duration}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
