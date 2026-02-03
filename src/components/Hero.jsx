import React, { useState,useRef } from "react";
import Button from "./Button";
import {TiLocationArrow} from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [hasClicked,setHasClicked]=useState(false);
  const [isLoaded,setIsLoaded]=useState(0);
  const totalVideos = 4;
  const nextVedioRef=useRef(null);
  
  function handleMiniVideoClick() {
    let updatedIndex = (index + 1) % totalVideos;
    setHasClicked(true);
    setIndex(updatedIndex);
  }

  useGSAP(()=>{
    if(hasClicked){
      gsap.set('#next-video',{visibility:"visible"});
      gsap.to('#next-video',{
        transformOrigin:"center center",
        scale:1,
        width:"100%",
        height:"100%",
        duration:1,
        ease:"power1.inOut",
        onStart:()=>nextVedioRef.current.play(),
      });
      gsap.from("#current-video",{
        transformOrigin:"center center",
        scale:0,
        duration:1.5,
        ease:"power1.inOut"
      });
    }
  },{dependencies:[index],
  revertOnUpdate:true});
  
  useGSAP(()=>{
    gsap.set("#video-frame",{
      clipPath: "polygon(14% 0, 80% 0, 90% 90%, 0% 100%)",
      borderRadius: "0% 0% 40% 10%"
    })
    gsap.from("#video-frame",{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius:"0% 0% 0% 0%",
      ease:"power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    })
  })

  return (
    <>
    {true &&<Loader/>}
    <div className="h-dvh w-screen relative overflow-x-hidden">
      <div id="video-frame" className="w-screen h-dvh z-10 relative overflow-hidden rounded-lg bg-blue-75">
        <div
          className="polygon(0 0, 100% 0, 100% 100%, 0 100%)  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute size-64 cursor-pointer overflow-hidden rounded-lg z-30"
          onClick={() => {
            handleMiniVideoClick();
          }}
        >
          <div className="scale-50 origin-center opacity-0 hover:opacity-100 hover:scale-100 transition-all ease-in duration-500">
            <video
              src={`videos/hero-${(index + 1) % totalVideos}.mp4`}
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <video
          ref={nextVedioRef}
          src={`videos/hero-${index}.mp4`}
          id="next-video"
          className="z-20 invisible absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-64 object-cover object-center"
          loop
          muted
        />

        <video
          src={`videos/hero-0.mp4`}
          className="absolute left-0 top-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
        />
      
      <h1 className=" font-zentry [font-feature-settings:'ss01'_on] text-9xl absolute bottom-5 right-5 z-30 text-blue-75">
      G<b>A</b>MING
      </h1>
      <div className="absolute top-0 left-0 z-20">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="text-8xl text-blue-100 font-zentry [font-feature-settings:'ss01'_on]">
            redefi<b>n</b>e
            </h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
            id="watch-trailer"
            title="Watch trailer"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
            />
        </div>
      </div>
      </div>
      
      <h1 className="font-zentry [font-feature-settings:'ss01'_on] text-9xl absolute bottom-5 right-5 text-black">
      G<b>A</b>MING
      </h1>
    </div>
    </>
  );
};

export default Hero;
