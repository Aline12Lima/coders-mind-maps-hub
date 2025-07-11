import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Users, Brain, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import React, { useState } from "react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  textColor?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    onClick={onClick}
    className="text-gray-50 font-medium hover:text-purple-600 transition-colors duration-300 cursor-pointer"
  >
    {children}
  </Link>
);

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <section id="hero" className="bg-img relative ">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="sticky top-0 z-50 bg-white/20 backdrop-blur-l ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center space-x-2">
              <Brain className="h-10 w-10 text-purple-50" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-white">
                DevMindMaps
              </h1>
            </a>

            <nav className=" text-2xl hidden md:flex items-center space-x-8 text-white">
              <NavLink to="categorias">Inicio</NavLink>
              <NavLink to="mapas">Mapas</NavLink>
              <NavLink to="contato">Contato</NavLink>
            </nav>

            <div className="md:hidden ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-white/95 shadow-lg">
            <div className="flex flex-col items-center space-y-4 p-4">
              <NavLink to="hero" onClick={handleLinkClick}>
                Inicio
              </NavLink>
              <NavLink to="mapas" onClick={handleLinkClick}>
                Mapas
              </NavLink>
              <NavLink to="contato" onClick={handleLinkClick}>
                Contato
              </NavLink>
            </div>
          </nav>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-80 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-200 bg-clip-text">
            Bem-vindo(a) ao projeto Mapas Mentais para Desenvolvedores!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
