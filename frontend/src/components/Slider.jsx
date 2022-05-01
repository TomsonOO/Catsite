import { useContext } from "react"
import ImagesContext from '../context/ImagesContext'

function Slider() {
  const { imagesHorizontal, isLoading } = useContext(ImagesContext)
  
  return isLoading ? (<div>
    <h1>Loading</h1>
  </div> 
  ) : ( 
    <div className="w-96 mx-auto mt-8" >
      <div className="carousel rounded-full h-64">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imagesHorizontal[0]} className="mx-auto"/> 
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imagesHorizontal[1]} className="mx-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={imagesHorizontal[2]} className="mx-auto" /> 
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imagesHorizontal[3]} className="mx-auto"/>
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