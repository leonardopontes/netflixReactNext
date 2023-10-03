import React from 'react';

const Tv = () => {
    return (
    <div className="w-11/12 mx-auto flex ss:flex-row flex-col text-white justify-between py-16 ss:gap-[30px] max-w-[1100px] mx-auto items-center">
      <div className="ss:w-[52%] w-full text-center ss:text-left">
        <h1 className="title pb-3 mt-10 font-bold text-3xl ms:text-5xl">Aproveite na TV</h1>
        <p className="subtitle text-lg mt-4 ms:text-2xl">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
      </div>
      <div className="relative ss:w-[48%] w-full">
        <img className="relative z-40 w-full h-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""></img>
        <video className="absolute z-0 top-[48%] max-h-[54%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay muted loop></video>
      </div>
    </div>
  )
};
  
export default Tv;