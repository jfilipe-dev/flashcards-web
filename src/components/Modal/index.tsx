import React from 'react';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

import { Header, Title, Close, Content, Footer, Container } from './styles';
import Button from '../Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  text: string;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  text,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick
      style={{
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container>
        <Header>
          <Title>Exclusão</Title>
          <Close>
            <IoMdClose size={24} onClick={onClose} />
          </Close>
        </Header>

        <Content>{text}</Content>

        <Footer>
          <Button label="Sim" error onClick={onConfirm} />
          <Button
            label="Cancelar"
            style={{ marginLeft: 24 }}
            onClick={onClose}
          />
        </Footer>
      </Container>
    </Modal>
  );
};

export default ConfirmModal;
