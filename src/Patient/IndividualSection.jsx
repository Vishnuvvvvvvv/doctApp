import React from 'react'
import "./IndividualSection.css"
function IndividualSection({heading}) {
  return (
  <>
    <div className="individual-section">
        <h1>{heading}</h1>
    </div>
  </>
  )
}

export default IndividualSection