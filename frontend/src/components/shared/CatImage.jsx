import React from 'react'

function CatImage({ children }) {
  return (
    <div className="h-96 w-96">
      { children }
    </div>
  )
}

export default CatImage