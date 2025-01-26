import React from "react";

import { Text, List } from "components";

const GoalsAndValuesComponent = () => {
  return (
    <>
      <div className="bg-deep_orange-50 flex flex-col font-manrope items-center justify-center py-[40px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-center max-w-[1147px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-10 items-center justify-center w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                  className="text-center text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                  size="txtManropeExtraBold36"
              >
                Goals and Values
              </Text>
              <Text className="text-gray-700 mt-3" size="txtManropeRegular18Gray700">
                EcoRebuild work is defined by key values:
              </Text>
            </div>
            <List
                className="flex flex-col gap-8 items-center w-full"
                orientation="vertical"
            >
              <div className="text-center flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                      className="text-[20px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                  >
                    <strong>• Empowerment:</strong> Equipping communities to take ownership of rebuilding their environment.
                  </Text>
                  <Text
                      className="text-gray-700"
                      size="txtManropeRegular18Gray700"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                  >
                    <strong>• Sustainability:</strong> Developing long-lasting, eco-friendly solutions.
                  </Text>
                  <Text
                      className="text-gray-700"
                      size="txtManropeRegular18Gray700"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                  >
                  <strong>• Solidarity:</strong> Standing by conflict-affected regions, starting with Gaza, to support renewal and justice.
                  </Text>
                  <Text
                      className="text-gray-700"
                      size="txtManropeRegular18Gray700"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                  >
                    <strong>• Frugal Innovation:</strong> Making impactful change possible using the simplest, most accessible resources.
                  </Text>
                  <Text
                      className="text-gray-700"
                      size="txtManropeRegular18Gray700"
                  ></Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalsAndValuesComponent;
