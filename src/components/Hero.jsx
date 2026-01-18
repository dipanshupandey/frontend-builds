import React, { useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const totalVideos = 4;
  function handleMiniVideoClick() {
    let updatedIndex = (index + 1) % totalVideos;
    setIndex(updatedIndex);
  }
  return (
    <div className="h-dvh w-screen relative overflow-x-hidden">
      <div className="w-screen h-dvh z-10 relative overflow-hidden rounded-lg bg-blue-75">
        <div
          className="polygon(0 0, 100% 0, 100% 100%, 0 100%)  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute size-64 cursor-pointer overflow-hidden rounded-lg z-20"
          onClick={() => {
            handleMiniVideoClick();
          }}
        >
          <div className="scale-50 origin-center opacity-0 hover:opacity-100 hover:scale-100 transition-all ease-in duration-500">
            <video
              src={`videos/hero-${(index + 1) % totalVideos}.mp4`}
              className="size-64 origin-center scale-150 object-cover object-center"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <video
          src={`videos/hero-${index}.mp4`}
          className="invisible absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-64 object-cover object-center"
          autoPlay
          loop
          muted
        />

        <video
          src={`videos/hero-${index}.mp4`}
          className="absolute left-0 top-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
        />
      </div>
      <h1 className="font-zentry [font-feature-settings:'ss01'_on] text-7xl absolute bottom-5 right-5 z-20 text-blue-75">
      G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
