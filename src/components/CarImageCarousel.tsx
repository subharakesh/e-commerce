import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { CARS } from "@/utils/carData";

export default function CarImageCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {CARS.map((car) => (
          <CarouselItem key={car.id} className="basis-1/3">
            <div className="overflow-hidden rounded-xl">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
