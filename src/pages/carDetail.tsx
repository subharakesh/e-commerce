import { useParams } from "react-router-dom";
import { CARS } from "@/utils/carData";
import CarDetailCard from "@/components/CarDetailCard";

export default function CarDetailPage() {
  const { id } = useParams();

  const car = CARS.find((c) => c.id === Number(id));

  if (!car) {
    return <div className="p-6 text-center">Car not found</div>;
  }

  return (
    <div className="py-10 px-4">
      <CarDetailCard car={car} />
    </div>
  );
}
