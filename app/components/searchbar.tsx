'use client'

import Image from 'next/image';
import searchIcon from '/public/searchIcon.png';
import { useEffect } from 'react';

const SearchBar = () => {

    useEffect(() => {
        const inputField = document.getElementById("searchBarText") as HTMLInputElement;
        console.error(sessionStorage.getItem("currentQuery"));
        const currentQuery = sessionStorage.getItem("currentQuery");
        if (currentQuery && currentQuery !== 'undefined') {
            inputField.placeholder = currentQuery;
        }
        else {
            inputField.placeholder = "Search";
        }
    })
    
    return (
    <div className = 'bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[60vw] lg:min-w-[42vw]'>
        <form className = "flex flex-row justify-between" method = "get" action = "/search-landing-page">

            <input className = 'text-left focus:outline-none fill bg-slate-50 grow'
            type="text" 
            id="searchBarText" 
            name ="q"
            onChange={(event) => sessionStorage.setItem("currentQuery", event.target.value)}
            placeholder = "Search"/>

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