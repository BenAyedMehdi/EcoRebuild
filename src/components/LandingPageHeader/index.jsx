import React from "react";
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
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <Banner />
        <header className="bg-white-A700 flex items-center justify-between py-[19px] w-full shadow-sm mt-[32px]">
          <div className="flex items-center justify-between w-full px-6">
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

            {/* Navigation Links */}
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

            {/* Call to Action Button */}
            <div className=" sm:block">
              <Link to="/contactpage" aria-label="Donate">
                <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 px-4 rounded-[10px] text-base text-center text-white-A700 hover:bg-gray-700 transition-colors duration-300">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[calc(80px+32px)]"></div>
    </>
  );
};

export default LandingPageHeader;
