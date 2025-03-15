import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ photos, openModal }) => {
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
