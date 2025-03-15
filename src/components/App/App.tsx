import { useState, useEffect } from 'react';
import s from './App.module.css';
import { fetchImages } from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import toast from 'react-hot-toast';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const results = await fetchImages(query, page);
        setPhotos(prev => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = newQuery => {
    if (query === newQuery) {
      toast.error('Request already exist');
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = photo => {
    if (isModalOpen) return;
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className={s.container}>
      <SearchBar onSubmit={handleSetQuery} />
      <ImageGallery photos={photos} openModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
}

export default App;
