import { Button } from "@/components/ui/button";    
export default function Hero() {
  return (
    <section className="bg-[#00022E] text-white py-20 px-6 text-center md:text-left">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Discover Your Next Ride
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Explore the best used cars with confidence — trusted listings, great deals, and simple navigation.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <Button variant="default">Browse Cars</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
