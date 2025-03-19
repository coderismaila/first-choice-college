import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Apply', href: '#apply' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        <a href='#home' className='flex items-center gap-2'>
          <div className='h-10 w-10 rounded-full bg-college-blue flex items-center justify-center overflow-hidden'>
            <img
              src='/admission.jpg'
              alt='College Logo'
              className='w-20 h-20 object-cover'
            />
          </div>
          <span
            className={cn(
              'font-bold text-lg transition-colors duration-300',
              scrolled ? 'text-college-blue' : 'text-white'
            )}
          >
            First Choice College
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-300 hover:text-college-red',
                scrolled ? 'text-college-blue' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href='#apply'
            className='bg-college-blue hover:bg-college-dark-blue text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden'
          aria-label='Toggle Menu'
        >
          {isOpen ? (
            <X
              className={scrolled ? 'text-college-blue' : 'text-white'}
              size={24}
            />
          ) : (
            <Menu
              className={scrolled ? 'text-college-blue' : 'text-white'}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in'>
          <div className='py-4 px-6 flex flex-col gap-4'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-college-blue hover:text-college-red font-medium py-2 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='#apply'
              className='bg-college-blue hover:bg-college-dark-blue text-white font-medium py-3 rounded-md text-center transition-all duration-300'
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
