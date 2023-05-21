import React from 'react'
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryGrid } from './ImageGallery.styled'

export function ImageGallery({images}) {
  return (
    <ImageGalleryGrid>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
        />
      ))}
    </ImageGalleryGrid>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
}


