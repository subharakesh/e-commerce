

import { CARS } from "../utils/carData";
import { CarCard } from "../components/CarCard";
import NavHeader from "@/components/navHeader";
import CarDetailCard from "@/components/carDetailCard";

const Cars = () => {
  return (
    
    <div className="p-6">
    
      <h1 className="text-2xl font-bold mb-6">Available Cars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CARS.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      
      </div>
      
    </div>
    

  );
};

export default Cars;
