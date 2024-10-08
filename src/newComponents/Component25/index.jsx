import React from "react";

import { Button, Img, Text, List } from "components";

const Component25 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope gap-[30px] items-center justify-start md:px-5 w-auto sm:w-full">
        <Img
          className="h-[480px] w-[464px]"
          src="images/img_frame1000001686.svg"
          alt="frame1000001686"
        />
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.56px] w-auto"
            size="txtManropeExtraBold28"
          >
            Something wrong!
          </Text>
          <Button
            className="border border-gray-600 border-solid cursor-pointer flex items-center justify-center min-w-[157px] px-[15px] py-[17px] rounded-[10px]"
            rightIcon={
              <Img
                className="h-5 mb-[5px] ml-2.5"
                src="images/img_arrowright_gray_900.svg"
                alt="arrow_right"
              />
            }
          >
            <div className="font-bold text-gray-900 text-left text-lg">
              Homepage
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Component25;
