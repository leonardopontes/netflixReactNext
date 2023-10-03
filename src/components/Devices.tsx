import React from 'react';

const Devices = () => {
    return (
  <div>    
    <div className="w-full h-2 mt-5 bg-[#262626]"></div>  
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col-reverse ss:flex-row py-16 ss:py-0 text-white justify-between ss:gap-[100px] max-w-[1300px] mx-auto w-full items-center ss:pb-[40px]">
          <div className="relative w-full ss:w-[40%] mt-5 ss:mt-20">
            <img className="w-full z-40 h-full relative ss:left-[25%]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""></img>
            <video className="absolute z-0 top-[35%] max-h-[49%] max-w-[70%] left-[50%] ss:left-[74%] -translate-x-1/2 -translate-y-1/2" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" autoPlay muted loop></video>
          </div>
          <div className="ss:w-[52%] w-full w-full text-center ss:text-left mt-20">
            <h1 className="ss:ml-10 pb-2 font-bold text-3xl ms:text-5xl">Assista onde quiser</h1>
            <p className="ss:ml-10 text-lg mt-4 ms:text-2xl">Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
          </div>
        </div>
      </div>  
    </div>      
  )
};
  
export default Devices;