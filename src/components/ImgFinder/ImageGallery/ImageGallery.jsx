import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import s from './imageGallery.module.css';

function ImageGallery({ items, onClick }) {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImage={largeImageURL}
        onClick={onClick}
      />
    );
  });

  return <ul className={s.gallery}>{elements}</ul>;
}

export default ImageGallery;
