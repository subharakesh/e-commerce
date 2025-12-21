import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar,CarFront,Settings,Fuel,User,MapPin } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-6xl mx-auto rounded-2xl shadow-lg my-10 mb-20">
  
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
        
<div className="mt-8">
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button className="w-full md:w-auto bg-[#00C9A7] hover:bg-[#00b89a] text-black text-lg px-8 py-6 rounded-xl">
        Buy Now
      </Button>
     
    </AlertDialogTrigger>
    
     <Button className="w-full md:w-auto bg-white hover:bg-[#00b89a] text-black text-lg px-8 py-6 rounded-xl ml-4 border" onClick={() => navigate('/contact')} >
        Contact Seller
      </Button>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Confirm Purchase
        </AlertDialogTitle>

        <AlertDialogDescription>
          You are about to proceed with the purchase of
          <span className="font-semibold text-gray-900">
            {" "}
            {car.name}
          </span>{" "}
          for
          <span className="font-semibold text-[#00C9A7]">
            {" "}
            ₹{car.price.toLocaleString()}
          </span>.
          <br />
          Our team will contact you shortly.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={() => navigate('/contact')}
          className="bg-[#00C9A7] hover:bg-[#00b89a]"
        >
          Confirm
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>



      </CardContent>
      
      
    </Card>

  );
}