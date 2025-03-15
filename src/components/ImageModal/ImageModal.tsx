import s from './ImageModal.module.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    backgroundColor: '#888888',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, .6)',
    zIndex: 0,
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, photo }) => {
  if (!isOpen || !photo) return null;
  const {
    urls: { regular },
    alt_description,
  } = photo;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Photos Modal"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={regular} alt={alt_description || 'Photo'} />
    </Modal>
  );
};
export default ImageModal;
