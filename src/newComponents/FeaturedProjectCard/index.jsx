import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const FeaturedProjectCard = ({ project }) => {
  const projectChoice = () => {
    console.log(project.id);
    localStorage.setItem("projectId", project.id);
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-[27px] h-full items-start justify-start w-full">
        <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-5 py-[20px] rounded-[10px] w-full min-h-[400px]">
          {" "}
          {/* Adjust min-h-[350px] based on your needs */}
          <Img
            className="h-[260px] rounded-[10px] object-cover w-full"
            alt="image"
            src={project?.images.img1}
          />
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row gap-3 py-[20px] items-center justify-start w-full">
              <Text
                className="flex-1 text-lg text-gray-900 w-auto"
                size="txtManropeSemiBold16"
                style={{ minHeight: "54px" }} // This ensures space for two lines of text
              >
                {project?.name}
              </Text>
            </div>
            <div className="flex flex-row gap-[31px] items-center justify-start w-full">
              <Link to="/projectdetails" className="w-full">
                <Button
                  onClick={projectChoice}
                  className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-white-A700 w-full"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjectCard;
