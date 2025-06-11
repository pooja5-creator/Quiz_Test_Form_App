import React from 'react'

export default function CurriculumCard({ title, tags, onClick, selected }) {
  return (
  <div 
  className={`cursor-pointer p-5 rounded-lg border-2 transition-all duration-300 
      ${selected ? 'border-gray-100' : 'border-transparent'} bg-gray-900 shadow-md 
      w-[90%] sm:w-[70%] md:w-[330px] flex justify-center items-center gap-3 flex-col`}
     onClick={onClick}>
       <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
       <div className="flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <p key={i} className="bg-gray-100 text-gray-900 px-3 py-1 rounded-[5px]">
             {tag}
           </p>
        ))}
      </div>
    </div>
   ) }
