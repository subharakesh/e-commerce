import { Suspense, lazy } from "react";
import Footer from "@/components/footer";

const Hero = lazy(() => import("@/components/hero"));
const HeroCar = lazy(() => import("@/components/heroCar"));
const RecentlyViewed = lazy(() => import("@/components/recentlyViewed"));
import { InfoSection } from "@/components/infoSection";

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>

      <h1 className="text-2xl md:text-3xl font-semibold text-[#00022E] mb-1 mt-5 ml-24">
        Featured Cars
      </h1>

      <h2 className="text-sm md:text-base font-normal text-gray-500 mb-10 ml-24">
        Handpicked deals just for you
      </h2>

      <HeroCar />

      <h3 className="text-3xl font-semibold text-[#00022E] mb-3 mt-20 ml-24 font-serif">
        The Carverse difference
      </h3>

      <InfoSection />

      <RecentlyViewed />

      <Footer />
    </>
  );
};

export default HomePage;
