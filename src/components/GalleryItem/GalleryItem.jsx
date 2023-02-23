import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

import { GalleryItemStyle, Photo } from './GalleryItem.styled';

export const GalleryItem = ({ photo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <>
      <GalleryItemStyle key={photo.id} onClick={handleModal}>
        <Photo src={photo.url} alt={photo.name} width="200" height="200" />
      </GalleryItemStyle>
      {showModal && <Modal photo={photo.url} close={handleModal} />}
    </>
  );
};
