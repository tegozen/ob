import Menu from './menu';

export function Header() {
  return (
    <>
      <Menu />
      <div class="w-full h-20 bg-maingray fixed left-0 top-0 z-40 flex items-center px-5">
        <label htmlFor="isMenuOpen" className="px-2 h-12 bg-mainbg rounded-xl shadow-inner flex items-center cursor-pointer">
          <img src="/img/menu.svg" alt="" />
        </label>
        <div className="h-20 flex items-center ml-5">
          <img src="/img/ancnor.png" alt="" className="h-12" />
        </div>
        <span class="text-white font-h1 ml-2">OceanBlades</span>
      </div>
      <div class="h-20" />
    </>
  )
}

export default Header;