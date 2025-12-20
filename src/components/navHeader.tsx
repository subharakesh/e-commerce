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
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <header className="bg-white sticky top-0 z-50 flex justify-between items-center p-4 border-b border-border">
      <Link to='/'>
      <div className="flex items-center gap-2">
       
       <Car className="text-[#00C9A7]  w-8 h-8 stroke-[2] transition-transform duration-300 hover:rotate-12 ml-32 " />
       
        <h1 className="text-2xl font-extrabold font-serif text-black   ">CarVerse</h1>
       
      </div>
           </Link>
      



     
      <nav className="hidden md:flex  items-center gap-4 font-bold text-black font-serif">
       <Link to='/cars'>
       <Button variant="ghost">Cars</Button>
       </Link>
        
         <Link to='/about'>
         <Button variant="ghost">About</Button>
         </Link>
        

       <Link to='/contact'>
         <Button variant="ghost">Contact</Button>
         </Link>
        

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-10 h-10 bg-[#00022E]/10 text-[#1C2951] mr-32" > 
              <div className="w-10 h-10 rounded-full bg-[#99EFDE] flex items-center justify-center ">
  <span className="font-semibold text-black">S</span>
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

    
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white">
              <GiHamburgerMenu size={24} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#00022E] text-white w-full max-w-full h-full">
            <div className="flex flex-col  space-y-4 mt-6">
              
              <Button variant="ghost" className="text-white w-full text-right">
                About
              </Button>
              <Button variant="ghost" className="text-white w-full text-right">
                Contact
              </Button>

         


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
