import React from 'react';

const Kids = () => {
    return (
  <div>    
    <div className="w-full h-2 mt-5 bg-[#262626]"></div>
    <div className="w-11/12 mx-auto">
    <div className="flex ss:flex-row flex-col text-white justify-between py-16 ss:gap-[30px] max-w-[1100px] mx-auto items-center">
      <div className="ss:w-[52%] w-full text-center ss:text-left">
        <h1 className="title pb-3 mt-10 font-bold text-3xl ms:text-5xl">Crie perfis para crianças</h1>
        <p className="subtitle text-lg mt-4 ms:text-2xl">Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
      </div>
      <div className="relative ss:w-[48%] w-full">
        <img className="relative z-40 w-full h-full" src="https://occ-0-3384-185.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190" alt=""></img>
      </div>
    </div>
  </div>  
  </div> 
  )
};
  
export default Kids;