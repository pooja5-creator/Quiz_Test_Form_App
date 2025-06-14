// components/ReusableForm.jsx
import React from 'react';

export default function ReusableForm({ onSubmit, children, isDark }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-[95%] lg:w-[70%] ${!isDark ? "bg-white text-zinc-900" : "bg-zinc-950 text-white"} 
      min-h-[200px] rounded-[10px] px-[10px] sm:px-[70px] py-[40px] space-y-4`}
    >
      {children}
    </form>
  );
}
