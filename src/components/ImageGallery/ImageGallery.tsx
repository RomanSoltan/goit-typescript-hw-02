import { Photo } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
}

const ImageGallery = ({ photos, openModal }: ImageGalleryProps) => {
  return (
    <ul className={s.list}>
      {photos.map(photo => (
        <li className={s.item} key={photo.id} onClick={() => openModal(photo)}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
