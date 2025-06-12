import React from 'react';

export default function InputBox({ title, setTitle, error }) {
  return (
    <div className="w-full min-h-[80px]">
      <label className="font-semibold">Quiz Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full py-3 px-3 outline-none border-[1px] rounded-[10px] mt-1 
          ${error ? 'border-red-500' : 'border-teal-200'} 
          bg-white text-zinc-900`}
        placeholder="Enter Quiz Title"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}