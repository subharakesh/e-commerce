import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_CONFIGS } from "./utils/routerConfig";
import { Toaster } from "sonner";
import MainLayout from "@/layouts/layout";

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />

      <Routes>
       
        <Route element={<MainLayout />}>
          {ROUTE_CONFIGS.map(({ path, component: Component }, index) => {
            const LazyComponent = React.lazy(Component);

            return (
              <Route
                key={index}
                path={path}
                element={
                  <React.Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">Loading...</div>}>
                    <LazyComponent />
                  </React.Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
