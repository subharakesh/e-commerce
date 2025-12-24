import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Car } from "../types/car";
import { CarCard } from "../components/carCard";

export default function Favorites() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <div className="container mx-auto mt-20 px-6 ml-20">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center md:text-left">
        Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center">
          You have not added any cars to your favorites yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((car) => (
            <CarCard key={car.id} car={car as Car} />
          ))}
        </div>
      )}
    </div>
  );
}
