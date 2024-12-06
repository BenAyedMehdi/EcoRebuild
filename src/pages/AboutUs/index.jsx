import React, { useEffect } from "react";

import LandingPageHeader from "components/LandingPageHeader";
import Component8 from "newComponents/Component8";
import Component10 from "newComponents/Component10";
import Component4 from "newComponents/Component4";
import Component21 from "newComponents/Component21";
import Component9 from "newComponents/Component9";
import LandingPageFooter from "components/LandingPageFooter";
// import DemoCarousel from "components/DemoCarousel";
import Component7 from "newComponents/Component7";
// import Component3 from "newComponents/Component3";
import Component5 from "newComponents/Component5";
import { Img } from "components";
import { general } from "general";
import Component182Smaller from "newComponents/Component182Smaller";
import Component3EcoRebuild from "newComponents/Component3EcoRebuild";

const AboutUsPage = ({ projects }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone items-center justify-start mx-auto w-auto sm:w-full md:w-full ">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader />
          {/* <div className="flex flex-1 flex-col items-center justify-start mx-auto w-full">
            <Img
              className="h-[450px] sm:h-auto object-cover w-full"
              src={general.images.img2}
              alt="coverimage"
            />
          </div> */}
        </div>

        <div className="bg-sage-50 flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-6">
            Our Mission for Change
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl text-center">
            Building sustainable futures through environmental renewal and
            community empowerment.
          </p>
        </div>

        <Component5 />
        <Component8 />
        <Component182Smaller projects={projects} />
        <Component3EcoRebuild />
        <Component10
          img={general.images.img3}
          title={"Challenges and Triumphs"}
          paragraph={
            "Managing such a dynamic initiative has its hurdles—from logistical complications to emotional tolls. Yet, what drives us is our unwavering commitment to the cause and a profound sense of unity. The result? Projects that are not just solutions but symbols of resilience."
          }
        />
        <Component9 />
        {/* <div className="w-[40rem] md:w-[35] sm:w-full">
          <DemoCarousel />
        </div> */}
        <LandingPageFooter />
      </div>
    </>
  );
};

export default AboutUsPage;
