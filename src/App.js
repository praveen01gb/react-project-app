import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Portfolio } from './Components/Portfolio';
import { Pricing } from './Components/Pricing';
import { Blog } from './Components/Blog';
import { Contact } from './Components/Contact';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
  return (
    
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
