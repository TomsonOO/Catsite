import Navbar from "./components/Navbar";
import React from 'react'
import Slider from "./components/Slider";
import PhotoContainer from "./components/PhotoContainer";
import Footer from "./components/Footer"
import { ImagesProvider } from './context/ImagesContext'

function App() {


  return (
    <ImagesProvider>
      <div className="bg-amber-100 m-0">
        <div className="w-full">
          <Navbar />
          <Slider />
          <PhotoContainer />        
          <Footer />
        </div>
      </div>
    </ImagesProvider>
  )
}

export default App;
