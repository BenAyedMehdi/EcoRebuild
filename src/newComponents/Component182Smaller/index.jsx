import React from "react";

import { Text, Img } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageCardSmaller from "components/LandingPageCardSmaller";

const Component182Smaller = ({ projects }) => {
  const PROJECTS = projects ?? [];
  return (
    <>
      <div className="flex flex-col items-center gap-[10px] justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex sm:flex-col flex-row gap-[130px] items-center justify-center w-full">
          <Text
            className="leading-[140.00%] sm:text-[40px] md:text-[46px] my-2 text-[54px] text-center text-gray-900 tracking-[-1.08px]"
            size="txtManropeExtraBold54"
          >
            <>Our Approach</>
          </Text>
        </div>
        <Text
          className="leading-[180.00%] pb-4 pl-4 max-w-[821px] text-gray-700 text-l"
          size="txtManropeRegular18Gray700"
        >
          What sets EcoRebuild apart is our commitment to frugal innovation. By
          utilizing practical, cost-effective, and eco-friendly solutions, we
          help communities recover and flourish. Here’s how we do it:
        </Text>
        <div className=" flex flex-col gap-12 items-center justify-center w-full">
          <>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {PROJECTS.map((project) => (
                  <React.Fragment key={`LandingPageCard${project.id}`}>
                    <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      <LandingPageCardSmaller
                        className="bg-white rounded-lg overflow-hidden"
                        project={project}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Component182Smaller;
