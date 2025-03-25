
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Download, Play, Pause } from "lucide-react";

interface VideoCardProps {
  videoSrc: string;
  downloadUrl?: string;
  title: string;
  description: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  downloadUrl,
  title,
  description,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const togglePlay = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: "0.1s" }}
    >
      <div className="relative aspect-video bg-black overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          muted
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transform transition-all duration-300 hover:bg-white/30"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>

        {/* Download button */}
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-5 h-5" />
          </a>
        )}

        {/* Title overlay */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform transition-all duration-500",
            isHovered ? "translate-y-0" : "translate-y-8 opacity-80"
          )}
        >
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p
            className={cn(
              "text-white/90 text-sm transform transition-all duration-500",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
