'use client'

import { useEffect, useState } from 'react'
import { randomColorArray, randomNumber } from '../helpers'

const NUM_COLORS = 4

export default function Home() {
  const [colors, setColors] = useState<string[]>([])
  const [rndIdx, setRndIdx] = useState(0)
  const [isWrongAnswer, setIsWrongAnswer] = useState(false)

  useEffect(() => {
    if (colors.length === 0) setColors(randomColorArray(NUM_COLORS))
    setRndIdx(randomNumber(NUM_COLORS))
  }, [colors])

  useEffect(() => {
    if (isWrongAnswer) {
      setTimeout(() => {
        setIsWrongAnswer(false)
      }, 1000)
    }
  }, [isWrongAnswer])

  return (
    <div className='max-w-3xl mx-auto p-12'>
      <div className='w-full flex flex-col items-center'>
        <p>{colors[rndIdx]}</p>
        <div className='w-40 h-40 mm-12' style={{ backgroundColor: colors[rndIdx] }} />
        {isWrongAnswer ? (
          <p className='m-4 text-xs text-red-600'>wrong answer</p>
        ) : (
          <p className='m-4 text-xs text-green-600'>guess the color</p>
        )}
        <div className='w-80 grid grid-cols-2 gap-8'>
          {colors.map((color, idx) => (
            <button
              key={color}
              className='bg-gray-100 p-2 border border-gray-200 rounded-md hover:bg-gray-200'
              onClick={() => {
                if (idx === rndIdx) {
                  setColors([])
                  setIsWrongAnswer(false)
                } else {
                  setIsWrongAnswer(true)
                }
              }}>
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
