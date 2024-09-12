import { Component } from "react";
import {
  SearhWrap,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from "./Searchbar.styled";
import toast from "react-hot-toast";

class Searchbar extends Component {
  state = { value: "" };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.trim().toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value === "") {
      toast("Enter a search query");
      return;
    }
    this.props.onSubmit(value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <SearhWrap>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <span>Search</span>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearhWrap>
    );
  }
}

export default Searchbar;
