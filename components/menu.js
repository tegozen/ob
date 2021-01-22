import React from 'react';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <div className={`fixed left-0 top-0 z-50 w-full h-full ${isMenuOpen ? '' : 'hidden'}`}>
      <input id="isMenuOpen" checked={isMenuOpen} type="checkbox" onChange={() => setIsMenuOpen(!isMenuOpen)} className="hidden" />
      <label htmlFor="isMenuOpen" className="w-full h-full bg-black bg-opacity-50 absolute left-0 top-0 cursor-pointer z-1" />
      <div className="w-96 bg-maingray h-full shadow relative z-2">
        <div className="flex items-center h-20 w-full px-5">
          <div className="bg-mainbg px-5 h-12 text-white font-h1 rounded-xl shadow-inner flex-1 mr-2">OceanBlades</div>
          <label htmlFor="isMenuOpen" className="px-2 h-12 bg-mainbg rounded-xl shadow-inner flex items-center cursor-pointer">
            <img src="/img/menu.svg" alt="" />
          </label>
          <div className="absolute -right-12 top-0 h-20 flex items-center">
            <img src="/img/ancnor.png" alt="" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;