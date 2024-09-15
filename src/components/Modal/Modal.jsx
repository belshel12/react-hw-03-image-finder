import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalWrap } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ largeImg, alt, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.code === "Escape" && onCloseModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const onClickBackdrop = (e) => {
    e.target === e.currentTarget && onCloseModal();
  };

  return createPortal(
    <Backdrop onClick={onClickBackdrop}>
      <ModalWrap>
        <img src={largeImg} alt={alt} />
      </ModalWrap>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
