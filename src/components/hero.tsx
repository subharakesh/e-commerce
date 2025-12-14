import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroCar() {
  return (
    <section className="px-6 py-20">
      <div
        className="
          mx-auto max-w-25xl
          rounded-2xl
          overflow-hidden
          bg-cover bg-center
          bg-no-repeat
          relative
        "
        style={{
          backgroundImage:
           "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",

        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#00022E]/80" />

        {/* Content */}
        <div className="relative z-10 px-8 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
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

            <Button variant="outline" className="border-white text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
