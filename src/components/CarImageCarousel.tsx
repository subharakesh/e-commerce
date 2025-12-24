import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { memo } from "react";

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

// Memoized single slide to prevent unnecessary re-renders
const CarSlide = memo(({ car, showDetails }: { car: Car; showDetails?: boolean }) => (
  <Link to={`/cars/${car.id}`} className="cursor-pointer group">
    <div className="overflow-hidden rounded-xl">
      <img
        src={car.image}
        alt={car.name}
        loading="lazy"
        width={280}
        height={224}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    {showDetails && (
      <div className="mt-3">
        <h2 className="font-semibold text-white line-clamp-2">{car.name}</h2>
        <p className="text-[#00C9A7] mt-1">₹{car.price.toLocaleString()}</p>
        <p className="text-white mt-1">{car.kilometers.toLocaleString()} km</p>
      </div>
    )}
  </Link>
));

export default function CarImageCarousel({ cars, showDetails = false }: Props) {
  // Render only first 6 cars to reduce initial load
  const visibleCars = cars.slice(0, 6);

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {visibleCars.map((car) => (
          <CarouselItem key={car.id} className="basis-1/3">
            <CarSlide car={car} showDetails={showDetails} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
