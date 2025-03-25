
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { MapPin, Mail, Phone, Clock, Coffee, MapIcon } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Function to initialize animation observers
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
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-jimma-brown/10 py-16 md:py-24">
          <div className="section-container text-center">
            <h1 className="heading-xl text-jimma-brown font-playfair mb-6">
              About Jimma Heritage
            </h1>
            <p className="paragraph text-muted-foreground max-w-3xl mx-auto">
              Our mission is to document, preserve, and celebrate the rich cultural heritage of Jimma, Ethiopia.
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="heading-lg text-jimma-brown font-playfair mb-6">
                Preserving Jimma's Cultural Legacy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Jimma Heritage Project began as a collaborative initiative between local cultural 
                  historians, community elders, and international researchers passionate about preserving 
                  the unique cultural heritage of the Jimma region.
                </p>
                <p>
                  Recognizing the rapid pace of cultural change and the risk of losing traditional knowledge, 
                  our team works to document, celebrate, and share the rich traditions of this historically 
                  significant region of Ethiopia.
                </p>
                <p>
                  Our work spans various aspects of cultural heritage, from the famous coffee ceremony and 
                  traditional architecture to music, dance, and oral histories that define Jimma's cultural 
                  identity.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-jimma-brown/10 flex items-center justify-center text-jimma-brown">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">Jimma, Oromia Region, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-jimma-brown/10 flex items-center justify-center text-jimma-brown">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Established</h3>
                    <p className="text-gray-600">2018</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-jimma-brown/10 flex items-center justify-center text-jimma-brown">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@jimmaheritage.com" className="text-gray-600 hover:text-jimma-brown transition-colors">
                      info@jimmaheritage.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-jimma-brown/10 flex items-center justify-center text-jimma-brown">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+251 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last animate-on-scroll">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Jimma landscape with coffee plants"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Traditional coffee ceremony"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 h-24 w-24 md:h-32 md:w-32 bg-jimma-gold rounded-full flex items-center justify-center shadow-lg">
                  <Coffee className="w-10 h-10 md:w-14 md:h-14 text-jimma-brown" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="bg-jimma-cream/30 py-16">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="heading-lg text-jimma-brown font-playfair mb-6">
                What We Do
              </h2>
              <p className="paragraph text-muted-foreground">
                Our work focuses on several key areas to ensure the preservation and celebration of Jimma's cultural heritage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-jimma-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Documentation</h3>
                <p className="text-muted-foreground">
                  We work with community elders and cultural bearers to record traditional practices, 
                  stories, music, and crafts to create a comprehensive digital archive.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-jimma-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Education</h3>
                <p className="text-muted-foreground">
                  We develop educational materials and programs to ensure younger generations 
                  learn about their cultural heritage and its significance.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
                <div className="w-12 h-12 rounded-xl bg-jimma-brown/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-jimma-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Cultural Exchange</h3>
                <p className="text-muted-foreground">
                  We facilitate cultural exchanges and events to share Jimma's heritage 
                  with wider audiences, fostering appreciation and understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="section-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="heading-lg text-jimma-brown font-playfair mb-6">
              Meet The People Behind Our Project
            </h2>
            <p className="paragraph text-muted-foreground">
              Our diverse team brings together expertise in cultural anthropology, history, digital media, and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517630800677-932d836ab680?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Abebe Bekele"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Abebe Bekele</h3>
                  <p className="text-jimma-brown mb-2">Project Director</p>
                  <p className="text-gray-600 text-sm">Cultural historian with 20 years of experience documenting Ethiopian traditions.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Tigist Alemayehu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Tigist Alemayehu</h3>
                  <p className="text-jimma-brown mb-2">Research Coordinator</p>
                  <p className="text-gray-600 text-sm">Anthropologist specializing in Ethiopian cultural practices and traditions.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Dawit Tesfaye"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Dawit Tesfaye</h3>
                  <p className="text-jimma-brown mb-2">Digital Archivist</p>
                  <p className="text-gray-600 text-sm">Expert in digital preservation methods and multimedia documentation.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Sara Mohammed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Sara Mohammed</h3>
                  <p className="text-jimma-brown mb-2">Community Liaison</p>
                  <p className="text-gray-600 text-sm">Facilitates engagement between the project and local communities in Jimma.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-jimma-cream/30 py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
                  Visit Jimma
                </span>
                <h2 className="heading-lg text-jimma-brown font-playfair mb-6">
                  Experience The Heritage In Person
                </h2>
                <p className="paragraph text-muted-foreground mb-8">
                  Located in southwestern Ethiopia, Jimma is accessible by road and air from Addis Ababa. 
                  The region offers visitors the chance to experience its rich cultural heritage firsthand.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-jimma-brown mt-1" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">Jimma is located approximately 350 km southwest of Addis Ababa in the Oromia Region of Ethiopia.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapIcon className="w-5 h-5 text-jimma-brown mt-1" />
                    <div>
                      <h3 className="font-medium">Getting There</h3>
                      <p className="text-gray-600">Ethiopian Airlines operates regular flights to Jimma from Addis Ababa. The city is also accessible by road, with bus services available from the capital.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-jimma-brown mt-1" />
                    <div>
                      <h3 className="font-medium">Cultural Sites</h3>
                      <p className="text-gray-600">Visitors can explore the former palace of King Abba Jifar II, coffee plantations, local markets, and participate in traditional coffee ceremonies.</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://goo.gl/maps/1J2Q3Y4R5T6X7Z8n9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-jimma-brown text-white px-4 py-2 rounded-lg hover:bg-jimma-brown/90 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
              
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
                  <img
                    src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Map of Jimma, Ethiopia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="section-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-jimma-brown/10 text-jimma-brown text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="heading-lg text-jimma-brown font-playfair mb-6">
              Contact Us
            </h2>
            <p className="paragraph text-muted-foreground">
              We welcome inquiries, collaborations, and support for our cultural heritage initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jimma-brown focus:border-jimma-brown"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jimma-brown focus:border-jimma-brown"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jimma-brown focus:border-jimma-brown"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jimma-brown focus:border-jimma-brown"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-jimma-brown text-white px-4 py-2 rounded-lg hover:bg-jimma-brown/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl p-6 shadow-md h-full">
                <h3 className="font-bold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">Jimma Heritage Center<br />Jimma, Oromia Region<br />Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:info@jimmaheritage.com" className="text-gray-600 hover:text-jimma-brown transition-colors">
                        info@jimmaheritage.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+251 123 456 789</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-xl mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown hover:bg-jimma-brown hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown hover:bg-jimma-brown hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown hover:bg-jimma-brown hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-jimma-brown/10 flex items-center justify-center text-jimma-brown hover:bg-jimma-brown hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
