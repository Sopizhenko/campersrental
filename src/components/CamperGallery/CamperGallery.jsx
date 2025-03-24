import css from "./CamperGallery.module.css";
import Image from "../Shared/Image/Image";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedCamperImages } from "../../redux/campersSlice.js";

const CamperGallery = () => {
  const { images, alt } = useSelector(selectSelectedCamperImages);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image, index) => (
          <li key={index} className={css.galleryItem}>
            <Image
              src={image.thumb}
              alt={alt}
              onClick={() => openModal(image.original)}
            />
          </li>
        ))}
      </ul>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Image src={selectedImage} alt={alt} />
      </Modal>
    </div>
  );
};

export default CamperGallery;
