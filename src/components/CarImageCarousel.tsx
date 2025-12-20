import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";


type Car = {
  id: number;
  image: string;
  name: string;
  kilometers: number;
  

  price: number;
};

type Props = {
  cars: Car[];
  showDetails?: boolean; 
};

export default function CarImageCarousel({
  cars,
  showDetails = false,
}: Props) {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {cars.map((car) => (
          <CarouselItem key={car.id} className="basis-1/3">
            <Link to={`/cars/${car.id}`}>
              <div className="cursor-pointer group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

              
                {showDetails && (
                  <div className="mt-3">
                    <h2 className="text-xl font-semibold text-gray-900 leading-tight line-clamp-2 ">
                      {car.name} 
                    </h2>

                    <p className="text-lg font-medium text-[#00C9A7] mt-1">
                      ₹{car.price.toLocaleString()}
                    </p>
               
            
            
              {car.kilometers.toLocaleString()} km
           
         
                  </div>
                )}
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
