import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import PhotoContainer from "./components/PhotoContainer";
import CatUpload from "./components/CatUpload";


function App() {
  return (
    <div className="bg-amber-100 m-0">
      <div className="w-full">
        <Navbar />
        <Slider />
        <PhotoContainer/>
        
        
      </div>

    </div>
  )
}

export default App;
