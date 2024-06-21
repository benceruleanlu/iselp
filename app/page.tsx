import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-w-screen">
      <NavBar />
      
      <main className='min-h-[100vh] border-black border border-dashed'>
        {/* Placeholder for page content */}
      </main>

      <Footer />
    </div>
  );
}
