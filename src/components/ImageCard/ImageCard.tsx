import s from './ImageCard.module.css';

const ImageCard = ({ photo }) => {
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
