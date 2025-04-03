import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <div className={`transition-all duration-300  ${isScrolled ? `bg-[#EC710A] shadow-md text-white` : `bg-transparent`}`}>
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
                <div className='flex items-center space-x-8 mx-3'>
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
                    <Link>
                        Team
                    </Link>
                    <Link>
                        Work
                    </Link>
                    <Link>
                        Contact
                    </Link>
                </div>
           </div>
           <div className='flex items-center space-x-4'>
                <Link>
                     <FaFacebook size={40} />
                </Link>
                <Link>
                    <FaInstagram size={40} />
                </Link>
           </div>
        </div>
    </div>
  )
}

export default Navbar