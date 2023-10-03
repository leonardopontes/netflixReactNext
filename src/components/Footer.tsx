import React from 'react';

const Footer = () => {
    return (
  <footer>       
    <div>
      <div className="w-full h-2 mt-14 bg-[#262626]"></div>
    </div>
    <div className="w-11/12 mx-auto">
    <div className="max-w-[1000px] text-[#d1d5db] py-[70px] px-5 md:px-[45px] w-[90%] mx-auto">
      <h2 className="pb-5 xs:-ml-10">Dúvidas? Ligue <span className="underline"> 0800 591 2876 </span></h2>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 xs:-ml-10 mt-5 text-[12px] md:text-[14px]">
        <div>
          <div className="pb-3.5 underline">Perguntas frequentes</div>
          <div className="pb-3.5 underline">Media Center</div>
          <div className="pb-3.5 underline">Resgatar cartão pré-pago</div>
          <div className="pb-3.5 underline">Termos de Uso</div>
          <div className="pb-3.5 underline">Informações corporativas</div>
          <div className="pb-3.5 underline">Avisos legais</div>
        </div>
        <div>
          <div className="pb-3.5 underline">Central de Ajuda</div>
          <div className="pb-3.5 underline">Relações com investidores</div>
          <div className="pb-3.5 underline">Comprar cartão pré-pago</div>
          <div className="pb-3.5 underline">Privacidade</div>
          <div className="pb-3.5 underline">Entre em contato</div>
          <div className="pb-3.5 underline">Só na Netflix</div>
        </div>
        <div>
          <div className="pb-3.5 underline">Conta</div>
          <div className="pb-3.5 underline">Carreiras</div>
          <div className="pb-3.5 underline">Formas de assistir</div>
          <div className="pb-3.5 underline">Preferências de cookies</div>
          <div className="pb-3.5 underline">Teste de velocidade</div>
        </div>
        <div className="mt-6">
          <select className="w-14 h-7 xs:ml-2.5 ms:w-36 ms:h-8 ms:m-0 bg-[#171717] rounded border border-white px-6 py-1 text-white">
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>  
        </div>
      </div>
      <h2 className="pt-5 xs:-ml-10 text-[12px] md:text-[13px]">Netflix Brasil</h2>
    </div> 
    </div>
  </footer>  
  )
};
  
export default Footer;