
import React from "react";
import {  Route, Routes } from "react-router-dom";
import { ROUTE_CONFIGS } from "./utils/routerConfig";
import NavHeader from "./components/navHeader";
import Footer from "./components/footer";




function App() {
  return (
    <section>
      <NavHeader />
    
    
    
      <div>
        <Routes>
          {ROUTE_CONFIGS.map(
            ({ path, component: Component}, index) => {
               const LazyComponent = React.lazy(Component);


           
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                       <React.Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </React.Suspense>
              
                    }
                  />
                );
              })
              }
                    
        </Routes>
      </div>
      
     
     
    </section>
    
  );
}

export default App;

             
               
               

             

           
    