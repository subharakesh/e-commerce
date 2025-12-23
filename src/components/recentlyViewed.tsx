import { useSelector } from "react-redux";
import type { RootState } from "@/store/index";
import { Suspense, lazy, memo } from "react";


const CarImageCarousel = lazy(() => import("@/components/CarImageCarousel"));

const RecentlyViewed = () => {
  const recentlyViewed = useSelector(
    (state: RootState) => state.recentlyViewed
  );

  if (!recentlyViewed || recentlyViewed.length === 0) return null;

  return (
    <section className="mt-10 mb-20">
      <h2 className="text-3xl font-semibold mb-2 text-gray-800 ml-24">
        Recently Viewed
      </h2>
      <h4 className="text-lg font-medium text-gray-600 mb-8 ml-24">
        Pick up where you left off
      </h4>

      
      <div className="px-4">
        <Suspense fallback={<div className="text-gray-500 text-center py-10">Loading...</div>}>
          <CarImageCarousel cars={recentlyViewed}  />
        </Suspense>
      </div>
    </section>
  );
};

export default memo(RecentlyViewed);
