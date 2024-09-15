import { useState } from "react";
import Modal from "../Modal/Modal";
import { GalleryImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ largeUrl, imgUrl, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryImage src={imgUrl} alt={alt} onClick={handleToggleModal} />
      {showModal && (
        <Modal largeImg={largeUrl} alt={alt} onCloseModal={handleToggleModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;
