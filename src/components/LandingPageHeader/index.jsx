import React, { useState, useEffect } from "react";
import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";
import { general } from "general";
import Banner from "components/Banner";

const NAVIGATION_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Projects" },
  { path: "/faq", label: "FAQ" },
  { path: "/contactpage", label: "Contact" },
];

const LandingPageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <Banner />
        <header className="bg-white-A700 w-full shadow-sm mt-[32px]">
          <div className="flex items-center justify-between w-full px-6 py-[19px]">
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-[11px]">
              <Link to="/" aria-label="Home">
                <Img
                  className="h-[60px] w-[70px]"
                  src={general.logo}
                  alt="EcoRebuild Logo"
                />
              </Link>
              <Link to="/">
                <Text
                  className="text-red-600 text-3xl"
                  size="txtManropeExtraBold28"
                >
                  {general.name}
                </Text>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="flex items-center">
                <ul className="flex gap-2">
                  {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path}>
                        <Text
                          className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                          size="txtManropeSemiBold16"
                        >
                          {item.label}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Mobile Hamburger Icon */}
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div
                  className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${
                    isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-gray-900 mb-1.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-gray-900 transition-all ${
                    isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </button>
            )}

            {/* Call to Action Button - Always visible */}
            <div className={isMobile ? "ml-auto mr-4" : ""}>
              <Link to="/contactpage" aria-label="Donate">
                <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 px-4 rounded-[10px] text-base text-center text-white-A700 hover:bg-gray-700 transition-colors duration-300">
                  Donate
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobile && isMenuOpen && (
            <div className="bg-white-A700 shadow-lg absolute left-0 right-0 z-50 transition-all duration-300 ease-in-out">
              <nav className="py-4">
                <ul className="flex flex-col">
                  {NAVIGATION_ITEMS.map((item) => (
                    <li
                      key={item.path}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block"
                      >
                        <Text
                          className="text-base cursor-pointer py-4 px-6 text-gray-900 hover:bg-gray-100 transition-colors duration-300 block w-full"
                          size="txtManropeSemiBold16"
                        >
                          {item.label}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[calc(80px+32px)]"></div>
    </>
  );
};

export default LandingPageHeader;
