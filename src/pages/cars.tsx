

import { CARS } from "../utils/carData";
import { CarCard } from "../components/carCard";


import { useState } from "react";

const Cars = () => {
  const [visible, setVisible] = useState(6);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-10 mt-30  text-center">
        Available Cars
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mr-20">
        {CARS.slice(0, visible).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {visible < CARS.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Cars;