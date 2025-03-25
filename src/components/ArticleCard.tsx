
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  image: string;
  description: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  description,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl overflow-hidden shadow-md transform transition-all duration-500 card-hover",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className
      )}
      style={{ transitionDelay: "0.1s" }}
    >
      <div className="image-wrapper aspect-video">
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transform transition-all duration-500",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
          )}
        />
      </div>
      <div className="p-6">
        <h3 className="heading-md text-xl font-bold mb-2 text-jimma-brown">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
