
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { cn } from "@/lib/utils";
import { Coffee, Utensils, Home, Music, Calendar, Users, Palette } from "lucide-react";

interface Tradition {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  content: string[];
}

const traditions: Tradition[] = [
  {
    id: "coffee-ceremony",
    icon: <Coffee className="w-6 h-6" />,
    title: "Coffee Ceremony",
    description: "A ritual of hospitality that celebrates Ethiopia's most famous crop",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "The Ethiopian coffee ceremony is a traditional practice that showcases the preparation and serving of coffee. As Ethiopia is the birthplace of coffee, this ceremony holds deep cultural significance.",
      "The ceremony begins with the washing of green coffee beans before they are roasted in a flat pan over hot coals. The aromatic smoke is often wafted around the room for participants to appreciate. After roasting, the beans are ground using a traditional wooden mortar and pestle.",
      "The ground coffee is then brewed in a special clay pot called a jebena. Once ready, the coffee is served in small cups without handles called cini, usually with sugar and sometimes salt or butter in certain regions. The ceremony is typically performed three times, with each serving named Abol, Tona, and Baraka.",
      "More than just a method of preparing coffee, the ceremony is a social ritual that brings people together. It's a time for conversation, community building, and showing hospitality to guests. In Jimma, where coffee cultivation is central to the local economy, the ceremony remains an essential part of daily life."
    ]
  },
  {
    id: "traditional-cuisine",
    icon: <Utensils className="w-6 h-6" />,
    title: "Traditional Cuisine",
    description: "Distinctive flavors and communal dining experiences that define Jimma's food culture",
    image: "https://images.unsplash.com/photo-1505471768190-275e2ad070d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "Jimma's traditional cuisine reflects the agricultural bounty of the region and centuries of cultural influences. The food culture emphasizes communal dining, with meals often served on a single large platter for sharing.",
      "Injera, a sourdough flatbread made from teff flour, serves as both the plate and utensil for most meals. Various stews (wats) made with meat, legumes, and vegetables are arranged on top of the injera. Diners tear pieces of injera to scoop up the stews, creating a tactile dining experience that reinforces community bonds.",
      "Specialty dishes in Jimma include genfo (a thick porridge served with spiced butter), kitfo (minced raw beef seasoned with herb butter and spices), and tibs (sautéed meat chunks). The region is also known for its honey production, with raw honey often incorporated into both savory and sweet preparations.",
      "The preparation of food is often a collective activity, especially for celebrations and festivals. Knowledge of traditional recipes and cooking techniques is passed down through generations, primarily from mothers to daughters, preserving culinary heritage alongside other cultural traditions."
    ]
  },
  {
    id: "architecture",
    icon: <Home className="w-6 h-6" />,
    title: "Traditional Architecture",
    description: "Unique building techniques adapted to local environments and cultural needs",
    image: "https://images.unsplash.com/photo-1526136522822-10030ed4b7ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "Jimma's traditional architecture demonstrates sophisticated knowledge of local materials and environmental adaptation. The region features several distinct housing styles, each associated with particular communities and historical periods.",
      "The tukul, a circular home with a conical thatched roof, is perhaps the most recognizable traditional dwelling. These structures are built using a wooden frame, with walls made of mud mixed with straw (cob construction). The design allows for excellent air circulation and temperature regulation in varying weather conditions.",
      "More elaborate structures, like the historic Jimma Palace (former residence of King Abba Jifar II), showcase the evolution of local architectural styles and the incorporation of influences from trade connections. These buildings feature multi-level construction, intricate woodwork, and spacious verandas.",
      "Traditional building practices emphasize sustainability and community involvement. Construction is often a communal activity, with neighbors assisting each other. This collective approach not only distributes labor but also strengthens social bonds and ensures the transmission of building knowledge across generations."
    ]
  },
  {
    id: "music-dance",
    icon: <Music className="w-6 h-6" />,
    title: "Music & Dance",
    description: "Rhythmic expressions that celebrate cultural identity and historical narratives",
    image: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "Music and dance are integral to cultural expression in Jimma, playing essential roles in celebrations, rituals, and everyday life. Traditional performances serve multiple functions: entertainment, storytelling, historical documentation, and spiritual practice.",
      "The region has distinctive musical instruments, including the masenqo (single-stringed bowed lute), kebero (drum), washint (flute), and krar (lyre). Musicians often inherit their role, with musical knowledge passed down through family lines. Songs preserve historical events, celebrate agricultural cycles, and express romantic sentiments.",
      "Traditional dances in Jimma are characterized by energetic movements, rhythmic shoulder shaking (eskista), and dramatic storytelling elements. Different dances mark specific occasions, from weddings and religious celebrations to coffee harvests and military victories. Many dances involve audience participation, blurring the line between performers and spectators.",
      "Contemporary artists in Jimma continue to draw inspiration from traditional forms while incorporating modern influences. Cultural centers and schools work to document and preserve traditional music and dance, recognizing their importance to cultural identity and historical memory."
    ]
  },
  {
    id: "festivals",
    icon: <Calendar className="w-6 h-6" />,
    title: "Festivals & Celebrations",
    description: "Colorful gatherings that mark seasonal changes and important cultural milestones",
    image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "Throughout the year, Jimma's calendar is marked by festivals and celebrations that honor seasonal changes, religious observances, and cultural milestones. These gatherings reinforce community bonds and provide opportunities to pass cultural knowledge to younger generations.",
      "Meskel, a festival celebrating the finding of the True Cross, features the building and burning of large bonfires (demera). In Jimma, local variations of this Orthodox Christian celebration include unique songs and processions that reflect regional identity.",
      "Irreecha, a thanksgiving ceremony from the Oromo tradition, celebrates the transition from the dark rainy season to the bright spring season. Participants gather at water bodies to give thanks for blessings received during the past year and to pray for prosperity in the coming season.",
      "Coffee harvest celebrations are particularly significant in Jimma, given the region's deep connection to coffee cultivation. These festivals feature special coffee ceremonies, music performances, and community feasts to mark successful harvests and reinforce the cultural importance of coffee."
    ]
  },
  {
    id: "social-structures",
    icon: <Users className="w-6 h-6" />,
    title: "Social Structures",
    description: "Traditional systems of governance and community organization",
    image: "https://images.unsplash.com/photo-1544098281-073ae36c6a82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "Jimma's traditional social structures reflect a sophisticated system of governance and community organization that evolved over centuries. The region was historically part of the Kingdom of Jimma (later Jimma Abba Jifar), one of the Gibe kingdoms with a complex administrative system.",
      "The gadaa system, an indigenous democratic socio-political system of the Oromo people, has historically provided governance structures in the region. This system organizes society into generational classes that rotate through different roles and responsibilities every eight years, creating a balanced approach to leadership and decision-making.",
      "At the community level, traditional councils of elders (jaarsa biyyaa) continue to play important roles in conflict resolution, land management, and maintaining social harmony. These councils operate alongside formal government structures, providing culturally resonant approaches to addressing community needs.",
      "Family structures in Jimma emphasize extended kinship networks, with clearly defined roles and responsibilities across generations. The formation of new households through marriage involves elaborate negotiations and ceremonies that formalize relationships not just between individuals but between extended families."
    ]
  },
  {
    id: "craftsmanship",
    icon: <Palette className="w-6 h-6" />,
    title: "Craftsmanship",
    description: "Artistic traditions that blend functionality with cultural expression",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    content: [
      "Jimma is home to diverse craft traditions that showcase technical skill and artistic expression. These crafts serve both practical purposes and cultural functions, with many items used in daily life also carrying symbolic significance.",
      "Basketry is particularly developed, with intricate designs woven from local grasses and plant fibers. The geometric patterns and color choices in these baskets often communicate cultural identity, with specific designs associated with particular communities. Functional items like storage containers and serving trays display exceptional craftsmanship.",
      "Pottery traditions include the production of specialized vessels like the jebena (coffee pot) and various cooking and storage containers. Potters, often women working within family traditions, use local clays and firing techniques passed down through generations.",
      "Leatherworking, woodcarving, and textile production are also significant crafts in the region. Many craftspeople work within traditional guilds or family units that preserve specific techniques and designs. While these crafts face challenges from mass-produced alternatives, efforts to document and support traditional craftsmanship help ensure their continuation."
    ]
  }
];

