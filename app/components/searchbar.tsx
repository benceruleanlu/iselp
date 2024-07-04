"use client";

import Image from "next/image";
import searchIcon from "/public/searchIcon.png";
import { useEffect } from "react";

const SearchBar = () => {
  useEffect(() => {
    const inputField = document.getElementById(
      "searchBarText",
    ) as HTMLInputElement;
    console.error(sessionStorage.getItem("currentQuery"));
    const currentQuery = sessionStorage.getItem("currentQuery");
    if (currentQuery && currentQuery !== "undefined") {
      inputField.placeholder = currentQuery;
    } else {
      inputField.placeholder = "Search";
    }
  });

  return (
    <div className="min-w-[60vw] rounded-xl bg-slate-50 p-4 text-slate-700 lg:min-w-[42vw]">
      <form
        className="flex flex-row justify-between"
        method="get"
        action="/search-landing-page"
      >
        <input
          className="fill grow bg-slate-50 text-left focus:outline-none"
          type="text"
          id="searchBarText"
          name="q"
          onChange={(event) =>
            sessionStorage.setItem("currentQuery", event.target.value)
          }
          placeholder="Search"
        />

        <button type="submit">
          <Image src={searchIcon} alt="Icon of a magnifying glass" width={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
