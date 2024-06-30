import SearchBar from '../components/searchbar';
import SearchResults from '../components/searchresults';
import NavBar from '../components/navbar';

const Page = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className='bg-[#0066CC] text-slate-50 flex flex-col items-start px-[5vw] md:px-[2vw] text-left pt-[7vh] md:pt-[10vh] pb-[7vh] space-y-8 md:space-y-16'>
                    <p className='text-4xl md:text-5xl lg:text-7xl font-bold max-w-[90vw] md:max-w-[70vw]'>What would you like to learn today?</p>
                    <div className = 'bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[60vw] lg:min-w-[42vw]'>
                        <SearchBar/>
                    </div>
                </div>

                <SearchResults/>
            </main>
        </>
    );
}

export default Page;