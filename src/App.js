import './App.css';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import User from './Component/User';

function App() {
  return (
    <div className='bg-[#d3ddea]'>
    <Navbar/>
    <Banner/> 
    <User/>
    <Footer/>
    </div>
  );
}

export default App;
