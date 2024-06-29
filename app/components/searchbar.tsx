'use client'

import Image from 'next/image';
import searchIcon from '/public/searchIcon.png';
import Link from 'next/link';
import { useEffect } from 'react';
const SearchBar = () => {

    function evaluatePlaceholder() {
        if (sessionStorage.getItem("currentQuery")) {
            return sessionStorage.getItem("currentQuery");
        }
        else {
            return "Search";
        }
    }

    return (
    <div className = 'bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[60vw] lg:min-w-[42vw]'>
        <form className = "flex flex-row justify-between" method = "get" action = "/search-landing-page">
            <input className = 'text-left focus:outline-none fill bg-slate-50 grow'
            type="text" 
            id="searchBar" 
            name ="q"
            onChange={(event) => sessionStorage.setItem("currentQuery", event.target.value)}
            placeholder = {evaluatePlaceholder()}/>

            <button type="submit">
            <Image 
            src={searchIcon}
            alt='Icon of a magnifying glass'
            width={24}
            />
            </button>
            
        </form>
    </div>
    ); 
}

export default SearchBar;