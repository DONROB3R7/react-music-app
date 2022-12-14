// Imported Css 
import './App.css';


import { useState } from 'react';

// Pages 
import HomePage from './Pages/HomePage';
import TracksPage from './Pages/TracksPage';
import ContactPage from './Pages/ContactPage';
import  AboutPage from './Pages/AboutPage'; 
import Faq from './Pages/Faq';

// Import Router from React 
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {




  return (
    <>  
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <HomePage NavBar={false}  />} />
            <Route path='/tracks' element={<TracksPage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
