import React, { useCallback, useState } from "react";
import Button from "./Button";
import "./SearchBox.css";

function SearchBox({ query, setQuery }: {
  query: string, setQuery: (query: string) => void
}) {

  const [inputVal, setInputVal] = useState(query);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery((e.currentTarget.elements[0] as HTMLInputElement).value);
  }, [setQuery]);

  const handleClear = useCallback(() => {
    setQuery("");
    setInputVal("");
  }, [setQuery]);


  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input type="text"
        placeholder="Search"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button onClick={handleClear}>Clear</Button>
      <Button type="submit">Search</Button>
    </form>
  )
}

export default SearchBox;