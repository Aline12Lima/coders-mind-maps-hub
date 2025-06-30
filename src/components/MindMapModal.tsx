
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Download, Calendar, User, Eye } from "lucide-react";

interface MindMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  mindMap: {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
    likes: number;
    views: number;
    image: string;
  } | null;
}

const MindMapModal = ({ isOpen, onClose, mindMap }: MindMapModalProps) => {
  if (!mindMap) return null;

  const categoryColors: { [key: string]: string } = {
    "Frontend": "bg-blue-100 text-blue-800",
    "Backend": "bg-green-100 text-green-800",
    "Banco de Dados": "bg-purple-100 text-purple-800",
    "DevOps": "bg-orange-100 text-orange-800",
    "Mobile": "bg-pink-100 text-pink-800",
    "Algoritmos": "bg-indigo-100 text-indigo-800",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge className={categoryColors[mindMap.category] || "bg-gray-100 text-gray-800"}>
                  {mindMap.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{mindMap.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{mindMap.author}</span>
                  </div>
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-3">
                {mindMap.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Área do Mapa Mental */}
          <div className="w-full h-96 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-lg border-2 border-dashed border-purple-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <p className="text-gray-600 font-medium">Mapa Mental Interativo</p>
              <p className="text-sm text-gray-500 mt-2">Aqui seria exibido o mapa mental real</p>
            </div>
          </div>
          
          {/* Descrição */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Sobre este Mapa Mental</h3>
            <p className="text-gray-700 leading-relaxed">{mindMap.description}</p>
          </div>
          
          {/* Estatísticas e Ações */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{mindMap.views} visualizações</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{mindMap.likes} curtidas</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Curtir
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Compartilhar
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Download className="h-4 w-4 mr-1" />
                Baixar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MindMapModal;
