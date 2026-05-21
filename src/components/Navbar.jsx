import React, {useState} from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [
    {href: '#use-cases', label: 'Use Cases'},
    {href: '#services', label: 'Automations'},
    {href: '#results', label: 'Results'},
    {href: '#pricing', label: 'Pricing'},
    {href: '#testimonials', label: 'Stories'},
  ]

  return (
    <nav className="fixed w-full z-30 top-0 border-b border-alice_blue/10 bg-baltic_blue-100/80 backdrop-blur-xl shadow-lg shadow-baltic_blue-100/25 animate-drop-in">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2 font-bold text-alice_blue text-lg">
          <span className="brand-mark">Z</span>
          <span>Zenthic</span>
        </a>
        <div className="hidden md:flex gap-2 items-center text-sm text-alice_blue/80">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
          <a href="#contact" className="nav-cta">Get automation audit</a>
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
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={()=>setOpen(false)} className="mobile-nav-link">{link.label}</a>
          ))}
          <a href="#contact" onClick={()=>setOpen(false)} className="mobile-nav-link font-semibold text-lime_moss-700">Get automation audit</a>
        </div>
      )}
    </nav>
  )
}
