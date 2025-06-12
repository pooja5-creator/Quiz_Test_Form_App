import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RepelEffect() {
  const containerRef = useRef(null);
  const ballRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      ballRefs.current.forEach((ball) => {
        const rect = ball.getBoundingClientRect();
        const ballX = rect.left + rect.width / 2;
        const ballY = rect.top + rect.height / 2;

        const dx = ballX - mouseX;
        const dy = ballY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 120;

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const repelStrength = (maxDistance - distance) * 0.4;

          const moveX = Math.cos(angle) * repelStrength;
          const moveY = Math.sin(angle) * repelStrength;

          gsap.to(ball, {
            x: moveX,
            y: moveY,
            duration: 0.3,
            ease: "power3.out",
          });
        } else {
          gsap.to(ball, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-gray-900 flex items-center justify-center gap-5"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (ballRefs.current[i] = el)}
          className="w-16 h-16 bg-green-400 rounded-full"
        />
      ))}
    </div>
  );
}
