"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User, Download, Menu, X } from "lucide-react";
import { useNavigateWithScroll } from "@/utils/navigation";
import { Montserrat } from "next/font/google";

const montserratBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateToSection } = useNavigateWithScroll();

  const handleNavigate = (section: string) => {
    navigateToSection(section);
    setMobileMenuOpen(false); // close menu after navigation
  };

  const handleExternalNavigate = (url: string) => {
    window.location.href = url;
    setMobileMenuOpen(false); // close menu after external redirect
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-bogo-orange-100 z-50">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div
              className="relative w-[200px] h-[55px] cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image
                src="/logo_full_colored.svg"
                alt="Bogo Ninja Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </div>

            {/* <div>
              <div className="flex space-x-1 leading-none">

                <span className={`${montserratBold.className} text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent`}>
                  BOGO
                </span>
                <span className={`${montserratBold.className} text-2xl font-bold text-orange-500`}>
                  NINJA
                </span>
              </div>

              <div className="text-[11.15px] italic px-2 py-0.5 bg-[#122231] text-white rounded-md">
                Your Neighborhood, Your Deals
              </div>
            </div> */}

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleNavigate("how-it-works")}
                className="text-gray-700 hover:text-bogo-orange-600"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavigate("partners")}
                className="text-gray-700 hover:text-bogo-orange-600"
              >
                For Restaurants
              </button>
              <button
                onClick={() =>
                  handleExternalNavigate("https://portal.bogoninja.com")
                }
                className="text-gray-700 hover:text-bogo-orange-600 flex items-center"
              >
                <User className="w-4 h-4 mr-1" />
                Restaurant Login
              </button>
            </div>
            <div className="flex items-center space-x-4 ml-8 pl-6 border-l border-gray-200">
              <Button
                onClick={() => handleNavigate("download")}
                className="bg-bogo-gradient-4 hover:to-bogo-dark-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-bogo-orange-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => handleNavigate("how-it-works")}
                className="text-left text-gray-700 hover:text-bogo-orange-600"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavigate("partners")}
                className="text-left text-gray-700 hover:text-bogo-orange-600"
              >
                For Restaurants
              </button>
              <button
                onClick={() =>
                  handleExternalNavigate("https://portal.bogoninja.com")
                }
                className="text-left text-gray-700 hover:text-bogo-orange-600 flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Restaurant Login
              </button>
              <div className="border-t border-gray-200 my-2"></div>
              <Button
                onClick={() => handleNavigate("download")}
                className="bg-bogo-gradient-3 w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
