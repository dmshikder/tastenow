import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <Categories/>
    <AboutUs/>
    <Footer/> 
     
    </div>
  );
}

export default App;
