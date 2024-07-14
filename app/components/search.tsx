"use client"

import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "./hit";

const searchClient = algoliasearch("COXHC9EOFE", "d1e769c7bf2835b5cd6428fd2e25b372");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="iselp"
    >
      <Configure hitsPerPage={3} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};