import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import CarImageCarousel from "@/components/CarImageCarousel";

export default function RecentlyViewed() {
  const recentlyViewed = useSelector(
    (state: RootState) => state.recentlyViewed
  );

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-semibold mb-2 font-serif text-gray-800 ml-24">
        Recently Viewed
      </h2>
      <h4 className="text-lg font-medium text-gray-600 mb-8 font-serif ml-24 font-serif">
        Pick up where you left off
      </h4>

      <CarImageCarousel cars={recentlyViewed} />
    </section>
  );
}
