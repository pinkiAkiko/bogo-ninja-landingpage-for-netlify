"use client";

import { useRouter } from "next/navigation";

export function useNavigateWithScroll() {
  const router = useRouter();

  const navigateToSection = (id: string) => {
    if (window.location.pathname === "/") {
      // Already on homepage → smooth scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Redirect to home with hash
      router.push("/#" + id);
    }
  };

  return { navigateToSection };
}
