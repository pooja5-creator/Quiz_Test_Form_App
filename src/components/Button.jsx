import React from 'react'

export default function Button() {
  return (
    <button
            type="submit"
            className='w-full border border-teal-200 hover:text-zinc-900 font-semibold text-[18px]
             text-center mt-5 py-3 rounded-[10px] text-zinc-900 transition-all 
             duration-150 cursor-pointer hover:bg-teal-200
             bg-white'
          >
            Generate Question
          </button>
  )
}
