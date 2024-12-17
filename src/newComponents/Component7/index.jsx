import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Img, Text, List, Input } from "components";
import Component71 from "newComponents/Component71";
import { general } from "general";

const Component7 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[80px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
              <Text
                className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                size="txtManropeExtraBold36WhiteA700"
              >
                News & Bolg
              </Text>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                onClick={() => navigate("/BlogPage")}
                rightIcon={
                  <Img
                    className="h-6 mb-[3px] ml-2"
                    src="images/img_arrowright.svg"
                    alt="arrow_right"
                  />
                }
              >
                <div className="font-bold text-left text-lg text-orange-A700">
                  Explore All
                </div>
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <Component71
                article={{
                  name: "Participation in the Climate Justice Camp (CJC)",
                  image:
                    "https://www.moroccoworldnews.com/wp-content/uploads/2022/09/climate-justice-camp-to-bring-together-hundreds-of-young-climate-enthusiasts-in-tunisia-800x378.jpeg",
                  date: "September 2024",
                  link: "/BlogDetails",
                }}
              />
              {/* todo: Add more blogs */}
              <Component71
                article={{
                  name: "RCOY MENA 2024 Presentation: Showcasing Our Soil Detoxification Project",
                  image: general.images.img6,
                  date: "21 May 2024",
                  link: "/BlogDetails",
                }}
              />
              <Component71
                article={{
                  name: "First EcoRebuild Talk: Transforming Grief into Action and Revolution",
                  image: general.images.img7,
                  date: "27 June 2024",
                  link: "/BlogDetails",
                }}
              />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component7;
