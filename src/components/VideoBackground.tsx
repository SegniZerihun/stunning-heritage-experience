
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackImage?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc = "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761",
  fallbackImage = "https://images.unsplash.com/photo-1553710349-aa9979c0ed57?q=80&w=2069",
  overlayOpacity = 0.4,
  children,
  className,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Fallback image that shows before video loads */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000",
          isVideoLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{ backgroundImage: `url(${fallbackImage})` }}
      />

      {/* Video background */}
      {!isMobile && (
        <div className="video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoaded}
            className={cn(
              "transition-opacity duration-1000",
              isVideoLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Mobile background image */}
      {isMobile && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default VideoBackground;
