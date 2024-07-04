import SearchBar from "../components/searchbar";
import SearchResults from "../components/searchresults";
import NavBar from "../components/navbar";

const Page = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="flex flex-col items-start space-y-8 bg-[#0066CC] p-8 text-left text-slate-50 md:py-12">
          <p className="max-w-[90vw] text-4xl font-bold md:max-w-[70vw] md:text-5xl lg:text-7xl">
            What would you like to learn today?
          </p>
          <div className="min-w-[60vw] rounded-xl lg:p-2 bg-slate-50 text-slate-700 lg:min-w-[42vw]">
            <SearchBar />
          </div>
        </div>

        <SearchResults />
      </main>
    </>
  );
};

export default Page;
