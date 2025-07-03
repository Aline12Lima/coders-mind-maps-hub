import { Brain, Linkedin, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-gradient-to-br from-white to-indigo-200 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DevMindMaps
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 hover:bg-blue-50"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/aline-lima-397a84202/m",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-4 w-4 text-blue-600" />
              <span>LinkedIn</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 hover:bg-indigo-50"
              onClick={() =>
                window.open("discord://-/users/1194013840451575930", "_blank")
              }
            >
              <MessageCircle className="h-4 w-4 text-indigo-600" />
              <span>Discord</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 hover:bg-indigo-50"
              onClick={() =>
                window.open("https://mapsaline.carrd.co/", "_blank")
              }
            >
              <User className="h-4 w-4 text-indigo-600" />
              <span>Sobre mim</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
