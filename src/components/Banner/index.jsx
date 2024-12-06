import React from "react";
import { Text } from "components";

const Banner = () => {
  return (
    <div className="bg-gray-900 w-full py-2 px-4 text-center fixed top-0 z-50">
      <Text className="text-white-A700 text-sm md:text-xs">
        🇵🇸 Donate to ensure that the people of Gaza have reliable access to
        clean water
      </Text>
    </div>
  );
};

export default Banner;
