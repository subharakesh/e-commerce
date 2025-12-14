import React from 'react'
 
import NavHeader from '../components/navHeader'
import Hero from '../components/hero'
import { CarCard } from "../components/carCard";
import HeroCar from '@/components/heroCar';
import { InfoCard } from '@/components/infoCard';


const HomePage = () => {
  return (
    <div>
        <NavHeader />
        <Hero />
             <h1 className="text-3xl md:text-3xl font-norml text-[#00022E] mb-3 mt-3">
Featured Cars
</h1>
<h4>Handpicked deals just for you</h4>
       
        <HeroCar />
        <h1 className="text-3xl md:text-3xl font-norml text-[#00022E] mb-3 mt-3">The Carverse difference</h1>
        < InfoCard />

        


        {/* <CarCard /> */}
     
      
    </div>
  )
}

export default HomePage