
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import VideoCard from "@/components/VideoCard";
import CulturalFeature from "@/components/CulturalFeature";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { ChevronRight, Coffee, Home, Palette, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Function to initialize animation observers
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    animateOnScroll();
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <Hero
        title="Discover Jimma Heritage"
        subtitle="A visual journey through Ethiopia's coffee capital and cultural treasure"
        videoSrc="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
        fallbackImage="https://images.unsplash.com/photo-1482452608907-654846095738?q=80&w=2069"
        overlayOpacity={0.5}
      />
      
      <main id="content">
        {/* Introduction Section */}
        <section className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
              Ethiopia's Cultural Gem
            </span>
            <h2 className="heading-xl text-jimma-brown font-playfair mb-6">
              Jimma: A Cultural Treasury
            </h2>
            <p className="paragraph text-muted-foreground">
              Nestled in the southwestern highlands of Ethiopia, Jimma is renowned for its stunning landscapes, 
              rich cultural heritage, and as the birthplace of coffee. Journey with us as we explore the 
              traditions, craftsmanship, and stories that make Jimma a unique cultural destination.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <ArticleCard
                title="Coffee Ceremony"
                image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                description="Experience the traditional Ethiopian coffee ceremony, a ritual of hospitality and community that has been practiced for centuries."
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <ArticleCard
                title="Traditional Architecture"
                image="https://images.unsplash.com/photo-1526136522822-10030ed4b7ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                description="Discover the unique building styles and techniques that have stood the test of time in Jimma's historic structures."
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
              <ArticleCard
                title="Local Craftsmanship"
                image="https://images.unsplash.com/photo-1520358652769-cbbbe6f0a280?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                description="Explore the intricate crafts and artisanal works that showcase the skillful hands of Jimma's creative community."
              />
            </div>
          </div>
        </section>
        
        {/* Cultural Features Section */}
        <section className="bg-jimma-cream/30 py-16 md:py-24">
          <div className="section-container">
            <CulturalFeature
              title="The Birthplace of Coffee"
              description="Legend has it that coffee was first discovered in Ethiopia when a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree. Today, Jimma is one of Ethiopia's premier coffee-producing regions, known for its distinctive flavors and traditional cultivation methods. The coffee ceremony remains a central part of social and cultural life."
              imageSrc="https://images.unsplash.com/photo-1518057111178-44a106bad636?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            />
            
            <CulturalFeature
              title="Traditional Music & Dance"
              description="Music and dance are integral to Jimma's cultural identity. Traditional instruments like the masenqo (single-stringed bowed lute) and kebero (drum) accompany energetic dances that tell stories of history, love, and everyday life. These performances are common during celebrations, festivals, and community gatherings."
              imageSrc="https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              reverse={true}
            />
            
            <CulturalFeature
              title="Architectural Heritage"
              description="Jimma's traditional buildings reflect a sophisticated understanding of local materials and environmental adaptation. The region's historic structures, including the former palace of King Abba Jifar II, showcase unique architectural elements that have influenced building styles throughout Ethiopia's southwest."
              imageSrc="https://images.unsplash.com/photo-1526136522822-10030ed4b7ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            />
          </div>
        </section>
        
        {/* Video Gallery Section */}
        <section className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
              Visual Journey
            </span>
            <h2 className="heading-xl text-jimma-brown font-playfair mb-6">
              Experience Jimma Culture
            </h2>
            <p className="paragraph text-muted-foreground">
              Immerse yourself in the sights and sounds of Jimma's rich cultural heritage through our curated video collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <VideoCard
                videoSrc="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                downloadUrl="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                title="Traditional Coffee Ceremony"
                description="Experience Jimma's world-renowned coffee culture"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <VideoCard
                videoSrc="https://player.vimeo.com/external/308357788.hd.mp4?s=c66f0d66c9ef1a6414a52a6a4c13633daca51764&profile_id=175&oauth2_token_id=57447761"
                downloadUrl="https://player.vimeo.com/external/308357788.hd.mp4?s=c66f0d66c9ef1a6414a52a6a4c13633daca51764&profile_id=175&oauth2_token_id=57447761"
                title="Local Market"
                description="Explore the vibrant local markets of Jimma"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
              <VideoCard
                videoSrc="https://player.vimeo.com/external/292427467.hd.mp4?s=7e41c48c0a89693a9c15a53a25b21e94faff5086&profile_id=175&oauth2_token_id=57447761"
                downloadUrl="https://player.vimeo.com/external/292427467.hd.mp4?s=7e41c48c0a89693a9c15a53a25b21e94faff5086&profile_id=175&oauth2_token_id=57447761"
                title="Traditional Dance"
                description="Witness the beauty of Jimma's traditional dances"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
              <VideoCard
                videoSrc="https://player.vimeo.com/external/455237431.sd.mp4?s=bd17cb6d30f33f29ef4c1c96d4f59fc9592a95b3&profile_id=139&oauth2_token_id=57447761"
                downloadUrl="https://player.vimeo.com/external/455237431.sd.mp4?s=bd17cb6d30f33f29ef4c1c96d4f59fc9592a95b3&profile_id=139&oauth2_token_id=57447761"
                title="Nature"
                description="Discover the natural beauty of Jimma"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.5s" }}>
              <VideoCard
                videoSrc="https://player.vimeo.com/external/164021859.sd.mp4?s=e4a93656272cf4e06a3e1b2b1bb30f4fb00b4d65&profile_id=164&oauth2_token_id=57447761"
                downloadUrl="https://player.vimeo.com/external/164021859.sd.mp4?s=e4a93656272cf4e06a3e1b2b1bb30f4fb00b4d65&profile_id=164&oauth2_token_id=57447761"
                title="Architecture"
                description="Explore the unique architecture of Jimma"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.6s" }}>
              <VideoCard
                videoSrc="https://player.vimeo.com/external/328841442.hd.mp4?s=3bb6a861210c59bdfbd3342ed6b1f9db31243f21&profile_id=174&oauth2_token_id=57447761"
                downloadUrl="https://player.vimeo.com/external/328841442.hd.mp4?s=3bb6a861210c59bdfbd3342ed6b1f9db31243f21&profile_id=174&oauth2_token_id=57447761"
                title="Food Culture"
                description="Experience the rich culinary traditions of Jimma"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center group font-medium text-jimma-brown hover:text-jimma-brown/80 transition-colors"
            >
              View full gallery
              <ChevronRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-20 md:py-32 mt-20 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')" }}
        >
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-6">
              Explore The Rich Cultural Tapestry of Jimma
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Discover traditions, crafts, and stories that have been preserved through generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/traditions"
                className="btn-primary bg-jimma-gold text-jimma-brown hover:bg-jimma-gold/90 flex items-center gap-2"
              >
                <Coffee className="w-4 h-4" />
                Explore Traditions
              </Link>
              <Link
                to="/gallery"
                className="btn-primary bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 flex items-center gap-2"
              >
                <Palette className="w-4 h-4" />
                Browse Gallery
              </Link>
            </div>
          </div>
        </section>
        
        {/* Cultural Highlights */}
        <section className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
              Cultural Highlights
            </span>
            <h2 className="heading-xl text-jimma-brown font-playfair mb-6">
              Jimma's Living Traditions
            </h2>
            <p className="paragraph text-muted-foreground">
              Explore the diversity of cultural practices that continue to thrive in Jimma today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-jimma-brown" />
              </div>
              <h3 className="font-bold text-xl mb-2 font-playfair">Coffee Ceremony</h3>
              <p className="text-muted-foreground">A ritual that brings people together to share conversation and freshly roasted coffee.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-jimma-brown" />
              </div>
              <h3 className="font-bold text-xl mb-2 font-playfair">Traditional Housing</h3>
              <p className="text-muted-foreground">Distinctive architectural styles adapted to the local environment and cultural needs.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
              <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-jimma-brown" />
              </div>
              <h3 className="font-bold text-xl mb-2 font-playfair">Artisanal Crafts</h3>
              <p className="text-muted-foreground">Skilled craftspeople creating pottery, textiles, and basketry using traditional techniques.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
              <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-jimma-brown" />
              </div>
              <h3 className="font-bold text-xl mb-2 font-playfair">Music & Dance</h3>
              <p className="text-muted-foreground">Vibrant musical traditions and dances that celebrate cultural identity and community.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
