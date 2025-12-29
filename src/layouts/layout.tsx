import { Outlet } from "react-router-dom";
import NavHeader from "@/components/navHeader";
import Footer from "@/components/footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />

     
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
