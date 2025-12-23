import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CARS } from "@/utils/carData";
import CarDetailCard from "@/components/carDetailCard";
import { addRecentlyViewed } from "@/store/recentlyViewedSlice";


export default function CarDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const carData = CARS.find((c) => c.id === Number(id));
  const car = carData ? { ...carData, images: carData.images || carData.images || [] } : undefined;

  useEffect(() => {
    if (car) {
      dispatch(addRecentlyViewed(car));
    }
  }, [car, dispatch]);

  if (!car) {
    return <div className="p-6 text-center">Car not found</div>;
  }

  return (
    <div className="py-10 px-4">
      <CarDetailCard car={car} />
      
    </div>
  );
}