const Traditions = () => {
  const [activeTradition, setActiveTradition] = useState<string>(traditions[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const selectedTradition = traditions.find(t => t.id === activeTradition) || traditions[0];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Scroll content area to top when tradition changes
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [activeTradition]);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-jimma-brown/10 py-16 md:py-24">
          <div className="section-container text-center">
            <h1 className="heading-xl text-jimma-brown font-playfair mb-6">
              Jimma Traditions
            </h1>
            <p className="paragraph text-muted-foreground max-w-3xl mx-auto">
              Explore the rich cultural practices and living traditions that define Jimma's cultural identity and continue to shape community life.
            </p>
          </div>
        </section>
        
        {/* Traditions Content */}
        <section className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className={cn(
              "lg:sticky transition-all duration-300 bg-white",
              isScrolled ? "top-20" : "top-24"
            )}>
              <nav className="space-y-1">
                {traditions.map((tradition) => (
                  <button
                    key={tradition.id}
                    onClick={() => setActiveTradition(tradition.id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 text-left rounded-lg transition-colors",
                      activeTradition === tradition.id
                        ? "bg-jimma-brown/10 text-jimma-brown"
                        : "hover:bg-gray-100 text-gray-700"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      activeTradition === tradition.id
                        ? "bg-jimma-brown text-white"
                        : "bg-gray-100 text-gray-500"
                    )}>
                      {tradition.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{tradition.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{tradition.description}</p>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3" ref={contentRef}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-64 sm:h-80 relative overflow-hidden">
                  <img
                    src={selectedTradition.image}
                    alt={selectedTradition.title}
                    className="w-full h-full object-cover animate-scale-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <div className="inline-block p-2 rounded-lg bg-jimma-brown/90 text-white mb-3">
                      {selectedTradition.icon}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-playfair">
                      {selectedTradition.title}
                    </h2>
                    <p className="text-white/90 max-w-2xl">
                      {selectedTradition.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 space-y-6">
                  {selectedTradition.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Navigation between traditions */}
              <div className="mt-8 flex justify-between">
                {traditions.findIndex(t => t.id === activeTradition) > 0 ? (
                  <button
                    onClick={() => {
                      const currentIndex = traditions.findIndex(t => t.id === activeTradition);
                      if (currentIndex > 0) {
                        setActiveTradition(traditions[currentIndex - 1].id);
                      }
                    }}
                    className="flex items-center gap-2 text-jimma-brown hover:text-jimma-brown/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous Tradition
                  </button>
                ) : (
                  <div></div>
                )}
                
                {traditions.findIndex(t => t.id === activeTradition) < traditions.length - 1 ? (
                  <button
                    onClick={() => {
                      const currentIndex = traditions.findIndex(t => t.id === activeTradition);
                      if (currentIndex < traditions.length - 1) {
                        setActiveTradition(traditions[currentIndex + 1].id);
                      }
                    }}
                    className="flex items-center gap-2 text-jimma-brown hover:text-jimma-brown/80 transition-colors"
                  >
                    Next Tradition
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Traditions;
