'use client'

import Image from 'next/image';
import searchIcon from '/public/searchIcon.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {

    const router = useRouter();
    const [searchQuery, updateSearchQuery] = useState();


    const redirectToLandingPage = e => { // send people to the landing page
        e.preventDefault();
        router.push('/search-landing-page' + '?' + searchQuery);
    }

    return (
    <div className = 'bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[60vw] lg:min-w-[42vw]'>
        <form className = "flex flex-row justify-between" onSubmit = {redirectToLandingPage}>
            <input className = 'text-left focus:outline-none fill bg-slate-50 grow'
            type="text" 
            onChange={(event) => updateSearchQuery(event.target.value)}
            id="searchBar" 
            name ="searchBar" 
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

/*SearchBar.addEventListener("spacebar", (e) => {
    console.log("SOMEHTING HAPPENED!!!")
})*/

function callAPI() {

}


export default SearchBar;