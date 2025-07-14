import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Users, TrendingUp } from "lucide-react";
import { Link } from "react-scroll";

import A_Image from "/imagens/A.png";
import D_Image from "/imagens/D.png";
import G_Image from "/imagens/G.png";
import I_Image from "/imagens/I.png";
import O_Image from "/imagens/O.png";
import R_Image from "/imagens/R.png";
import T_Image from "/imagens/T.png";
import U_Image from "/imagens/U.png";

interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSection = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterSectionProps) => {
  const categoryColors: { [key: string]: string } = {
    Todos: "bg-gray-900 text-gray-800 hover:bg-gray-100",
    Frontend: "bg-blue-400 text-blue-800 hover:bg-blue-200",
    Backend: "bg-pink-400 text-pink-800 hover:bg-green-200",
    "Banco de Dados": "bg-green-400 text-green-800 hover:bg-purple-200",
    DevOps: "bg-purple-400 text-purple-800 hover:bg-orange-200",
    Mobile: "bg-yellow-400 text-yellow-800 hover:bg-pink-200",
    Algoritmos: "bg-gray-600 text-white hover:bg-indigo-200",
  };

  const word = "GRATUITO";
  const letters = word.split("");
  const letterImages: { [key: string]: string } = {
    A: A_Image,
    D: D_Image,
    G: G_Image,
    I: I_Image,
    O: O_Image,
    R: R_Image,
    T: T_Image,
    U: U_Image,
  };
  const [hoverImage, setHoverImage] = useState({
    visible: false,
    src: "",
    x: 0,
    y: 0,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLSpanElement>,
    letter: string,
    index: number
  ) => {
    const imageSrc = letterImages[letter];
    if (!imageSrc) return;
    const letterElement = e.currentTarget;
    const x = letterElement.offsetLeft + letterElement.offsetWidth / 2;
    const y = letterElement.offsetTop - 80;
    setHoverImage({ visible: true, src: imageSrc, x: x, y: y });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverImage({ ...hoverImage, visible: false });
    setHoveredIndex(null);
  };

  return (
    <section className="bg-gray-200 py-4 text-center relative">
      {hoverImage.visible && (
        <img
          src={hoverImage.src}
          alt="Efeito de letra"
          className="absolute w-24 h-24 z-50 pointer-events-none transform -translate-x-1/2"
          style={{
            left: `${hoverImage.x}px`,
            top: `${hoverImage.y}px`,
            transition: "opacity 0.2s ease-in-out",
          }}
        />
      )}

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 items-center">
          <div className="pt-10 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Link
                to="busca-categorias"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Brain className="h-12 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Aprendizado Visual
                  </h3>
                  <p className="text-gray-600">
                    Absorva o conteúdo de forma mais eficaz com mapas mentais.
                  </p>
                </div>
              </Link>
              <Link
                to="busca-categorias"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Conteúdo Atualizado
                  </h3>
                  <p className="text-gray-600">
                    Semanalmente postamos novos mapas mentais.
                  </p>
                </div>
              </Link>
              <Link
                to="busca-categorias"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Você Pode</h3>
                  <p className="text-gray-600">
                    Baixar, imprimir e compartilhar. Deixe seu feedback!
                  </p>
                </div>
              </Link>
            </div>

            <p className="text-2xl font-bold text-gray-600 mb-10 leading-relaxed pb-0">
              Aqui simplificamos seus estudos com a ajuda de mapas mentais
              claros e objetivos. <br /> Acreditamos que o conhecimento deve ser
              acessível a todos, e é por isso que este projeto é, e sempre será,
              100% ⬇️
            </p>
            <h3 className="text-9xl font-bold text-orange-600 pt-0">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className="cursor-pointer inline-block transition-transform duration-200"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateY(-15px)"
                        : "translateY(0)",
                  }}
                  onMouseEnter={(e) => handleMouseEnter(e, letter, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {letter}
                </span>
              ))}
            </h3>
          </div>

          <h3
            id="busca-categorias"
            className="text-4xl font-semibold text-gray-800 mt-24"
          >
            Buscar por Categoria
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black  text-white"
                      : categoryColors[category] ||
                        "bg-gray-600 text-gray-100 hover:bg-gray-400"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
