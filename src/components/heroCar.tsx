import { Suspense, lazy } from "react";
import { CARS } from "@/utils/carData";

const CarImageCarousel = lazy(() => import("./CarImageCarousel"));

export default function HeroCar() {
  return (
    <section className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center bg-[#20576E]">
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-[#20576E]/80" />

      {/* Carousel lazy-loaded */}
      <div className="relative w-full px-4 md:px-8 z-10">
        <Suspense fallback={<div className="text-center text-white py-20">Loading cars...</div>}>
          <CarImageCarousel cars={CARS} showDetails />
        </Suspense>
      </div>
    </section>
  );
}
