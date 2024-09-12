import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import getApi from "../../services/getApi";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { ImageGallaryList, GalleryItem } from "./ImageGallery.styled";

class ImageGallery extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    totalImages: 0,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { queryText } = this.props;
    const { page, query } = this.state;

    prevProps.queryText !== queryText && this.setState({ query: queryText });

    prevState.query !== query && this.setState({ page: 1, images: [] });

    if (
      (query !== prevState.query && page === 1) ||
      (page !== prevState.page && query === prevState.query)
    ) {
      try {
        this.setState({ loading: true });
        const response = await getApi(query, page);
        this.setState({
          loading: false,
          totalImages: response.totalHits,
        });

        if (response.hits.length) {
          this.setState((prev) => ({
            images: [...prev.images, ...response.hits],
          }));
        } else {
          toast("Nothing was found for this query");
          this.setState({ images: [], page: 1 });
        }
      } catch (error) {
        toast.error(error.message);
        this.setState({ images: [], page: 1, loading: false });
        return;
      }
    }
  }

  handleLoadMore = () => this.setState((prev) => ({ page: prev.page + 1 }));

  render() {
    const { images, loading, totalImages } = this.state;
    return (
      <>
        {loading && <Loader />}

        <ImageGallaryList>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <GalleryItem key={id}>
              <ImageGalleryItem
                largeUrl={largeImageURL}
                imgUrl={webformatURL}
                alt={tags}
              />
            </GalleryItem>
          ))}
        </ImageGallaryList>

        {images.length > 0 && images.length < totalImages && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}

export default ImageGallery;
