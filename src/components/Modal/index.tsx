import React from 'react';
import {
  CloseButton,
  Content,
  Header,
  ModalWrap,
  OverLay,
  ModalFooter,
} from './styles';
import { FiX } from 'react-icons/fi';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = ({
  title,
  children,
  headerContent,
  footerContent,
  handleShowModal,
  showModal,
}) => {
  return (
    <>
      <OverLay hidden={showModal}>
        <ModalWrap>
          <Header>{headerContent && headerContent}</Header>

          <Content>
            <CloseButton onClick={handleShowModal}>
              <FiX size={20} color="#000" />
            </CloseButton>
            {children}
          </Content>
          <ModalFooter>{footerContent && footerContent}</ModalFooter>
        </ModalWrap>
      </OverLay>
    </>
  );
};

export default Modal;
