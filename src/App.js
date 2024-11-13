import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Slider from './components/Slider'
import Products from './components/Products'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <Slider />
      <Products />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
