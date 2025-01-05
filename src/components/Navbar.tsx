"use client"; // Ensure the component is client-rendered
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={77}
            height={77}
          />
          <div className="text-4xl font-bold text-sky-950"> Blogs</div>
        </Link>
        {/* Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-sky-950 hover:scale-105 hover:font-semibold transition-transform duration-300 text-2xl"
          >
            {" "}
            Home
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
       
          <Sheet>
            <SheetTrigger asChild>
              <div
                id="menu-button"
                className="text-black focus:outline-none cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                    
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Abiha Blogs</SheetTitle>
              </SheetHeader>
              <div className="space-y-4">
                <Link href="/" className="block hover:text-gray-400">
                  Home
                </Link>
      
              </div>
             
            </SheetContent>

          </Sheet>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
