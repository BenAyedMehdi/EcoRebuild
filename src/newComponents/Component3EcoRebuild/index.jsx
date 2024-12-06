import React from "react";

import { Button, Img, Text, List } from "components";

const Component3EcoRebuild = () => {
  return (
    <>
      <div className="bg-green-50 flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 items-center px-[70px] py-[10px] justify-center w-full">
          <Text
            className="text-5xl sm:text-[32px] md:text-[34px] pb-4 text-gray-900 tracking-[-0.72px] w-auto"
            size="txtManropeExtraBold36"
          >
            Our Team and Spirit
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] py-[20px] items-start justify-start max-w-[1200px] mx-auto w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img
                  className="h-8"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  +22
                </Text>
                <Text
                  className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                  size="txtManropeSemiBold20"
                >
                  Youth members from 12 different countries
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img
                  className="h-8"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  Jordan
                </Text>
                <Text
                  className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                  size="txtManropeSemiBold20"
                >
                  Our headquarters and center of operations
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img className="h-8" src="images/img_reply.svg" alt="reply" />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  +4
                </Text>
                <Text
                  className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                  size="txtManropeSemiBold20"
                >
                  Core teams led by dedicated champions
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Component3EcoRebuild;
