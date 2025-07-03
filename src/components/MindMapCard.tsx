import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2, Calendar } from "lucide-react";

interface MindMapCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  likes: number;
  views: number;
  image: string;
  onClick: () => void;
}

const MindMapCard = ({
  id,
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
    <Card
      className=" bg-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
      onClick={onClick}
    >
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

      <CardContent>
        <div className="mb-4">
          <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-3"></div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Eye className="h-4 w-4 mr-1" />
            Visualizar
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-gray-50">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MindMapCard;
