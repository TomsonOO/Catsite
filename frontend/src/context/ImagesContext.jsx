import { createContext, useState, useEffect } from "react"

const ImagesContext = createContext()


export const ImagesProvider = ({ children }) => {

  const [imagesVertical, setImagesVertical] = useState([])
  const [imagesHorizontal, setImagesHorizontal] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {  
    fetchImages() 
  },[]) 

  const fetchImages = async () => {
    var url = "https://cat-storage.s3.amazonaws.com/media/images/vertical/"
    for(var i=0; i<16; i++){
      const fullUrl = url + i + ".jpg"
      const img = await fetch(fullUrl)
      const imgBlob = await img.blob()
      const imgUrl = URL.createObjectURL(imgBlob)
      imagesVertical.push(imgUrl)
    }
    url = "https://cat-storage.s3.amazonaws.com/media/images/horizontal/"
    for(var i=26; i<36; i++){
      const fullUrl = url + i + ".jpg"
      const img = await fetch(fullUrl)
      const imgBlob = await img.blob()
      const imgUrl = URL.createObjectURL(imgBlob)
      imagesHorizontal.push(imgUrl)
    }
    setIsLoading(false)
  }

  return (
    <ImagesContext.Provider 
      value={{
        imagesVertical,
        imagesHorizontal,
        fetchImages,
        isLoading
      }}
    >
      {children}
    </ImagesContext.Provider>
  )

}

export default ImagesContext