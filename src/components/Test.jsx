import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Form from './Form';
import { useTheme } from '../context/ThemeContext';

export default function Test() {
  const headingRefs = useRef([]);
  const paraRefs = useRef([]);
 const {isDark,toggleTheme}=useTheme()
  const headingText = 'Effortless Test Creation with Smart Blueprints';
  const paraText =
    'Generate tests instantly using standard blueprints for academics and hiring';

  const headingLetters = headingText.split('');
  const paraLetters = paraText.split('');

  useEffect(() => {
    headingRefs.current = headingRefs.current.slice(0, headingLetters.length);
    paraRefs.current = paraRefs.current.slice(0, paraLetters.length);
  }, []);

  const handleMouseMove = (e, refs, isHeading = true) => {
    refs.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = 100;

      if (distance < radius) {
        const moveY = isHeading ? -1 * (1 - distance / radius) * 30 : (1 - distance / radius) * 20;
        gsap.to(el, {
          y: moveY,
          scale: isHeading ? 1 : 1.05,
          duration: 0.2,
          ease: 'power2.out',
        });
      } else {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });
  };

  const resetGSAP = (refs) => {
    refs.forEach((el) => {
      if (el) {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    });
  };

  return (
    <main className={`w-full min-h-[200px] pb-[10px] mx-auto flex flex-col items-center 
    gap-5 `}>
      <div className="w-full bg-zinc-900 md:rounded-br-full md:rounded-bl-full h-[250px]
       flex flex-col justify-center items-center gap-5 boxShadow relative">
<div className={`w-[35px] flex justify-center items-center absolute right-5 top-3
  text-2xl cursor-pointer  boxShadow2 hover:text-white transition-all duration-200 
  ease-linear py-[6px] rounded-[5px]`} onClick={toggleTheme}>
  <i class={`fa-solid fa-${isDark?'moon text-white':'sun text-amber-400 '}`}></i></div>
        {/* Heading */}
        <h1
          onMouseMove={(e) => handleMouseMove(e, headingRefs.current, true)}
          onMouseLeave={() => resetGSAP(headingRefs.current)}
          className="text-gray-100 text-[24px] px-3 sm:text-3xl font-bold text-center leading-8 flex flex-wrap justify-center"
        >
          {headingLetters.map((char, i) => (
            <span
              key={`h-${i}`}
              ref={(el) => (headingRefs.current[i] = el)}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Paragraph */}
        <p
          onMouseMove={(e) => handleMouseMove(e, paraRefs.current, false)}
          onMouseLeave={() => resetGSAP(paraRefs.current)}
          className="text-teal-200 opacity-80 text-[14px] sm:text-[20px] capitalize w-[90%] sm:w-[80%] xl:w-[34%] text-center flex
           flex-wrap justify-center"
        >
          {paraLetters.map((char, i) => (
            <span
              key={`p-${i}`}
              ref={(el) => (paraRefs.current[i] = el)}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>
      </div>

      <div className={`w-[60%] h-[1px] ${!isDark?"lineBackground":"lineBackground2"}`}></div>

      <div className="w-full min-h-[200px] mt-5 py-[10px]">
        <Form isDark={isDark}/>
      </div>
    </main>
  );
}
