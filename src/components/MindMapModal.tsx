import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

// Interface atualizada para os dados que vêm do Sanity
interface MindMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  mindMap: {
    title: string;
    description: string;
    category: string;
    date: string;
    imageUrl: string; // <-- URL da imagem
    pdfUrl: string; // <-- URL do PDF
  } | null;
}

const MindMapModal = ({ isOpen, onClose, mindMap }: MindMapModalProps) => {
  if (!isOpen || !mindMap) return null;

  const categoryColors: { [key: string]: string } = {
    Frontend: "bg-blue-100 text-blue-800",
    Backend: "bg-green-100 text-green-800",
    "Banco de Dados": "bg-purple-100 text-purple-800",
    DevOps: "bg-orange-100 text-orange-800",
    Mobile: "bg-pink-100 text-pink-800",
    Algoritmos: "bg-indigo-100 text-indigo-800",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-50 p-6">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Badge
              className={
                categoryColors[mindMap.category] || "bg-gray-100 text-gray-800"
              }
            >
              {mindMap.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 gap-1">
              <Calendar className="h-4 w-4" />
              <span>{mindMap.date}</span>
            </div>
          </div>
          <DialogTitle className="text-3xl font-bold text-gray-800 mb-3">
            {mindMap.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
        
          <div className="w-full rounded-lg border bg-white p-2">
            <img
              src={mindMap.imageUrl}
              alt={`Pré-visualização do mapa mental ${mindMap.title}`}
              className="w-full max-h-[50vh] object-contain"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Sobre este Mapa Mental
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {mindMap.description}
            </p>
          </div>

          <div className="flex items-center justify-center pt-4 border-t">
            
            <a
              href={mindMap.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Fazer Download do PDF
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MindMapModal;
