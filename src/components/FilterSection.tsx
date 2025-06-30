
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSection = ({ categories, selectedCategory, onCategoryChange }: FilterSectionProps) => {
  const categoryColors: { [key: string]: string } = {
    "Todos": "bg-gray-100 text-gray-800 hover:bg-gray-200",
    "Frontend": "bg-blue-100 text-blue-800 hover:bg-blue-200",
    "Backend": "bg-green-100 text-green-800 hover:bg-green-200",
    "Banco de Dados": "bg-purple-100 text-purple-800 hover:bg-purple-200",
    "DevOps": "bg-orange-100 text-orange-800 hover:bg-orange-200",
    "Mobile": "bg-pink-100 text-pink-800 hover:bg-pink-200",
    "Algoritmos": "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
  };

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-800">Filtrar por Categoria</h3>
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
                    : categoryColors[category] || "bg-gray-100 text-gray-800 hover:bg-gray-200"
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
