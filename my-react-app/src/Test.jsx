// src/components/CardSection.jsx
import React from 'react'
import { card1 } from './assets/assets'

function CardSection() {
  return (
    <section className="w-full flex justify-center items-center py-10 bg-black">
      <div
        className="w-[300px] h-[200px] bg-cover bg-center bg-no-repeat rounded-xl shadow-lg"
        style={{ backgroundImage: `url(${card1})` }}
      >
        <div className="w-full h-full bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center rounded-xl">
          <h2 className="text-white text-xl font-bold">Card Title</h2>
          <p className="text-gray-300 text-sm mt-2 px-4 text-center">This is a card using an SVG as a background image.</p>
        </div>
      </div>
    </section>
  )
}

export default CardSection
