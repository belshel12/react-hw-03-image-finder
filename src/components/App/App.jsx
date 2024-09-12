import { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { AppWrap } from "./App.styles";
import { Toaster } from "react-hot-toast";

class App extends Component {
  state = {
    query: "",
  };

  handleSearchSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <AppWrap>
        <Toaster />
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery queryText={this.state.query} />
      </AppWrap>
    );
  }
}

export default App;
