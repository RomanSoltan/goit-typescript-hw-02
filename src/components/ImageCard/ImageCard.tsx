import { Photo } from '../../types';
import s from './ImageCard.module.css';

interface ImageCardProps {
  photo: Photo;
}

const ImageCard = ({ photo }: ImageCardProps) => {
  const {
    urls: { small },
    alt_description,
  } = photo;
  return (
    <img
      className={s.img}
      src={small}
      alt={alt_description || 'Photo'}
      loading="lazy"
    />
  );
};
export default ImageCard;
