
import type { Car } from "../types/car";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Calendar, Fuel, Milestone } from "lucide-react";

interface Props {
  car: Car;
}

export function CarCard({ car }: Props) {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg rounded-xl">

      
      <img
        src={car.image}
        alt={car.name}
        className="w-full object-cover aspect-video"
      />

      <CardContent className="p-4 space-y-4">

    
        <h2 className="text-1xl semibold text-gray-900 leading-tight line-clamp-2">
          {car.name} ({car.owner})
        </h2>

      
        <p className="text-1.5xl font-bold text-[#00C9A7]">
          ₹{car.price.toLocaleString()}
        </p>

    
        <div className="grid grid-cols-3 gap-4 mt-2">

          <div className="flex flex-col items-center text-gray-700">
            <Calendar className="w-6 h-6 text-[#00022E]" />
            <span className="text-sm font-medium mt-1">
              {car.year}
            </span>
          </div>

          <div className="flex flex-col items-center text-gray-700">
            <Milestone className="w-6 h-6 text-[#00022E]" />
            <span className="text-sm font-medium mt-1">
              {car.kilometers.toLocaleString()} km
            </span>
          </div>

          <div className="flex flex-col items-center text-gray-700">
            <Fuel className="w-6 h-6 text-[#00022E]" />
            <span className="text-sm font-medium mt-1"> 
              {car.fuelType}
            </span>
          </div>

        </div>

      </CardContent>
      <CardFooter>
        <button className="w-full bg-[#311432] text-white py-2 px-4 rounded-lg hover:bg-[#D7BFDC] transition-colors">

            View Details    
        </button>
      </CardFooter>
    </Card>
  );
}