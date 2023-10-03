import React from 'react';

const Questions = () => {
    return (
    <div>
      <div className="w-full h-2 mt-5 bg-[#262626]"></div>
    <div>  
      <div className="w-11/12 mx-auto">  
        <h1 className="mt-20 text-center text-white font-bold text-3xl ms:text-5xl">Perguntas Frequentes</h1>
      </div>
    </div>   
      <div className="flex justify-center items-center">
        <div className="w-4/5 xs:w-3/4 h-20 mt-8 bg-[#262626]">
          <h1 className="text-lg ms:text-2xl mt-7 ml-3 fx:ml-6 text-white"> O que é a Netflix? </h1>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="w-4/5 xs:w-3/4 h-20 mt-2 bg-[#262626]">
          <h1 className="text-lg ms:text-2xl mt-7 ml-3 fx:ml-6 text-white"> Quanto custa a Netflix? </h1>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="w-4/5 xs:w-3/4 h-20 mt-2 bg-[#262626]">
          <h1 className="text-lg ms:text-2xl mt-7 ml-3 fx:ml-6 text-white"> Onde posso assistir? </h1>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="w-4/5 xs:w-3/4 h-20 mt-2 bg-[#262626]">
          <h1 className="text-lg ms:text-2xl mt-7 ml-3 fx:ml-6 text-white"> Como faço para cancelar? </h1>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="w-4/5 xs:w-3/4 h-20 mt-2 bg-[#262626]">
          <h1 className="text-lg ms:text-2xl mt-7 ml-3 fx:ml-6 text-white"> O que eu posso assistir na Netflix? </h1>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="w-4/5 xs:w-3/4 h-20 mt-2 bg-[#262626]">
          <h1 className="text-lg ms:text-2xl mt-7 ml-3 fx:ml-6 text-white"> A Netflix é adequada para crianças? </h1>
      </div>
    </div>
  <div className="w-11/12 mx-auto">  
    <div className="flex justify-center">  
      <h1 className="teit-lg ms:text-xl mt-12 text-center text-white"> Quer assistir? Informe seu email para criar ou reiniciar sua assinatura. </h1>
    </div>
    <div className="flex flex-col items-center py-5 ss:flex-row ss:justify-center ss:space-x-4">
      <input type="text" placeholder="Email" className="bg-[#1b1b1b] opacity-50 rounded border ss:w-[32%] ss:px-5 ss:py-4 w-[80%] px-[10px] py-3 placeholder:text-sm" /> 
      <button className="bg-[#e50914] rounded border[#e50914] ss:mt-0 ss:py-3 ss:px-5 px-3 py-2 flex items-center mt-4">
        <span className='font-bold text-lg ss:text-2xl text-white'>Vamos lá</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"></svg>
      </button>  
    </div>
  </div>    
</div>   
  )
};
  
export default Questions;