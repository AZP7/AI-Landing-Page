import React from 'react'

function Chat({ className, pathClassName }) {
  return (
    <svg
      className={className}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="89.000000pt"
      height="72.000000pt"
      viewBox="0 0 89.000000 72.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,72.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          className={pathClassName}
          d="M271 577 c-7 -9 -12 -94 -13 -250 l-3 -236 50 49 51 50 186 0 c148 0 188 3 197 14 17 20 17 352 0 372 -17 20 -451 21 -468 1z m439 -187 l0 -150 -187 0 c-159 0 -189 -2 -205 -17 -17 -16 -18 -10 -18 150 l0 167 205 0 205 0 0 -150z"
        />
        <text
          x="445"
          y="380"
          textAnchor="middle"
          fontSize="80"
          fill="black"
          fontFamily="Arial"
        >
          Hello
        </text>
        <text
          x="445"
          y="460"
          textAnchor="middle"
          fontSize="80"
          fill="black"
          fontFamily="Arial"
        >
          World
        </text>
      </g>
    </svg>
  )
}

export default Chat
