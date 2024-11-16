import React from "react";

import { Button, Img, Text, CheckBox } from "components";
import { general } from "general";

const Component502 = () => {
  return (
    <>
      <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
        <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                size="txtManropeExtraBold36"
              >
                Know EcoRebuild better
              </Text>
              <Text
                className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-l"
                size="txtManropeRegular18Gray700"
              >
                EcoRebuild is a collaborative initiative aimed at fostering
                sustainable rebuilding in conflict-affected regions. Our focus
                is on creating practical, eco-friendly solutions that empower
                communities to rebuild and thrive. We believe in the power of
                innovation and community-driven efforts to create a positive
                impact.
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 p-10 md:flex-none h-[389px] sm:h-auto max-h-[489px] object-cover rounded-[10px] sm:w-[] md:w-[]"
          src={general.images.img1}
          alt="rectangleTwenty_One"
        />
      </div>
    </>
  );
};

export default Component502;
