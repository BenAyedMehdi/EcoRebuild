import React from "react";

import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";
import { general } from "general";

const Component9_1 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-11 items-start justify-start w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                We believe in innovation
                <br />
                <br />
              </Text>
              <Text
                className="leading-[180.00%] max-w-[531px] md:max-w-full text-gray-700 text-l"
                size="txtManropeRegular18Gray700"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                Welcome to EcoRebuild, where resilience meets action and the concept of “Now is the time for anger to be transformed into a revolution” drives everything we do. We believe in the power of <strong>community-led</strong> solutions to address the <strong>environmental</strong> and humanitarian challenges faced by <strong>conflict-affected</strong> areas.
                {"\n\n"}Explore our site to learn about how we turn adversity into empowerment and create sustainable change on the ground.
              </Text>
            </div>
            {/* //Todo: place the button with the second component */}
            {/* <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col  justify-center sm:px-5 text-base text-center px-6 py-[7px] rounded-[10px] w-full">
              <Button className="bg-white-A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-[9px] right-[0] rounded-[10px]">
                <Link to="/about">
                  <Text
                    className="text-xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    Learn more
                  </Text>
                </Link>
              </Button>
            </div> */}

            <div className="flex flex-row gap-4 items-start justify-start w-full">
              {/* //? Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers */}
              <a target="_blank" rel="noreferrer" href={general.instagram}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="60"
                  height="60"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
              <Link to="/contactpage" className="w-full">
                <Button className="bg-gray-900 cursor-pointer font-semibold ml-4 py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
            <Img
              className="flex-1 md:flex-none h-auto max-h-[489px] object-cover rounded-[10px] sm:w-[] md:w-[]"
              src={general.images.img1}
              alt="rectangleTwenty"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component9_1;
