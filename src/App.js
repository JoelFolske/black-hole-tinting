import React from 'react';
import { Routes, Route} from 'react-router-dom'

import Home from './routes/Home';
import Pricing from './routes/Pricing';
import OurWork from './routes/OurWork';
import Contact from './routes/Contact'

function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/ourwork' element={<OurWork />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
    </>
  );
}

export default App;
