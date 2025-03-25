
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CulturalFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  className?: string;
}

const CulturalFeature: React.FC<CulturalFeatureProps> = ({
  title,
  description,
  imageSrc,
  reverse = false,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-24",
        className
      )}
    >
      <div
        className={cn(
          "transform transition-all duration-700 delay-200",
          isVisible 
            ? "translate-x-0 opacity-100" 
            : reverse ? "translate-x-16 opacity-0" : "-translate-x-16 opacity-0",
          { "md:order-2": reverse }
        )}
      >
        <div className="max-w-md">
          <h2 className="heading-lg text-jimma-brown mb-4 font-playfair">{title}</h2>
          <p className="paragraph text-muted-foreground">{description}</p>
        </div>
      </div>

      <div
        className={cn(
          "transform transition-all duration-700",
          isVisible 
            ? "translate-x-0 opacity-100" 
            : reverse ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0",
          { "md:order-1": reverse }
        )}
      >
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "w-full transform transition-all duration-1000",
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CulturalFeature;
