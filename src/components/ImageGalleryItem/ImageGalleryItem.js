import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled.';
import { ImageModal } from '../Modal/Modal';

export const ImageGalleryItem = ({ src, alt }) => {
const [isModalOpen, setIsModalOpen] = useState(false)

const   openModal = () => {
  setIsModalOpen(true)
};

const closeModal = e => {
  setIsModalOpen(false)
};


  return (
    <>
      <ImageGalleryItemLi onClick={openModal}>
        <ImageGalleryItemImage src={src} alt={alt} />
      </ImageGalleryItemLi>
      {/* {isModalOpen && (
        <ImageModal
          imgURL={src}
          alt={alt}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )} */}

<ImageModal
          imgURL={src}
          alt={alt}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
    </>
  );

}

ImageGalleryItem.propTypes = {
  isModalOpen: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};
