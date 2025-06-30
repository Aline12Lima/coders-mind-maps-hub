
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import MindMapCard from "@/components/MindMapCard";
import MindMapModal from "@/components/MindMapModal";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedMindMap, setSelectedMindMap] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "Todos",
    "Frontend",
    "Backend", 
    "Banco de Dados",
    "DevOps",
    "Mobile",
    "Algoritmos"
  ];

  const mindMaps = [
    {
      id: 1,
      title: "React Hooks Essenciais",
      description: "Um guia completo sobre os principais hooks do React, incluindo useState, useEffect, useContext e hooks customizados. Perfeito para quem está começando ou quer revisar conceitos.",
      category: "Frontend",
      author: "Ana Silva",
      date: "15/12/2023",
      likes: 127,
      views: 1834,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Arquitetura de APIs REST",
      description: "Conceitos fundamentais para criar APIs RESTful escaláveis e bem estruturadas. Inclui boas práticas, padrões de design e exemplos práticos.",
      category: "Backend",
      author: "Carlos Mendes",
      date: "12/12/2023",
      likes: 89,
      views: 1245,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Normalização de Banco de Dados",
      description: "Processo step-by-step para normalizar bancos de dados relacionais, evitando redundâncias e mantendo a integridade dos dados.",
      category: "Banco de Dados",
      author: "Marina Costa",
      date: "10/12/2023",
      likes: 156,
      views: 2103,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Docker para Iniciantes",
      description: "Conceitos básicos de containerização com Docker, desde a instalação até o deployment. Inclui exemplos práticos e melhores práticas.",
      category: "DevOps",
      author: "Roberto Lima",
      date: "08/12/2023",
      likes: 203,
      views: 2876,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "React Native Navigation",
      description: "Guia completo sobre navegação em aplicativos React Native, incluindo Stack Navigator, Tab Navigator e Drawer Navigator.",
      category: "Mobile",
      author: "Julia Santos",
      date: "05/12/2023",
      likes: 94,
      views: 1567,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Algoritmos de Ordenação",
      description: "Visualização e análise dos principais algoritmos de ordenação: Bubble Sort, Quick Sort, Merge Sort e Heap Sort com complexidade temporal.",
      category: "Algoritmos",
      author: "Pedro Oliveira",
      date: "03/12/2023",
      likes: 178,
      views: 2234,
      image: "/placeholder.svg"
    }
  ];

  const filteredMindMaps = selectedCategory === "Todos" 
    ? mindMaps 
    : mindMaps.filter(map => map.category === selectedCategory);

  const handleMindMapClick = (mindMap: any) => {
    setSelectedMindMap(mindMap);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FilterSection 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {selectedCategory === "Todos" ? "Todos os Mapas Mentais" : `Mapas de ${selectedCategory}`}
          </h2>
          <p className="text-gray-600">
            {filteredMindMaps.length} {filteredMindMaps.length === 1 ? 'mapa encontrado' : 'mapas encontrados'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMindMaps.map((mindMap) => (
            <MindMapCard
              key={mindMap.id}
              {...mindMap}
              onClick={() => handleMindMapClick(mindMap)}
            />
          ))}
        </div>
        
        {filteredMindMaps.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenhum mapa mental encontrado
            </h3>
            <p className="text-gray-500">
              Tente selecionar uma categoria diferente ou aguarde novos conteúdos.
            </p>
          </div>
        )}
      </main>
      
      <MindMapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mindMap={selectedMindMap}
      />
    </div>
  );
};

export default Index;
