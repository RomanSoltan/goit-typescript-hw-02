export interface Photo {
  id: string;
  alt_description: string;
  small: string;
}

export interface ErrorProps {
  message?: string;
}

export interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
}
