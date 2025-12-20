
import CarImageCarousel from "./CarImageCarousel";
import { CARS } from "@/utils/carData";

export default function HeroCar() {
  return (
    <div
      className="
        relative
        mx-auto max-w-[1635px]
        rounded-2xl
        overflow-hidden
        bg-cover bg-center
        bg-no-repeat
        h-[500px] md:h-[600px]
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/desert2.jpg')",
      }}
    >
      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative w-full px-4">
        <CarImageCarousel cars={CARS} showDetails />
      </div>
    </div>
  );
}
