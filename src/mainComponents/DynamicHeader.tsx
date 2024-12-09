import HamburguerHeader from '@/genericComponents/HamburguerHeader';
import StaticHeader from '@/genericComponents/StaticHeader';
import { useScreen } from "../context/ScreenContext";


const DynamicHeader = () => {
  const { isMobile, isScrolled } = useScreen();

  

  const itens = {
    name: ["Home", "About", "Projects", "Contact"]
  }
  
  return (
    <div className="relative">  
      <div
        className={`transition-opacity duration-500 ${
          isMobile || isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <StaticHeader />
      </div>
      <div
        className={
          `transition-opacity duration-500 
          ${isMobile || isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
        }
      >
        <HamburguerHeader lineText={itens.name} />
      </div>
    </div>
  );
};

export default DynamicHeader;
