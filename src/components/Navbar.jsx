import React, {useEffect, useState} from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const links = [
    {href: '#use-cases', label: 'Use Cases'},
    {href: '#services', label: 'Automations'},
    {href: '#results', label: 'Results'},
    {href: '#pricing', label: 'Pricing'},
    {href: '#testimonials', label: 'Stories'},
  ]

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function animateClick(id) {
    setClicked(id)
    window.setTimeout(() => setClicked(''), 720)
  }

  function navigateWithAnimation(event, href, closeMenu = false) {
    event.preventDefault()
    animateClick(href)

    window.setTimeout(() => {
      if (closeMenu) setOpen(false)

      if (href === '#') {
        window.scrollTo({top: 0, behavior: 'smooth'})
        return
      }

      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'})
        window.history.pushState(null, '', href)
      }
    }, 180)
  }

  return (
    <nav className={`site-navbar ${scrolled ? 'site-navbar-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" onClick={(event) => navigateWithAnimation(event, '#')} className="group flex items-center gap-2 font-bold text-alice_blue text-lg">
          <span className="brand-mark">Z</span>
          <span>Zenthic</span>
        </a>
        <div className="hidden md:flex gap-2 items-center text-sm text-alice_blue/80">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => navigateWithAnimation(event, link.href)}
              className={`nav-link ${clicked === link.href ? 'nav-clicked' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(event) => navigateWithAnimation(event, '#contact')}
            className={`nav-cta ${clicked === '#contact' ? 'nav-cta-clicked' : ''}`}
          >
            Get automation audit
          </a>
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
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => navigateWithAnimation(event, link.href, true)}
              className={`mobile-nav-link ${clicked === link.href ? 'mobile-nav-clicked' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(event) => navigateWithAnimation(event, '#contact', true)}
            className={`mobile-nav-link font-semibold text-lime_moss-700 ${clicked === '#contact' ? 'mobile-nav-clicked' : ''}`}
          >
            Get automation audit
          </a>
        </div>
      )}
    </nav>
  )
}
