"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useNavigateWithScroll } from "@/utils/navigation";
import { Montserrat } from "next/font/google";

const montserratBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export default function Footer() {
  const { navigateToSection } = useNavigateWithScroll();


  return (
    <footer className="bg-gray-900 text-white pt-12 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* First Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-3">
              <div
                className="relative w-[170px] h-[50px] cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Image
                  src="/logo_white_with_name.svg"
                  alt="Bogo Ninja Logo"
                  width={170}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* <div>
                <div className="flex space-x-1 leading-none">

                  <span className={`${montserratBold.className} text-2xl`}>
                    BOGO
                  </span>
                  <span className={`${montserratBold.className} text-2xl`}>
                    NINJA
                  </span>
                </div>

                <div className={` text-xs italic px-3 py-1 bg-[#122231] text-white rounded-md mt-1`}>
                  Your Neighborhood, Your Deals
                </div>
              </div> */}
            </div>
            <p className="text-gray-400 mb-2">
              Your smartest dining companion for <br />
              discovering amazing local deals.
            </p>
            <p>
              <a
                href="mailto:support@bogoninja.com"
                className="text-gray-400 hover:text-white"
              >
                support@bogoninja.com
              </a>
            </p>

            {/* <p>
              <a
                href="tel:+11234561234"
                className="text-gray-400 hover:text-white"
              >
                +1 (123) 456-1234
              </a>
            </p> */}

            <div className="flex space-x-4 mb-6 mt-5">
              <a
                href="https://www.facebook.com/share/15wKXRoCbb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/bogo.ninja?igsh=OXh5bXViN3l1czRp&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>

              {/* <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>

              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </a> */}
            </div>

          </div>

          {/* Middle Columns */}
          <div className="md:col-span-3 w-full flex flex-wrap justify-between md:flex-none md:grid md:grid-cols-3 md:gap-8">
            {/* Company */}
            {/* <div className="w-[32%] md:w-auto mb-6 md:mb-0">
              <h4 className="font-semibold mb-2 text-sm md:text-base">Company</h4>
              <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                <li>
                  <button onClick={() => navigateToSection("about")} className="hover:text-white">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection("contact")} className="hover:text-white">
                    Contact
                  </button>
                </li>
              </ul>
            </div> */}

            {/* Support */}
            <div className="w-[32%] md:w-auto mb-6 md:mb-0">
              <h4 className="font-semibold mb-2 text-sm md:text-base">Support</h4>
              <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                <li>
                  <button onClick={() => navigateToSection("faq")} className="hover:text-white">
                    FAQ
                  </button>
                </li>
                {/* <li>
                  <button onClick={() => navigateToSection("faq")} className="hover:text-white">
                    Help Center
                  </button>
                </li> */}
                <li>
                  <Link href="https://portal.bogoninja.com" className="hover:text-white">
                    Restaurant Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="w-[32%] md:w-auto mb-6 md:mb-0">
              <h4 className="font-semibold mb-2 text-sm md:text-base">Legal</h4>
              <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link></li>
                <li><Link href="/legal-disclaimer" className="hover:text-white">Legal Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          {/* Fifth Column */}
          <div className="flex flex-col gap-3">
            {/* App Store */}
            <div className="bg-bogo-dark-500 rounded-lg px-3 py-1 flex items-center gap-2 w-fit">
              <div className="w-25 h-30 rounded">
                <Image src="/app_store_logo.png" alt="App Store" width={32} height={30} />
              </div>
              <div className="text-left text-white leading-tight">
                <div className="text-[10px]">Download on the</div>
                <div className="text-xs font-semibold">App Store</div>
              </div>
            </div>
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.bogoninja.app"
              className="bg-bogo-dark-500 rounded-lg px-3 py-1 flex items-center gap-2 w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded">
                <Image src="/play_store_logo.png" alt="Google Play" width={50} height={50} />
              </div>
              <div className="text-left text-white leading-tight">
                <div className="text-[10px]">Download on the</div>
                <div className="text-xs font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-400">
          <p>&copy; 2025 Bogo Ninja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
