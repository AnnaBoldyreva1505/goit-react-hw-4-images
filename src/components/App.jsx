import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../api';
import { AppStyle } from './App.styled';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  // const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    getImg(searchQuery, page);
  }, [searchQuery, page]);

  const getImg = async (searchQuery, page) => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);
    try {
      const { hits, totalHits } = await fetchImg(searchQuery, page);

      if (hits.length === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      if (page === 1) {
        toast.success(`Hooray! We found ${totalHits} images!`);
      }
      setImages(prevImages => [...prevImages, ...hits]);
      setError('');
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppStyle>
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery images={images} />

      {isLoading && <Loader />}
      {images.length > 0 && images.length % 12 === 0 && !isLoading && (
        <Button onLoadMore={handleLoadMore} />
      )}
      {error && <p>ERROR!</p>}
      <Toaster />
    </AppStyle>
  );
};
