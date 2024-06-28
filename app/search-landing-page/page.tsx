import Image from 'next/image'
import searchIcon from '/public/searchIcon.png'
import Link from 'next/link';
import SearchBar from '../components/searchbar';
import Script from 'next/script'

const Page = () => {
    return (
            
            <main>
            <div className='bg-[#0066CC] text-slate-50 flex flex-row items-center px-[10vw] md:px-[18vw] text-center pt-[7vh] md:pt-[10vh] pb-[7vh] space-y-8 md:space-y-16'>
                <div className = 'bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[60vw] lg:min-w-[42vw]'>
                    <script async data-cfasync="true" src="https://cse.google.com/cse.js?cx=413ead2ed4c43412b">
                    </script>
                    <div className="gcse-searchbox"></div>
                </div>
            </div>

            <div>
            <div className="gcse-searchresults"></div>
            </div>
            </main>      
    );
  }
  
  export default Page;