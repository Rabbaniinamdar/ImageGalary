import React from 'react';
import ImageGallery from './components/ImageGallery';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <ImageGallery />
    </div>
  );
}

export default App;
