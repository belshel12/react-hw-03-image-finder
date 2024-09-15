import { useEffect, useState } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import getApi from "../../services/getApi";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { ImageGallaryList, GalleryItem } from "./ImageGallery.styled";

const ImageGallery = ({ queryText }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!queryText) {
      return;
    }
    setQuery(queryText);
    setImages([]);
    setPage(1);
  }, [queryText]);

  useEffect(() => {
    if (query !== "") {
      setLoading(true);

      getApi(query, page)
        .then((data) => {
          setTotalImages(data.totalHits);

          if (data.hits.length) {
            setImages((prev) => {
              return [...prev, ...data.hits];
            });
          } else {
            toast("Nothing was found for this query");
            setImages([]);
            setPage(1);
          }
        })
        .catch((error) => {
          toast.error(error.message);
          setImages([]);
          setPage(1);
          return;
        })
        .finally(() => setLoading(false));
    }
  }, [query, page]);

  const handleLoadMore = () => setPage(page + 1);

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
        <Button onLoadMore={handleLoadMore} />
      )}
    </>
  );
};

export default ImageGallery;
