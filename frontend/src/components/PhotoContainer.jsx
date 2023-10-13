import { useContext } from "react"
import CatImage from "./shared/CatImage" 
import ImagesContext from '../context/ImagesContext'


function PhotoContainer() {

  const { imagesVertical, isLoading } = useContext(ImagesContext)


  return isLoading ? (<div>
    <h1>Loading</h1>
  </div> 
  ) : ( 
    <div className="mb-14 px-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" >

        {imagesVertical.map((img, index) =>
          <CatImage>
            <img src={img} alt={`Image ${index}`} className="card" />
          </CatImage>   
          )}

     </div>

    </div>
  )
}

export default PhotoContainer 