import { Linkedin, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer
      id="contato"
      className=" bottom-0 left-0 w-full p-4 border-t bg-background"
    >
      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 hover:bg-blue-50"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/aline-lima-397a84202/",
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
            window.open(
              "https://discord.com/users/1194013840451575930",
              "_blank"
            )
          }
        >
          <MessageCircle className="h-4 w-4 text-indigo-600" />
          <span>Discord</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 hover:bg-gray-100"
          onClick={() => window.open("https://mapsaline.carrd.co/", "_blank")}
        >
          <User className="h-4 w-4 text-gray-800" />
          <span>Sobre mim</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
