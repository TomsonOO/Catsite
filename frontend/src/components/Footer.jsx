import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-center bg-amber-200 px-20">
        <div className="container p-6 mx-auto content-center">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 mx-auto content-center opacity-70">
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={require(".././images/horizontal/30.jpg")}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={require(".././images/horizontal/31.jpg")}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={require(".././images/horizontal/32.jpg")}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={require(".././images/horizontal/33.jpg")}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 w-32 mx-auto">
              <img
                src={require(".././images/horizontal/34.jpg")}
                className="w-full h-21 rounded-md shadow-lg"
              />
            </div>

          </div>
        </div>

        <div className="text-center text-sm p-4 font-Pangolin">
          © 2021 Copyright:
          <a href="https://tailwind-elements.com/">
            Cat Elements
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
