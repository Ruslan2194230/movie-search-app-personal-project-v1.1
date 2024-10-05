import { SetURLSearchParams } from "react-router-dom";
import { useState } from "react";
import { InputSearch, ButtonSearch } from "./MoviesForm.styled";

type FormProps = {
  setSearchParams: SetURLSearchParams;
};

export const Form = ({ setSearchParams }: FormProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSearch
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <ButtonSearch type="submit" disabled={!query}>
        Search
      </ButtonSearch>
    </form>
  );
};
