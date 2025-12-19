import Footer from '@/components/footer';
import Hero from '../components/hero'

import HeroCar from '@/components/heroCar';

import { InfoSection } from "@/components/infoSection";
import SearchBar from '@/components/searchbar';





const HomePage = () => {
  return (
    <div>
      
        <SearchBar /> 
        <Hero />
             <h1 className="text-2xl md:text-3xl font-semibold text-[#00022E] mb-3 mt-8 ml-24 font-serif ">
             Featured Cars
             </h1>
                <h4 className="text-sm md:text-base font-normal text-gray-500 mb-6 ml-24 font-serif">Handpicked deals just for you</h4>  
                 
       
        <HeroCar />
        <h1 className="text-3xl md:text-3xl font-semibold text-[#00022E] mb-3 mt-20 ml-25 font-serif ">The Carverse difference</h1>
        <InfoSection />
   

        


        
     <Footer />
      
    </div>
      
  )
}

export default HomePage