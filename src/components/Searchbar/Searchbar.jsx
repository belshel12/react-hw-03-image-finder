import { useState } from "react";
import {
  SearhWrap,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from "./Searchbar.styled";
import toast from "react-hot-toast";

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setValue(value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      toast("Enter a search query");
      return;
    }
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <SearhWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <span>Search</span>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </SearhWrap>
  );
};

export default Searchbar;
