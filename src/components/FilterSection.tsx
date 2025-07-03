import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    Todos: "bg-gray-800 text-gray-800 hover:bg-gray-200",
    Frontend: "bg-blue-600 text-white hover:bg-blue-200",
    Backend: "bg-green-400 text-white hover:bg-green-200",
    "Banco de Dados": "bg-purple-600 text-white hover:bg-purple-200",
    DevOps: "bg-orange-600 text-white hover:bg-orange-200",
    Mobile: "bg-pink-600 text-white hover:bg-pink-200",
    Algoritmos: "bg-indigo-600 text-white hover:bg-indigo-200",
  };

  return (
    <section className="bg-gray-200 py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Buscar por Categoria
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : categoryColors[category] ||
                      "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
