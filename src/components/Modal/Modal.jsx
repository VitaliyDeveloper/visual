import { ModalContainer, Photo } from './Modal.styled';

export const Modal = ({ photo, close }) => {
  return (
    <ModalContainer onClick={close}>
      <div>
        <Photo src={photo} alt="fg" />
      </div>
    </ModalContainer>
  );
};
