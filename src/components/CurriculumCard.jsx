import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function CurriculumCard({ title, tags, onClick, selected }) {
  const {isDark}=useTheme()
  return (
  <div 
  className={`cursor-pointer px-3 py-5 sm:p-5 rounded-lg border-2 transition-all duration-300 
    
      ${selected ? 'boxShadow2 scale-104' : 'scale-100'} shadow-md  
      w-[90%] sm:w-[70%] md:w-[330px] flex justify-center items-center gap-3 flex-col
      hover:scale-104 transition-all duration-200 ease-linear 
      ${!isDark?"bg-white text-gray-900 border-gray-100":"bg-zinc-900 text-white"}
      `}
     onClick={onClick}>
       <h1 className="text-xl font-semibold">{title}</h1>
       <div className="flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <p key={i} className={`px-3 py-1 rounded-[5px] 
          ${isDark?"text-zinc-900 bg-teal-200":"bg-zinc-900 text-teal-200"}`}>
             {tag}
           </p>
        ))}
      </div>
    </div>
   ) }
