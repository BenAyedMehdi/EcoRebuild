import React, { useEffect } from "react";

const ImageModal = ({ children, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="pt-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-8 rounded relative max-w-4xl overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-400"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ImageModal;