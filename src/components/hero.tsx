import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroCar() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1660px] rounded-3xl overflow-hidden bg-[#20576E] relative">
    <div className="absolute inset-0 bg-[#20576E]/80" />

    <div className="relative z-10 px-8 md:px-16 py-20 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Discover Your Next Ride
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Explore the best used cars with confidence — trusted listings,
            great deals, and simple navigation.
          </p>

          <div className="flex gap-4">
            <Button asChild>
              <Link to="/cars">Browse Cars</Link>
            </Button>

            <Button  asChild variant="outline" className="border-white text-black hover:bg-white ">
              <Link to="/about">
              Learn More
              </Link>

            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
