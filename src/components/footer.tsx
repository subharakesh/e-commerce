import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Car,
 
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (

    <footer className="py-10 bg-background ">
      <div className="container mx-auto px-6 bg-[#000923] mt-20 text-white rounded-4 shadow-lg p-8">

        <Card className="border shadow-sm ">
          <CardContent className="p-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

           
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xl font-bold">
                  <Car className="h-6 w-6 text-primary text-[#00C9A7]" />
                  CarVerse
                </div>
                <p className="text-sm text-muted-foreground">
                  Buy, sell, and explore cars with confidence.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Car Categories</h4>
                <Link to="/cars">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-primary cursor-pointer">SUVs</li>
                  <li className="hover:text-primary cursor-pointer">Sedans</li>
                  <li className="hover:text-primary cursor-pointer">Hatchbacks</li>
                  <li className="hover:text-primary cursor-pointer">Electric Cars</li>
                </ul>
                </Link>
              </div>

            
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                 <Link to="/">
                     <li className="hover:text-primary cursor-pointer">
                             Home
                     </li>
                  </Link>
                       <Link to="/cars">
                     <li className="hover:text-primary cursor-pointer">
                             Cars
                     </li>
                  </Link>
                       <Link to="/contact">
                     <li className="hover:text-primary cursor-pointer">
                             Contact
                     </li>
                          <Link to="/about">
                     <li className="hover:text-primary cursor-pointer">
                             About
                     </li>
                  </Link>
                  </Link>

                   
                </ul>
              </div>

            
              <div>
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="flex gap-1 flex-col text-sm text-muted-foreground">
                  <Button size="icon" variant="ghost">
                    
                      <MapPin  className="h-4 w-4 text-[#3b5998]"/>
                      <p>123 Auto Street, Mumbai</p>
                    
                  </Button>
                  <Button size="icon" variant="ghost">
                      <Phone  className="h-4 w-2 text-[#E1306C] mr-11" />
                      <p className="ml-3">+91 98765 4321</p>
                  </Button>
                  <Button size="icon" variant="ghost">
                     <Mail className="h-4 w-4 text-[#1DA1F2]" />
                        <p>contact@carverse.com</p>
                  </Button>
                  
                </div>
              </div>

            </div>

       
            <Separator className="my-6" />

         
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© 2025 CarVerse. All rights reserved.</p>
              <div className="flex gap-4">
                <span className="hover:text-primary cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-primary cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </footer>
  );
}
