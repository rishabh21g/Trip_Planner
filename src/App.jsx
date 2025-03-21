import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full opacity-50 bg-[radial-gradient(circle_300px_at_30%_300px,#fbfbfb36,#000)]"></div>
      
   
      <div className="relative w-full h-full">
        <Header />
        <Hero />
        <About/>
        <Footer/>
       
      </div>
    </div>
  );
};

export default App;
