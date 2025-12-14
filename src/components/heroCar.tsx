import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CarImageCarousel from "./CarImageCarousel";


export default function HeroCar() {
  return (
    
  
      <div
        className="
          mx-auto max-w-25xl
          rounded-2xl
          overflow-hidden
          bg-cover bg-center
          bg-no-repeat
          relative
        "
        style={{
          backgroundImage:
           "url('/road.jpg')",



        }}
        
      >
       
        
        <CarImageCarousel />

       


          
       
      </div>
  
  );
}
