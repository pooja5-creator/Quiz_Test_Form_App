import React from 'react'

export default function CurriculumCard({ title, tags, onClick, selected }) {
  return (
  <div 
  className={`cursor-pointer px-3 py-5 sm:p-5 rounded-lg border-2 transition-all duration-300 
    
      ${selected ? 'boxShadow2 scale-104' : 'scale-100'} bg-white shadow-md text-gray-100 
      w-[90%] sm:w-[70%] md:w-[330px] flex justify-center items-center gap-3 flex-col
      hover:scale-104 transition-all duration-200 ease-linear 
      `}
     onClick={onClick}>
       <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
       <div className="flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <p key={i} className="bg-zinc-900 text-teal-200 px-3 py-1 rounded-[5px]">
             {tag}
           </p>
        ))}
      </div>
    </div>
   ) }
