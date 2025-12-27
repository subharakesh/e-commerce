import { Suspense } from 'react';
import Footer from '@/components/footer';
import Hero from '../components/hero'

import HeroCar from '@/components/heroCar';

import { InfoSection } from "@/components/infoSection";

import RecentlyViewed from '@/components/recentlyViewed';
import NavHeader from '@/components/navHeader';





const HomePage = () => {
  return (
    <div>
     
       <main>
              <Suspense fallback={<div>Loading...</div>}>
                   <Hero />
             </Suspense>

               <h1 className="text-2xl md:text-3xl font-semibold text-[#00022E] mb-1 mt-5 ml-24  ">
                   Featured Cars
                </h1>
                <h2 className="text-sm md:text-base font-normal text-gray-500 mb-10 ml-24 ">Handpicked deals just for you</h2>  
                 
       
                <HeroCar />
                
               <h3 className="text-3xl md:text-3xl font-semibold text-[#00022E] mb-3 mt-20 ml-25 font-serif ">The Carverse difference</ h3>
               <InfoSection />
   

        


               <RecentlyViewed />  
        </main>
     <Footer />
      
    </div>
      
  )
}

export default HomePage