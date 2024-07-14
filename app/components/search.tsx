"use client"

import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure, useInstantSearch } from "react-instantsearch";

import { Hit } from "./hit";

const searchClient = algoliasearch("COXHC9EOFE", "d1e769c7bf2835b5cd6428fd2e25b372");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="iselp"
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox placeholder="Search here..."/>
        <EmptyQueryBoundary fallback={null}>
          <Hits hitComponent={Hit} />
        </EmptyQueryBoundary>
      </div>
    </InstantSearch>
  );
 
  function EmptyQueryBoundary({ children, fallback }) {
    const { indexUiState } = useInstantSearch();
  
    if (!indexUiState.query) {
      return (
        <>
          {fallback}
          <div hidden>{children}</div>
        </>
      );
    }
  
    return children;
  }
};