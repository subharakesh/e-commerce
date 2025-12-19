import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar,CarFront,Settings,Fuel,User,MapPin } from "lucide-react";

type Car = {
  id: number;
  name: string;
  price: number;
  year: number;
  kilometers: number;
  fuelType: string;
  transmission: string;
  owner: string;
  location: string;
  description: string;
  images: string[];
};

type Props = {
  car: Car;
};

export default function CarDetailCard({ car }: Props) {
  const [mainImage, setMainImage] = useState(car.images[0]);

  return (
    <Card className="w-full max-w-6xl mx-auto rounded-2xl shadow-lg">
  
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
       
          <img
            src={mainImage}
            alt={car.name}
            className="w-full h-[360px] object-cover rounded-xl"
          />

          <div className="grid grid-cols-3 gap-3">
            {car.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setMainImage(img)}
                className={`h-24 w-full object-cover rounded-lg cursor-pointer border
                  ${mainImage === img ? "border-[#00C9A7]" : "border-transparent"}
                `}
              />
            ))}
          </div>
        </div>

      
        <div className="mt-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-3xl font-bold">
              {car.name}
            </CardTitle>
          </CardHeader>

          <p className="text-2xl font-semibold text-[#00C9A7]">
            ₹{car.price.toLocaleString()}
          </p>

        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-gray-700">
            <p><Calendar /> {car.year}</p>
            <p><CarFront />{car.kilometers} km</p>
            <p><Fuel />{car.fuelType}</p>
            <p><Settings />{car.transmission}</p>
            <p><User />{car.owner}</p>
            <p><MapPin />{car.location}</p>
          </div>

        
          <p className="mt-6 text-gray-600 leading-relaxed">
            {car.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}