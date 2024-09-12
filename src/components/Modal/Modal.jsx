import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalWrap } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    e.code === "Escape" && this.props.onCloseModal();
  };

  onClickBackdrop = (e) => {
    e.target === e.currentTarget && this.props.onCloseModal();
  };

  render() {
    const { largeImg, alt } = this.props;
    return createPortal(
      <Backdrop onClick={this.onClickBackdrop}>
        <ModalWrap>
          <img src={largeImg} alt={alt} />
        </ModalWrap>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
