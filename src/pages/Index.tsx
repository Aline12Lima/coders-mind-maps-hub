// src/pages/Index.tsx

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import MindMapCard from "@/components/MindMapCard";
import MindMapModal from "@/components/MindMapModal";

// ---> ADIÇÃO 1: Importamos o cliente Sanity e o tipo Key do React
import { client } from "@/lib/sanityClient";
import { Key } from "react";

// ---> ADIÇÃO 2: Definimos a "forma" dos dados que virão do Sanity
interface SanityMindMap {
  _id: Key;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  pdfUrl: string; // Adicionamos o campo para o link do PDF
}

const Index = () => {
  // Seus estados existentes - Nenhuma alteração aqui
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedMindMap, setSelectedMindMap] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ---> ADIÇÃO 3: Novos estados para guardar os dados do Sanity e controlar o loading
  const [allMindMaps, setAllMindMaps] = useState<SanityMindMap[]>([]);
  const [loading, setLoading] = useState(true);

  // As categorias continuam estáticas, o que é ótimo para os botões de filtro
  const categories = [
    "Todos",
    "Frontend",
    "Backend",
    "Banco de Dados",
    "DevOps",
    "Mobile",
    "Algoritmos",
  ];

  // ---> REMOÇÃO: O array 'mindMaps' estático foi removido daqui.
  // Ele será preenchido com os dados do Sanity.

  // ---> ADIÇÃO 4: Hook useEffect para buscar os dados do Sanity uma vez
  useEffect(() => {
    const fetchMindMaps = async () => {
      setLoading(true);
      const query = `*[_type == "mindMap"]{
        _id,
        title,
        description,
        category,
        "date": _createdAt,
        "imageUrl": image.asset->url,
        "pdfUrl": pdfFile.asset->url
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

  // ---> ALTERAÇÃO: O filtro agora usa o estado 'allMindMaps' que veio do Sanity
  const filteredMindMaps =
    selectedCategory === "Todos"
      ? allMindMaps
      : allMindMaps.filter((map) => map.category === selectedCategory);

  // Sua função de clique do modal - Nenhuma alteração aqui
  const handleMindMapClick = (mindMap: any) => {
    setSelectedMindMap(mindMap);
    setIsModalOpen(true);
  };

  // ---> ADIÇÃO 5: Se estiver carregando, mostramos uma mensagem
  if (loading) {
    return (
      <div className="text-center text-white py-20 text-2xl">
        Carregando conteúdo...
      </div>
    );
  }

  // Seu JSX - A estrutura visual permanece a mesma
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
          {/* O map agora usa os dados filtrados do Sanity */}
          {filteredMindMaps.map((mindMap) => (
            <MindMapCard
              key={mindMap._id}
              id={mindMap._id as number}
              title={mindMap.title}
              description={mindMap.description}
              category={mindMap.category}
              date={new Date(mindMap.date).toLocaleDateString("pt-BR")}
              image={mindMap.imageUrl}
              // Ação de clique adaptada para abrir o PDF do Sanity
              onClick={() => window.open(mindMap.pdfUrl, "_blank")}
              author={""}
              likes={0}
              views={0}
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

      {/* O modal continua funcionando com os dados selecionados */}
      <MindMapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mindMap={selectedMindMap}
      />
    </div>
  );
};

export default Index;
