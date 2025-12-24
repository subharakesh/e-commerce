import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {

    localStorage.clear();
  
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white rounded-3xl shadow-lg p-10">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          You’ve been logged out
        </h1>

        <p className="text-gray-600 mb-8">
          Thanks for visiting CarVerse. We hope to see you again soon!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/">Go to Home</Link>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link to="/cars">Browse Cars</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
