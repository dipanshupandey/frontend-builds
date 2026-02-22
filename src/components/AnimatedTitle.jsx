import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({text,containerClass}) => {
  const containerRef=useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          x: 0,
          y: 0,
          z: 0,
          rotateY: 0,
          rotateX: 0,
          ease: "power2.inOut",
          stagger: 0.02,
          
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);
  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
     {text.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          
          {line.split(" ").map((word, idx) => (
            <div
              key={idx}
              className="animated-word inline-block [font-feature-settings:'ss01'_on]"
              dangerouslySetInnerHTML={{ __html: word+ "&nbsp;" }}
            />
          ))}
        </div>
      ))}
</div>
  )
}

export default AnimatedTitle