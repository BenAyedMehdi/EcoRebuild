import React, { useRef, useMemo } from "react";

import { createColumnHelper } from "@tanstack/react-table";
import { Button, Img, Text, List, ReactTable } from "components";

const Component23 = () => {
  // const tableData = useRef([
  //   {
  //     fullname: "Zakir Hossen",
  //     title: "UI, UX Designer",
  //     emailaddress: "uxdesigner@gmail.com",
  //     phonenumber: "+88 222 5554 444",
  //   },
  //   {
  //     fullname: "Zakir Hossen",
  //     title: "UI, UX Designer",
  //     emailaddress: "uxdesigner@gmail.com",
  //     phonenumber: "+88 222 5554 444",
  //   },
  //   {
  //     fullname: "Zakir Hossen",
  //     title: "UI, UX Designer",
  //     emailaddress: "uxdesigner@gmail.com",
  //     phonenumber: "+88 222 5554 444",
  //   },
  // ]);
  // const tableColumns = useMemo(() => {
  //   const tableColumnHelper = createColumnHelper();
  //   return [
  //     tableColumnHelper.accessor("fullname", {
  //       header: (info) => (
  //         <Text
  //           className="flex-1 min-w-[234px] py-2.5 text-gray-900 text-xs"
  //           size="txtManropeSemiBold12Gray900"
  //         >
  //           Full Name
  //         </Text>
  //       ),
  //       cell: (info) => (
  //         <Text
  //           className="flex-1 pb-[9px] pt-[17px] text-base text-gray-600"
  //           size="txtManropeSemiBold16Gray600"
  //         >
  //           {info?.getValue()}
  //         </Text>
  //       ),
  //     }),
  //     tableColumnHelper.accessor("title", {
  //       header: (info) => (
  //         <Text
  //           className="flex-1 min-w-[234px] py-2.5 text-gray-900 text-xs"
  //           size="txtManropeSemiBold12Gray900"
  //         >
  //           Title
  //         </Text>
  //       ),
  //       cell: (info) => (
  //         <Text
  //           className="flex-1 pb-[7px] pt-[19px] text-base text-gray-600"
  //           size="txtManropeSemiBold16Gray600"
  //         >
  //           {info?.getValue()}
  //         </Text>
  //       ),
  //     }),
  //     tableColumnHelper.accessor("emailaddress", {
  //       header: (info) => (
  //         <Text
  //           className="flex-1 min-w-[234px] py-2.5 text-gray-900 text-xs"
  //           size="txtManropeSemiBold12Gray900"
  //         >
  //           Email Address
  //         </Text>
  //       ),
  //       cell: (info) => (
  //         <Text
  //           className="flex-1 pb-[7px] pt-[19px] text-base text-gray-600"
  //           size="txtManropeSemiBold16Gray600"
  //         >
  //           {info?.getValue()}
  //         </Text>
  //       ),
  //     }),
  //     tableColumnHelper.accessor("phonenumber", {
  //       header: (info) => (
  //         <Text
  //           className="flex-1 min-w-[214px] py-2.5 text-gray-900 text-xs"
  //           size="txtManropeSemiBold12Gray900"
  //         >
  //           Phone Number
  //         </Text>
  //       ),
  //       cell: (info) => (
  //         <Text
  //           className="flex-1 pb-[9px] pt-[17px] text-base text-gray-600"
  //           size="txtManropeSemiBold16Gray600"
  //         >
  //           {info?.getValue()}
  //         </Text>
  //       ),
  //     }),
  //   ];
  // }, []);

  return (
    <>
      <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-10 items-start justify-start w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
            size="txtManropeExtraBold36"
          >
            Participation in the Climate Justice Camp (CJC)
          </Text>
          <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-4 items-end justify-between w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[550px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="https://www.moroccoworldnews.com/wp-content/uploads/2022/09/climate-justice-camp-to-bring-together-hundreds-of-young-climate-enthusiasts-in-tunisia-800x378.jpeg"
                  alt="climate-justice-camp-img"
                />
                <Text
                  className="leading-[180.00%] text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  <>
                    Attending the Climate Justice Camp (CJC) in Tanzania was a
                    transformative experience for EcoRebuild and a significant
                    milestone for our initiative. Organized by @roots.people,
                    this event was more than just a gathering; it was a vibrant
                    space where climate leaders, activists, and advocates from
                    around the world came together to share their experiences,
                    exchange ideas, and forge meaningful collaborations.
                    Representing EcoRebuild at the camp underscored our
                    commitment to intertwining climate action with social and
                    humanitarian causes, especially in conflict-affected
                    regions.
                    <br />
                  </>
                </Text>
              </div>
              {/*todo: Social media sharing   */}
              {/* <div className="flex md:flex-1 flex-col items-center justify-start w-[11%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col items-center justify-start w-[71%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start w-auto"
                        style={{
                          backgroundImage:
                            "url('images/img_frame1000001658.svg')",
                        }}
                      >
                        <Text
                          className="text-gray-900 text-xs w-auto"
                          size="txtManropeSemiBold12Gray900"
                        >
                          Share this
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-8 w-8"
                    src="images/img_twitter_bluegray_100.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-8 w-8"
                    src="images/img_reddit.svg"
                    alt="reddit"
                  />
                </div>
              </div> */}
            </div>
            <div className="flex flex-col gap-12 items-start justify-start w-full">
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Connecting with Global Changemakers{" "}
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[180.00%] max-w-[936px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      The camp brought together an inspiring array of
                      participants, each contributing unique perspectives shaped
                      by their local contexts. Being in this dynamic environment
                      allowed us to discuss EcoRebuild’s mission and projects,
                      such as solar-powered water wells in Gaza and soil
                      remediation initiatives, with like-minded individuals who
                      share the belief that climate action must prioritize
                      equity and justice. These conversations deepened our
                      understanding of how interconnected climate and social
                      justice are, especially in regions where environmental
                      challenges exacerbate humanitarian crises
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[936px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      One of the most impactful aspects of the CJC was the
                      opportunity to share the story of EcoRebuild’s inception
                      and growth. We highlighted how our initiative emerged as a
                      response to the environmental and human toll of conflict,
                      focusing on community empowerment through frugal,
                      sustainable innovations. This resonated strongly with
                      participants who work with marginalized communities facing
                      similar challenges.
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col gap-10 items-start md:px-10 sm:px-5 px-[51px] py-[39px] rounded-[10px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Workshops and Skills Exchange
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      The CJC was designed to be more than just a platform for
                      dialogue; it included practical workshops and training
                      sessions that equipped attendees with new tools and
                      strategies. Participating in sessions on renewable energy,
                      community mobilization, and grassroots advocacy provided
                      valuable insights that we can integrate into EcoRebuild’s
                      ongoing and future projects. These workshops underscored
                      the importance of fostering local knowledge and involving
                      communities in the solutions that impact their lives
                      directly.
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      We also shared our experiences in implementing low-cost,
                      high-impact projects, such as using native plants for soil
                      detoxification and eco-friendly construction materials.
                      This exchange sparked valuable discussions on best
                      practices and potential collaborations, enriching our
                      approach to scaling EcoRebuild’s efforts.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Expanding Our Network
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-full"
                      size="txtManropeRegular18Gray600"
                    >
                      The CJC served as a platform for building connections with
                      organizations and individuals who are equally passionate
                      about climate resilience and social justice. These new
                      relationships have opened doors for future collaborations
                      and potential partnerships that align with EcoRebuild’s
                      mission. For instance, discussions with grassroots leaders
                      and climate advocates illuminated shared challenges and
                      inspired joint solutions that can be adapted across
                      different regions.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Reinforcing Our Vision
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      One of the key takeaways from participating in the CJC was
                      the renewed sense of purpose it brought to EcoRebuild. The
                      gathering emphasized the idea that collective action is
                      crucial in the face of global climate challenges. It was a
                      reminder that now is the time for anger and frustration to
                      transform into a revolution of resistance and constructive
                      change—a concept that lies at the heart of EcoRebuild’s
                      ethos.
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      We returned from the CJC not only with expanded knowledge
                      and a wider network but also with a deepened conviction to
                      push forward with our projects, advocate for environmental
                      justice, and uplift the voices of those living through and
                      rebuilding from conflict.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    A Call to Action
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-full"
                      size="txtManropeRegular18Gray600"
                    >
                      As we continue our journey, the lessons learned and the
                      relationships built at the CJC will guide us. We aim to
                      inspire more youth to join our cause, expand our renewable
                      energy projects, and develop partnerships that empower
                      communities in need. Our participation at the CJC affirmed
                      that EcoRebuild is not alone; we are part of a global
                      movement working tirelessly to create a more just,
                      sustainable future for all.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
              With every step, we build a greater community dedicated to a
              sustainable and just future.
            </blockquote>
            {/* Images */}
            {/* <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Images
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  Being a fast loading and more secure website, you can choose a
                  static website for beginner to medium level workload.
                  Hopefully, you have got the answer to what is a static website
                  and why should you use it. Decide carefully does static sites
                  are enough for your need.
                </Text>
              </div>
              <Img
                className="h-[532px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_rectangle5619_532x996.png"
                alt="rectangle5619"
              />
            </div> */}

            {/* Lists */}
            {/* <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    Lists
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Being a fast loading and more secure website, you can choose
                    a static website for beginner to medium level workload.
                    Hopefully, you have got the answer to what is a static
                    website and why should you use it. Decide carefully does
                    static sites are enough for your need.
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Less Server-side Dependencies
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Flexibility: More Freedom to Develop Websites
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Security: A More Secure Website
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Scalability: Capability to Handle Massive Traffic
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Hosting and Pricing: Saves Your Budget For Good
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg"
                    size="txtManropeBold18Gray600"
                  >
                    01.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Performance: Faster Loading Speed
                  </Text>
                </div>
                <div className="flex flex-row gap-[11px] items-center justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeBold18Gray600"
                  >
                    02.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Less Server-side Dependencies
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeBold18Gray600"
                  >
                    03.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Flexibility: More Freedom to Develop Websites
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeBold18Gray600"
                  >
                    04.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Security: A More Secure Website
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeBold18Gray600"
                  >
                    05.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Scalability: Capability to Handle Massive Traffic
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeBold18Gray600"
                  >
                    06.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Hosting and Pricing: Saves Your Budget For Good
                  </Text>
                </div>
              </div>
            </div> */}

            {/* Link */}
            {/* <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                size="txtManropeExtraBold28"
              >
                Link
              </Text>
              <Text
                className="leading-[180.00%] text-gray-600 text-lg"
                size="txtManropeRegular18Gray600"
              >
                <>
                  Yes, a static website may have all its benefits, but is it
                  suitable for you? That’s a big question. It depends on why you
                  are going to build a website, what purpose it will serve.
                  That’s why you must when you should use a static website.
                  <br />
                  The followings are the common applications where using the
                  static website is the best choice. - Blog sites- - Small
                  business websites - Websites Under-Development - Personal
                  Portfolio sites - Websites that contain basic information
                </>
              </Text>
            </div> */}

            {/* Tables */}
            {/* <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Tables
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  The followings are the common applications where using the
                  static website is the best choice. - Blog sites- - Small
                  business websites.
                </Text>
              </div>
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-10 sm:px-5 py-[50px] rounded-[10px] w-full">
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
              </div>
            </div> */}
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                size="txtManropeBold24Gray900"
              >
                Writen by
              </Text>
              <div className="flex flex-col items-center justify-between md:pr-10 sm:pr-5 pr-[568px] w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start max-w-[836px] w-full">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_profilepicture.png"
                    alt="profilepicture"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-[165px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24Gray900"
                    >
                      Kendah
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtManropeSemiBold16Gray600"
                    >
                      Co-founder
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                    <div className="bg-bluegray-100 h-2 rounded-[50%] w-2"></div>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtManropeSemiBold16Gray600"
                    >
                      Nov 20, 2024
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component23;
