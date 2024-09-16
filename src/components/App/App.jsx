import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { AppWrap } from "./App.styles";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <AppWrap>
      <Toaster />
      <Searchbar onSubmit={setQuery} />
      <ImageGallery query={query} />
    </AppWrap>
  );
};

export default App;
