
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Instagram, Twitter, Facebook, Mail, Map } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jimma-coffee text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair mb-3">
              Jimma<span className="text-jimma-gold">Heritage</span>
            </h3>
            <p className="text-white/80">
              Exploring and preserving the rich cultural heritage of Jimma, Ethiopia.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/traditions"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Traditions
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Cultural Heritage</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#coffee"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Coffee Ceremony
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Traditional Architecture
                </a>
              </li>
              <li>
                <a
                  href="#crafts"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Local Craftsmanship
                </a>
              </li>
              <li>
                <a
                  href="#festivals"
                  className="text-white/70 hover:text-white hover-underline transition-colors"
                >
                  Festival Celebrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Map className="w-5 h-5 text-jimma-gold mt-0.5" />
                <span className="text-white/80">Jimma, Oromia, Ethiopia</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-jimma-gold mt-0.5" />
                <a href="mailto:info@jimmaheritage.com" className="text-white/80 hover:text-white hover-underline transition-colors">
                  info@jimmaheritage.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {currentYear} Jimma Heritage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
