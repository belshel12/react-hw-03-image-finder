import { Component } from "react";
import Modal from "../Modal/Modal";
import { GalleryImage } from "./ImageGalleryItem.styled";

class ImageGalleryItem extends Component {
  state = { showModal: false };

  handleToggleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };

  render() {
    const { largeUrl, imgUrl, alt } = this.props;
    return (
      <>
        <GalleryImage src={imgUrl} alt={alt} onClick={this.handleToggleModal} />
        {this.state.showModal && (
          <Modal
            largeImg={largeUrl}
            alt={alt}
            onCloseModal={this.handleToggleModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
