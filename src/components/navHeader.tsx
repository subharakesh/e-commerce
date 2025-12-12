import React from "react";
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
import { Car } from "lucide-react";

const NavHeader = () => {
  return (
    <header className="bg-white flex justify-between items-center p-4 border-b border-border">
      {/* LOGO */}
      <div className="flex items-center gap-2">
       <Car className="text-[#00C9A7]  w-8 h-8 stroke-[2] transition-transform duration-300 hover:rotate-12" />
        <h1 className="text-xl font-bold text-black">Carverse</h1>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-4 text-black">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Cars</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <span>S</span>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* MOBILE MENU (SHEET) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white">
              <GiHamburgerMenu size={24} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#00022E] text-white w-full max-w-full h-full">
            <div className="flex flex-col  space-y-4 mt-6">
              <Button variant="ghost" className="text-white  w-full text-right">
                Home
              </Button>
              <Button variant="ghost" className="text-white w-full text-right">
                About
              </Button>
              <Button variant="ghost" className="text-white w-full text-right">
                Contact
              </Button>

              <hr className="border-white/30" />

             <p className="text-lg font-extrabold text-white mt-4 mb-2 ml-5">Account</p>
 
              <Button variant="ghost" className="text-white w-full text-right ">
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
