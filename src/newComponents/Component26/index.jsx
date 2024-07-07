import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import { CloseSVG } from "../../assets/images";

const Component26 = ({ faqsList }) => {
  const FAQS = faqsList ?? [];
  const [searchonevalue, setSearchonevalue] = React.useState("");
  function handleNavigate1(url) {
    window.open(url, "_blank");
  }
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
          <Text
            className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-0.92px] w-full"
            size="txtManropeExtraBold46"
          >
            Frequently asked questions
          </Text>
          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
            <Input
              name="search_One"
              placeholder="Search about EcoRebild"
              value={searchonevalue}
              onChange={(e) => setSearchonevalue(e)}
              className="font-semibold p-0 placeholder:text-gray-600 sm:px-5 text-gray-600 text-left text-lg w-full"
              wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-[18px] px-[26px] rounded-[10px] w-full"
              prefix={
                <Img
                  className="mt-auto mb-[3px] cursor-pointer h-6 mr-3.5"
                  src="images/img_search_gray_600.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer h-6 my-auto"
                  onClick={() => setSearchonevalue("")}
                  fillColor="#6e6e6e"
                  style={{
                    visibility:
                      searchonevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
            ></Input>
            <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] py-7 rounded-[10px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  {FAQS.map((faq) => (
                    <React.Fragment key={`LandingPageCard${faq.id}`}>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-2xl tracking-[-0.40px] w-full"
                          size="txtManropeSemiBold20Gray900"
                        >
                          {faq.question}
                        </Text>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-600 w-full"
                            size="txtManropeSemiBold16Gray600"
                          >
                            {faq.answer}
                          </Text>
                          <a
                            className="common-pointer text-base text-gray-600 w-full url-link"
                            size="txtManropeSemiBold16Gray600"
                            onClick={()=>handleNavigate1(faq.url)}
                          >
                            {faq.url}
                          </a>
                        </div>
                      </div>
                      {faq.id !== FAQS[FAQS.length - 1].id && (
                        <Line className="self-center h-px bg-bluegray-100 w-full" />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component26;
