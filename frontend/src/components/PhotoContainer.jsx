import { useEffect, useState } from "react"
import React from "react"
import CatImage from "./shared/CatImage" 

function PhotoContainer() {


  return (
    <div className="mb-14 px-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" >
        
        <CatImage>
          <img src={require(".././images/vertical/1.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/2.jpg")} className="card" />
        </CatImage>

        <CatImage>
          <img src={require(".././images/vertical/3.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/4.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/5.jpg")} className="card" />
        </CatImage>

        <CatImage>
          <img src={require(".././images/vertical/6.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/7.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/8.jpg")} className="card" />
        </CatImage>

        <CatImage>
          <img src={require(".././images/vertical/9.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/10.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/11.jpg")} className="card" />
        </CatImage>

        <CatImage>
          <img src={require(".././images/vertical/12.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/13.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/14.jpg")} className="card" />
        </CatImage>

        <CatImage>
          <img src={require(".././images/vertical/15.jpg")} className="card" />
        </CatImage>
        <CatImage>
          <img src={require(".././images/vertical/16.jpg")} className="card" />
        </CatImage>
     </div>

    </div>
  )
}

export default PhotoContainer 