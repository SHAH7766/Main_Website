import React, {useState} from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-30 top-0 border-b border-alice_blue/10 bg-baltic_blue-100/80 backdrop-blur-xl shadow-lg shadow-baltic_blue-100/25 animate-drop-in">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="group font-bold text-alice_blue text-lg">
          Brick <span className="text-lime_moss-600 transition-colors group-hover:text-alice_blue">& Pixel</span>
        </a>
        <div className="hidden md:flex gap-2 items-center text-sm text-alice_blue/80">
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(!open)} className="menu-button">
            <span className={`menu-line ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`menu-line ${open ? 'opacity-0' : ''}`} />
            <span className={`menu-line ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-baltic_blue-100/95 px-4 py-3 border-t border-rich_cerulean/70 animate-reveal-down">
          <a href="#services" onClick={()=>setOpen(false)} className="mobile-nav-link">Services</a>
          <a href="#contact" onClick={()=>setOpen(false)} className="mobile-nav-link">Contact</a>
        </div>
      )}
    </nav>
  )
}
