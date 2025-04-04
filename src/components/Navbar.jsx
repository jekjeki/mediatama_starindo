import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div className={`transition-all duration-300 ${isScrolled ? `bg-[#EC710A] shadow-md text-white` : `bg-transparent`}`}>
        <div className='flex justify-between items-center p-4'>
           <div className='flex items-center'>
                <Link 
                    to={'/'}
                    className='flex items-center'
                >
                    <img 
                        src='/untitled2.png'
                        className='h-15'
                    />
                </Link>
                
                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-8 mx-3'>
                    <Link 
                    to={'/'}
                    className='flex items-center'
                    >
                        Home
                    </Link>
                    <Link
                        to={'/services'}
                        className='flex items-center'
                    >
                        Services
                    </Link>
                    <Link 
                    to={'/teams'}
                    className='flex items-center'
                    >
                        Team
                    </Link>
                    <Link to={'/work'}
                    className='flex items-center'>
                        Work
                    </Link>
                    <Link 
                    to={'/contact'}
                    className='flex items-center'
                    >
                        Contact
                    </Link>
                </div>
           </div>
           
           {/* Social Media Icons - Desktop */}
           <div className='hidden md:flex items-center space-x-4'>
                <Link>
                     <FaFacebook size={40} />
                </Link>
                <Link>
                    <FaInstagram size={40} />
                </Link>
           </div>
           
           {/* Mobile Menu Button */}
           <div className='md:hidden flex items-center'>
               <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
                   {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
               </button>
           </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className={`md:hidden transition-all duration-300 ${isScrolled ? 'bg-[#EC710A] text-white' : 'bg-white text-black'}`}>
                <div className='flex flex-col py-4 px-4 space-y-4'>
                    <Link 
                        to={'/'}
                        className='flex items-center'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to={'/services'}
                        className='flex items-center'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link 
                        to={'/teams'}
                        className='flex items-center'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Team
                    </Link>
                    <Link 
                        to={'/work'}
                        className='flex items-center'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Work
                    </Link>
                    <Link 
                        to={'/contact'}
                        className='flex items-center'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    
                    {/* Social Media Icons - Mobile */}
                    <div className='flex items-center space-x-4 pt-2'>
                        <Link>
                            <FaFacebook size={30} />
                        </Link>
                        <Link>
                            <FaInstagram size={30} />
                        </Link>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar