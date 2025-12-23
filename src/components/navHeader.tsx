import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { Car, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/index";

const NavHeader = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 border-none border-border">
   
      <Link to="/">
        <div className="flex items-center gap-2">
          <Car className="text-[#960000] w-8 h-8 stroke-[2] transition-transform duration-300 hover:rotate-12 ml-32" />
          <h1 className="text-3xl font-extrabold text-black">CarVerse</h1>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-4 font-bold text-1xl text-black">
        <Link to="/cars">
          <Button variant="ghost">Cars</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>

    
        <Link
          to="/favorites"
          className="relative"
          aria-label={`Favorites: ${favorites.length} items`}
        >
          <Heart className="h-6 w-6 text-yellow-500 hover:text-red-500" />
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Link>

      
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="User menu">
            <Avatar className="w-10 h-10 mr-32">
              <div className="w-10 h-10 rounded-full bg-[#20576E] flex items-center justify-center">
                <span className="font-semibold text-white">S</span>
              </div>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

    
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" aria-label="Open menu">
              <GiHamburgerMenu size={24} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#00022E] text-white w-full max-w-full h-full"
          >
            <div className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost" className="text-white w-full text-right">
                About
              </Button>
              <Button variant="ghost" className="text-white w-full text-right">
                Contact
              </Button>

              <p className="text-lg font-extrabold text-white mt-4 mb-2 ml-5">
                Account
              </p>

              <Button variant="ghost" className="text-white w-full text-right">
                Profile
              </Button>
              <Button variant="ghost" className="text-white w-full text-right">
                Settings
              </Button>
              <Button variant="ghost" className="text-white w-full text-right">
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavHeader;
