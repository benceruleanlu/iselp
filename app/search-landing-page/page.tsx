import Image from 'next/image'
import searchIcon from '/public/searchIcon.png'
import Link from 'next/link';
import SearchBar from '../components/searchbar';

const Page = () => {
    return (
        <div className='bg-[#0066CC] text-slate-50 flex flex-column justify-left items-center px-[10vw] md:px-[18vw] text-center pt-[7vh] md:pt-[10vh] pb-[7vh] space-y-8 md:space-y-16'>
            <SearchBar/>
        </div>
    );
  }
  
  export default Page;