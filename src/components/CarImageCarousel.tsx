import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { memo } from "react";
import {toggleFavorite} from"../store/favoritesSlice";
import { Heart } from "lucide-react";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

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

const CarSlide = memo(({ car, showDetails,isFavorite,onToggleFavorite }: { car: Car; showDetails?: boolean; isFavorite?: boolean; onToggleFavorite?: (car: Car) => void }) => (
  <Link to={`/cars/${car.id}`} className="cursor-pointer group">
    <div className="relative overflow-hidden rounded-xl">

 <Heart
          onClick={(e) => {
            e.preventDefault(); 
            onToggleFavorite?.(car);
          }}
          className={`absolute top-3 right-3 z-10 h-6 w-6 cursor-pointer
            ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-white"
            }
          `}
        />
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
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );  

  const visibleCars = cars.slice(0, 6);

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {visibleCars.map((car) => (
          <CarouselItem key={car.id} className="basis-1/3">
            <CarSlide car={car} showDetails={showDetails} 
            isFavorite={favorites.some((favorite) => favorite.id === car.id)}
            onToggleFavorite={(car) => dispatch(toggleFavorite(car))}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
