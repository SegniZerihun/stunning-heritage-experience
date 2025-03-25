
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import ScrollProgress from "@/components/ScrollProgress";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Ethiopian coffee ceremony",
    category: "traditions",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Coffee beans roasting",
    category: "coffee",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1526136522822-10030ed4b7ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Traditional Ethiopian architecture",
    category: "architecture",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Ethiopian music performance",
    category: "culture",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Local man in traditional attire",
    category: "people",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1512237798647-84b57b22b517?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Ethiopian countryside",
    category: "landscapes",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1505471768190-275e2ad070d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Traditional Ethiopian food",
    category: "food",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Coffee plants",
    category: "coffee",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Ethiopian market",
    category: "culture",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Traditional basket weaving",
    category: "crafts",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1515542706413-8a3c81295ee5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Ethiopian coffee ceremony preparation",
    category: "traditions",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1551634979-2b11f8c218da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Ethiopian highlands",
    category: "landscapes",
  },
];

const galleryVideos = [
  {
    id: 1,
    videoSrc: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761",
    downloadUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761",
    title: "Traditional Coffee Ceremony",
    description: "Experience Jimma's world-renowned coffee culture",
    category: "traditions",
  },
  {
    id: 2,
    videoSrc: "https://player.vimeo.com/external/308357788.hd.mp4?s=c66f0d66c9ef1a6414a52a6a4c13633daca51764&profile_id=175&oauth2_token_id=57447761",
    downloadUrl: "https://player.vimeo.com/external/308357788.hd.mp4?s=c66f0d66c9ef1a6414a52a6a4c13633daca51764&profile_id=175&oauth2_token_id=57447761",
    title: "Local Market",
    description: "Explore the vibrant local markets of Jimma",
    category: "culture",
  },
  {
    id: 3,
    videoSrc: "https://player.vimeo.com/external/292427467.hd.mp4?s=7e41c48c0a89693a9c15a53a25b21e94faff5086&profile_id=175&oauth2_token_id=57447761",
    downloadUrl: "https://player.vimeo.com/external/292427467.hd.mp4?s=7e41c48c0a89693a9c15a53a25b21e94faff5086&profile_id=175&oauth2_token_id=57447761",
    title: "Traditional Dance",
    description: "Witness the beauty of Jimma's traditional dances",
    category: "culture",
  },
  {
    id: 4,
    videoSrc: "https://player.vimeo.com/external/455237431.sd.mp4?s=bd17cb6d30f33f29ef4c1c96d4f59fc9592a95b3&profile_id=139&oauth2_token_id=57447761",
    downloadUrl: "https://player.vimeo.com/external/455237431.sd.mp4?s=bd17cb6d30f33f29ef4c1c96d4f59fc9592a95b3&profile_id=139&oauth2_token_id=57447761",
    title: "Nature",
    description: "Discover the natural beauty of Jimma",
    category: "landscapes",
  },
  {
    id: 5,
    videoSrc: "https://player.vimeo.com/external/164021859.sd.mp4?s=e4a93656272cf4e06a3e1b2b1bb30f4fb00b4d65&profile_id=164&oauth2_token_id=57447761",
    downloadUrl: "https://player.vimeo.com/external/164021859.sd.mp4?s=e4a93656272cf4e06a3e1b2b1bb30f4fb00b4d65&profile_id=164&oauth2_token_id=57447761",
    title: "Architecture",
    description: "Explore the unique architecture of Jimma",
    category: "architecture",
  },
  {
    id: 6,
    videoSrc: "https://player.vimeo.com/external/328841442.hd.mp4?s=3bb6a861210c59bdfbd3342ed6b1f9db31243f21&profile_id=174&oauth2_token_id=57447761",
    downloadUrl: "https://player.vimeo.com/external/328841442.hd.mp4?s=3bb6a861210c59bdfbd3342ed6b1f9db31243f21&profile_id=174&oauth2_token_id=57447761",
    title: "Food Culture",
    description: "Experience the rich culinary traditions of Jimma",
    category: "food",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "traditions", name: "Traditions" },
  { id: "coffee", name: "Coffee" },
  { id: "culture", name: "Culture" },
  { id: "people", name: "People" },
  { id: "architecture", name: "Architecture" },
  { id: "landscapes", name: "Landscapes" },
  { id: "food", name: "Food" },
  { id: "crafts", name: "Crafts" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);
  const [activeTab, setActiveTab] = useState("photos");
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const filteredVideos = activeCategory === "all"
    ? galleryVideos
    : galleryVideos.filter(video => video.category === activeCategory);

  useEffect(() => {
    // Handle body scroll when lightbox is open
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-jimma-brown/10 py-16 md:py-24">
          <div className="section-container text-center">
            <h1 className="heading-xl text-jimma-brown font-playfair mb-6">
              Jimma Gallery
            </h1>
            <p className="paragraph text-muted-foreground max-w-3xl mx-auto">
              Explore the visual richness of Jimma's cultural heritage through our collection of photos and videos capturing traditions, landscapes, and everyday life.
            </p>
          </div>
        </section>
        
        {/* Gallery Navigation */}
        <section className="bg-white sticky top-16 z-20 border-b border-gray-200 shadow-sm">
          <div className="section-container py-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              {/* Gallery Tabs */}
              <div className="flex gap-4 font-medium">
                <button
                  onClick={() => setActiveTab("photos")}
                  className={cn(
                    "px-4 py-1 rounded-md transition-colors",
                    activeTab === "photos"
                      ? "bg-jimma-brown text-white"
                      : "bg-transparent text-jimma-brown hover:bg-jimma-brown/10"
                  )}
                >
                  Photos
                </button>
                <button
                  onClick={() => setActiveTab("videos")}
                  className={cn(
                    "px-4 py-1 rounded-md transition-colors",
                    activeTab === "videos"
                      ? "bg-jimma-brown text-white"
                      : "bg-transparent text-jimma-brown hover:bg-jimma-brown/10"
                  )}
                >
                  Videos
                </button>
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-3 py-1 text-sm rounded-full transition-colors",
                      activeCategory === category.id
                        ? "bg-jimma-brown/20 text-jimma-brown"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Content */}
        <section className="section-container py-12">
          {activeTab === "photos" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                >
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        imagesLoaded[image.id]
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-110"
                      )}
                      onLoad={() => handleImageLoad(image.id)}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  videoSrc={video.videoSrc}
                  downloadUrl={video.downloadUrl}
                  title={video.title}
                  description={video.description}
                  className="h-full"
                />
              ))}
            </div>
          )}
          
          {/* Empty state */}
          {((activeTab === "photos" && filteredImages.length === 0) ||
            (activeTab === "videos" && filteredVideos.length === 0)) && (
            <div className="text-center py-16">
              <p className="text-gray-500">No {activeTab} found in this category.</p>
            </div>
          )}
        </section>
      </main>
      
      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain animate-fade-in"
          />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
