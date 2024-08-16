import React, { useState } from "react";
import { Button, Img, Text, List } from "components";
import { projectsList } from "mock/projects";
import ImageModal from "components/ImageModal";

const Component14 = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const project = item ?? projectsList[0];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-5 sm:px-1 px-[20px] w-full">
        <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <Img
              className="h-[550px] cursor-pointer md:h-auto object-cover rounded-[10px] w-full"
              src={project?.images.img1}
              alt="rectangle5610"
              onClick={() => handleImageClick(project?.images.img1)}
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-6 h-[550px] md:h-auto items-start justify-start w-auto sm:w-full">
          {project?.images.img2 && (
            <Img
              className="h-[263px] cursor-pointer sm:h-auto object-cover rounded-[10px] w-full"
              src={project?.images.img2}
              alt="rectangle5611"
              onClick={() => handleImageClick(project?.images.img2)}
            />)}
            {project?.images.img3 && (
              <div className="h-[263px] relative w-96 sm:w-full">
                <Img
                  className="h-[263px] cursor-pointer m-auto object-cover rounded-[10px] w-full"
                  src={project?.images.img3}
                  alt="rectangle5612"
                  onClick={() => handleImageClick(project?.images.img3)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedImage && (
        <ImageModal onClose={closeModal}>
          <img src={selectedImage} alt="Selected" className="w-full h-auto" />
        </ImageModal>
      )}
    </>
  );
};

export default Component14;
