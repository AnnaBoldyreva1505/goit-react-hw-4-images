import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, imgURL, alt, onClose }) => {
  return (
<Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <>
            <img src={imgURL} alt={alt} width="600" />
            {/* <button onClick={this.closeModal}>Close</button> */}
          </>
        </Modal>
  );
};

ImageModal.propTypes = {
  imgURL: PropTypes.string,
  alt: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};