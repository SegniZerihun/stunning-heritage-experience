
import React from "react";
import { cn } from "@/lib/utils";
import VideoBackground from "./VideoBackground";
import AnimatedText from "./AnimatedText";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  fallbackImage?: string;
  overlayOpacity?: number;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  videoSrc,
  fallbackImage,
  overlayOpacity,
  className,
}) => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={cn(
        "relative h-screen w-full flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <VideoBackground
        videoSrc={videoSrc}
        fallbackImage={fallbackImage}
        overlayOpacity={overlayOpacity}
      >
        <div className="h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedText
              text={title}
              tag="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair tracking-tight text-shadow-lg mb-6"
            />
            <AnimatedText
              text={subtitle}
              tag="p"
              className="text-lg md:text-xl text-white/90 text-shadow max-w-xl mx-auto"
              delay={0.5}
            />
            <button
              onClick={scrollToContent}
              className="mt-12 p-3 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              aria-label="Scroll to content"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </VideoBackground>
    </section>
  );
};

export default Hero;
