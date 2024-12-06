import React from "react";

import { Img, Text } from "components";
import { general } from "general";

const Component8 = () => {
  return (
    <>
      <div className="bg-green-50  flex flex-col font-manrope items-center justify-center py-[40px] md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-center justify-center max-w-[1200px] mx-auto w-full">
          {" "}
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[130px] items-center justify-center w-full">
              <Text
                className="leading-[140.00%] sm:text-[40px] md:text-[46px] my-8 text-[54px] text-center text-gray-900 tracking-[-1.08px]"
                size="txtManropeExtraBold54"
              >
                <>Our Vision</>
              </Text>
            </div>
            <Text
              className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-xl"
              size="txtManropeBold24"
            >
              <>
                Empower communities in conflict-affected areas to reclaim their
                agency and build sustainable futures.
                <br />
                Champion environmental justice as a fundamental human right.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-full">
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-full md:w-full"
                src={general.images.img7}
                alt="rectangle5592"
              />
              <Img
                className="flex-1 md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-full md:w-full"
                src={general.images.img9}
                alt="rectangle5593"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component8;
