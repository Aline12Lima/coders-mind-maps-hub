
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Mapas Mentais para Desenvolvedores
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Descubra, compartilhe e estude programação através de mapas mentais visuais e interativos. 
            Uma comunidade dedicada ao aprendizado colaborativo de desenvolvimento de sistemas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              <Plus className="mr-2 h-5 w-5" />
              Adicionar Mapa Mental
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Explorar Mapas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aprendizado Visual</h3>
              <p className="text-gray-600">Absorva conhecimento de forma mais eficiente através de mapas mentais estruturados</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Comunidade Ativa</h3>
              <p className="text-gray-600">Conecte-se com outros desenvolvedores e compartilhe conhecimento</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Conteúdo Atualizado</h3>
              <p className="text-gray-600">Acesse sempre os mapas mais recentes sobre tecnologias modernas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
