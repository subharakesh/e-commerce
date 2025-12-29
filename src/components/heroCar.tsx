import { Suspense, lazy } from "react";
import { CARS } from "@/Data/carData";

const CarImageCarousel = lazy(() => import("./CarImageCarousel"));

export default function HeroCar() {
  return (
   <section className="mx-auto max-w-6xl rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center bg-[#20576E]">
  <div className="w-full px-4 md:px-8">
    <Suspense fallback={<div className="text-center text-white py-20">Loading cars...</div>}>
      <CarImageCarousel cars={CARS} showDetails />
    </Suspense>
  </div>
</section>

  );
}
