'use client'

import { useEffect } from 'react';

const SearchResults = () => {
    useEffect(() => {
        const script = document.createElement("script");
        document.head.append(script);
        script.src = "https://cse.google.com/cse.js?cx=413ead2ed4c43412b";
    }, []);
    return (
        <div className ="gcse-searchresults-only"></div>
    )
}

export default SearchResults;