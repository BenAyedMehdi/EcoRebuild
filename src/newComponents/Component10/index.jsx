import React from "react";

import { Button, Img, Text, List } from "components";
import { general } from "general";

const Component10 = ({ img, title, paragraph }) => {
  return (
    <>
      <div className="bg-green-50 flex flex-col font-manrope items-center justify-center py-[40px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-between max-w-[1250px] mx-auto w-full">
          <Img
            className="flex-1 md:flex-none h-[350px] sm:h-auto max-h-[350px] p-1 object-cover rounded-[10px] sm:w-[] md:w-[]"
            src={img}
            alt="rectangleTwenty_One"
          />
          <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                {title}
              </Text>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
              <Text
                className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-l"
                size="txtManropeRegular18Gray700"
              >
                {paragraph}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component10;
