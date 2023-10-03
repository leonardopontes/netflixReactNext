import React from 'react';

const Download = () => {
    return (
    <div>  
      <div className="w-full h-2 mt-5 bg-[#262626]"></div>
      <div className="w-11/12 mx-auto">
      <div className="flex flex-col-reverse ss:flex-row ms:mt-14 py-16 ms:py-0 text-white justify-between ms:gap-[100px] max-w-[1300px] mx-auto w-full items-center ms:pb-[40px]">
        <div className="flex justify-center items-center relative w-full ms:w-[48%]">
          <img className="w-full lg:w-[90%] h-full ml-0 lg:ml-48" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""></img>
          <div className="flex items-center w-[80%] ss:w-[70%] lg:w-[50%] ml-0 lg:ml-24 border-2 border-gray-700 justify-between gap-3 ms:py-[0.5rem] py-[0.25rem] px-[0.5rem] ms:px-[0.75rem] rounded-xl absolute left-[50%] bottom-[4%] -translate-x-1/2 bg-black">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" className="ms:h-[4.5rem] h-[3rem]"></img>
            <div className="text-left">
              <div className="ms:text-base text-[0.9rem]">Stranger Things</div>
              <div className="ms:text-base text-[0.75rem] text-[#0071eb]">Downloading...</div>
            </div>
            <img className="h-[3rem] w-[3rem]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt=""></img>
          </div>
        </div>
        <div className="ss:w-[52%] w-full text-center ss:text-left -mt-10">
          <h1 className="pb-2 font-bold text-3xl ms:text-5xl">Baixe séries para assistir offline</h1>
          <p className="text-lg mt-4 ms:text-2xl">Disponíveis somente em planos sem anúncios.</p>
        </div>
      </div>
    </div>
  </div>  
  )
};
  
export default Download;