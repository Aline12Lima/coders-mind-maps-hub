// src/pages/Index.tsx

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import MindMapCard from "@/components/MindMapCard";
import MindMapModal from "@/components/MindMapModal";

import { client } from "@/lib/sanityClient";
import { Key } from "react";

interface SanityMindMap {
  _id: Key;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  pdfUrl: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedMindMap, setSelectedMindMap] = useState<SanityMindMap | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allMindMaps, setAllMindMaps] = useState<SanityMindMap[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Todos",
    "Frontend",
    "Backend",
    "Banco de Dados",
    "DevOps",
    "Mobile",
    "Algoritmos",
  ];

  useEffect(() => {
    const fetchMindMaps = async () => {
      setLoading(true);
      const query = `*[_type == "mindMap"]{
        _id, title, description, category, "date": _createdAt,
        "imageUrl": image.asset->url, "pdfUrl": pdfFile.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setAllMindMaps(data);
      } catch (error) {
        console.error("Falha ao buscar mapas mentais:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMindMaps();
  }, []);

  const filteredMindMaps =
    selectedCategory === "Todos"
      ? allMindMaps
      : allMindMaps.filter((map) => map.category === selectedCategory);

  // Esta função está correta e agora será chamada
  const handleMindMapClick = (mindMap: SanityMindMap) => {
    setSelectedMindMap(mindMap);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-600 to-indigo-600 flex justify-center items-center">
        <p className="text-center text-white py-20 text-2xl">
          Carregando conteúdo...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-600 to-indigo-600">
      <Header />
      <HeroSection />
      <FilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            {selectedCategory === "Todos"
              ? "Todos os Mapas Mentais"
              : `Mapas de ${selectedCategory}`}
          </h2>
          <p className="text-gray-200">
            {filteredMindMaps.length}{" "}
            {filteredMindMaps.length === 1
              ? "mapa encontrado"
              : "mapas encontrados"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMindMaps.map((mindMap) => (
            <MindMapCard
              key={mindMap._id}
              title={mindMap.title}
              description={mindMap.description}
              category={mindMap.category}
              date={new Date(mindMap.date).toLocaleDateString("pt-BR")}
              image={mindMap.imageUrl}
              onClick={() => handleMindMapClick(mindMap)}
            />
          ))}
        </div>

        {filteredMindMaps.length === 0 && !loading && (
          <div className="text-center py-16 bg-white/20 rounded-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhum mapa mental encontrado
            </h3>
            <p className="text-gray-200">
              Tente selecionar uma categoria diferente.
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
