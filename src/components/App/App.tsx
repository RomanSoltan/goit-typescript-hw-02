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
import { Photo } from '../../types';

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasMorePhotos, setHasMorePhotos] = useState<boolean>(true);

  useEffect(() => {
    if (!query) return;
    const getData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        setIsError(false);
        const results: Photo[] = await fetchImages(query, page);

        if (!results.length) {
          setHasMorePhotos(false);
        }
        setPhotos(prev => [...prev, ...results]);
      } catch (error: unknown) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery: string): void => {
    if (query === newQuery) {
      toast.error('Request already exist');
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setHasMorePhotos(true);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (photo: Photo): void => {
    if (isModalOpen) return;
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className={s.container}>
      <SearchBar onSubmit={handleSetQuery} />
      <ImageGallery photos={photos} openModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {hasMorePhotos && photos.length > 0 && (
        <LoadMoreBtn onClick={onLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
}

export default App;
