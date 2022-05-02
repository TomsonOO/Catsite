import { useContext } from "react"
import ImagesContext from '../context/ImagesContext'

function Footer() {
  const { imagesHorizontal, isLoading } = useContext(ImagesContext)

  return isLoading ? (<div>
    <h1>Loading</h1>
  </div> 
  ) : (
    <div>
      <footer className="text-center bg-amber-200 px-20">
        <div className="container p-6 mx-auto content-center">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 mx-auto content-center opacity-70">
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={imagesHorizontal[4]}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={imagesHorizontal[5]}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={imagesHorizontal[6]}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={imagesHorizontal[7]}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={imagesHorizontal[8]}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>

          </div>
        </div>

        <div className="text-center text-sm p-4 font-Pangolin">
          © 2021 Copyright:
          <a href="#">
            Cat Elements
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
