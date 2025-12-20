
import { Search } from "lucide-react";
export default function SearchBar() {
  return (
    <div className="relative w-full max-w-[1650px] mx-auto mt-8">
      
    
      <input
        type="text"
        placeholder="What car are you looking for?"
        className="
          w-full
          pl-12     
          pr-4
          py-5
          border
          border-gray-300
          rounded-xl
          bg-white
          text-gray-900
          focus:outline-none
          focus:ring-2
          focus:ring-[#00C9A7]
        "
      />

      
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}
