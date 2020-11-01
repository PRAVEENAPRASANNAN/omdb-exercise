import React from "react";
import {Link} from 'react-router-dom';
import { InputGroup, Input, Button } from "reactstrap";

export default function SearchSection(props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;

  return (
    <section className="search-section p-4">
      <InputGroup>
        <Input
          placeholder=" Search movie name here..."
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        <Button className="mr-3"color="success" onClick={onClickSearch}>
          Search
        </Button>
        <Link to={`/add-movie`} className="btn bg-info">
          Add Movie
        </Link>
      </InputGroup>
    </section>
  );
}
