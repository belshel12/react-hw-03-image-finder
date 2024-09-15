import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { AppWrap } from "./App.styles";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const handleSearchSubmit = (query) => {
    setQuery(query);
  };

  return (
    <AppWrap>
      <Toaster />
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery queryText={query} />
    </AppWrap>
  );
};

export default App;
