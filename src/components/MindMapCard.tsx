import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar } from "lucide-react";

interface MindMapCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string; // Receberá a 'imageUrl'
  onClick?: () => void; // Mantemos como opcional para flexibilidade
}

const MindMapCard = ({
  title,
  description,
  category,
  date,
  image,
  onClick,
}: MindMapCardProps) => {
  const categoryColors: { [key: string]: string } = {
    Frontend: "bg-blue-100 text-blue-800",
    Backend: "bg-green-100 text-green-800",
    "Banco de Dados": "bg-purple-100 text-purple-800",
    DevOps: "bg-orange-100 text-orange-800",
    Mobile: "bg-pink-100 text-pink-800",
    Algoritmos: "bg-indigo-100 text-indigo-800",
  };

  return (
    <Card className="bg-white/90 transition-all duration-300 group flex flex-col hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge
            className={categoryColors[category] || "bg-gray-100 text-gray-800"}
          >
            {category}
          </Badge>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
        <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow">
        <img
          src={image}
          alt={`Capa do mapa mental ${title}`}
          className="w-full h-40 object-cover rounded-lg mb-4 border"
        />
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            onClick={onClick}
          >
            <Eye className="h-4 w-4 mr-1" />
            Visualizar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MindMapCard;
