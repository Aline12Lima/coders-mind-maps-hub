import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Users, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-400 to-indigo-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 bg-clip-text ">
            Bem-vindo(a) ao projeto Mapas Mentais para Desenvolvedores!
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Nossa missão é simplificar seus estudos em programação com a ajuda
            de mapas mentais claros e objetivos. Acreditamos que o conheciment
            deve ser acessível a todos, e é por isso que este projeto é, e
            sempre será, 100% <strong>gratuito</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-12 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aprendizado Visual</h3>
              <p className="text-gray-600">
                Absorva o conteudo de forma mais eficaz com mapas mentais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Conteúdo Atualizado </h3>
              <p className="text-gray-600">
                Semanalmente postamos novos mapas mentais. 
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Você Pode
              </h3>
              <p className="text-gray-600">
                Baixar, imprimir e compartilhar, deixe seu feedback ou dúvidas em meu LinkedIn. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
