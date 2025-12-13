import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar,Fuel,Milestone } from "lucide-react";
export function CarCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg rounded-xl">
      
      {/* Car Image */}
      <img
        src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
        alt="Car"
        className="w-full object-cover aspect-video"
      />

     <CardContent className="p-4 space-y-4">

  {/* Title */}
  <h2 className="text-2xl font-normal text-gray-900 leading-tight">
    2022 Honda City ZX (1st Owner)
  </h2>

  {/* Price */}
  <p className="text-2xl font-bold text-[#00C9A7]">
    ₹12,50,000
  </p>

  {/* Specs Section */}
  <div className="grid grid-cols-3 gap-4 mt-2">

    <div className="flex flex-col items-center text-gray-700">
      <Calendar className="w-6 h-6 text-[#00022E]" />
      <span className="text-sm font-medium mt-1">2022</span>
    </div>

    <div className="flex flex-col items-center text-gray-700">
      <Milestone className="w-6 h-6 text-[#00022E]" />
      <span className="text-sm font-medium mt-1">15,000 km</span>
    </div>

    <div className="flex flex-col items-center text-gray-700">
      <Fuel className="w-6 h-6 text-[#00022E]" />
      <span className="text-sm font-medium mt-1">Petrol</span>
    </div>

  </div>
</CardContent>


    </Card>
  );
}
