
import { CARS } from "@/Data/carData";

import CarImageCarousel from "./CarImageCarousel";


export default function HeroCar() {
  return (
   <section className="mx-auto max-w-6xl rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center bg-[#20576E]">
  <div className="w-full px-4 md:px-8">
   
      <CarImageCarousel cars={CARS} showDetails />
 
  </div>
</section>

  );
}
