import React from 'react'
import CatImage from './shared/CatImage'

//const [horizontalCats, setHorizontalCats] = useState([''])


function Slider() {
  return (
    <div className="w-128 mx-auto mt-8" >
      <div className="carousel rounded-full  h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={require(".././images/horizontal/26.jpg")} className="mx-auto"/> 
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={require(".././images/horizontal/27.jpg")} className="mx-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={require(".././images/horizontal/28.jpg")} className="mx-auto" /> 
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={require(".././images/horizontal/29.jpg")} className="mx-auto"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider