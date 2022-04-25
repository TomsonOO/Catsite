 import React from 'react'
 
 function CatUpload() {
  const imageHandler = event => {
    console.log(event.target.files[0])
  }

   return (
      <div>
        <form>
          <label>
            Name:
            <input type="file" onChange={imageHandler} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
 }
 
 export default CatUpload