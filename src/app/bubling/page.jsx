'use client'

import React from 'react'

export default function EventExample() {
  const handleParentClick = () => {
    console.log('🟦 Parent clicked (bubbling)')
  }

  const handleParentCapture = () => {
    console.log('🟥 Parent clicked (capturing)')
  }

  const handleChildClick = (e) => {
    console.log('🟨 Child clicked')
    // Uncomment to stop bubbling up to parent
    e.stopPropagation()
  }

  return (
    <div
      onClick={handleParentClick}
      // onClickCapture={handleParentCapture}
      className="p-10 bg-blue-100"
    >
      <div
        onClick={handleChildClick}
        className="p-6 bg-yellow-200 cursor-pointer"
      >
        Click Me (Child)
      </div>
    </div>
  )
}