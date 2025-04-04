import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const knowWhatWeDoClick = () => {
        const servicesSection = document.getElementById('services-section')
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='relative min-h-screen'>
            {/* header image */}
            <div className='sticky top-0 w-full z-10'>
                <Navbar />
            </div>
            <div className='relative h-[110vh]'>
                <div className='h-full bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url('/background.jpg')`
                    }}
                >
                    <div className='h-full bg-black/50'>
                        <div className='relative h-full w-full md:w-[400px] flex items-center px-4 md:px-0 md:left-[100px]'>
                            <div className='mt-20'>
                                <div className='text-3xl sm:text-4xl md:text-6xl'>
                                    <span className='text-white'>INSIGHT-DRIVEN SOLUTION FOR YOUR </span>
                                    <span className='text-[#ffad33]'>BRAND</span>
                                </div>
                                <div className='my-5'>
                                    <p className='text-white text-sm md:text-base'>We are the business of providing insgihts and communications solutions, harnessing local community and best-in-class global resources to connect with the ever-chaning consumer</p>
                                </div>
                                <div>
                                    <button
                                    onClick={knowWhatWeDoClick}
                                    className='bg-[#ffad33] text-black px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300'>
                                        KNOW WHAT WE DO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service section */}
            <div id='services-section' className='relative min-h-[110vh]'>
                <div className='flex justify-center items-center mt-[70px] px-4'>
                    <iframe 
                        className='w-full max-w-[1060px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[515px]' 
                        src="https://www.youtube.com/embed/bixR-KIJKYM?si=yPEEad-aNV1_XWwm" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='my-[60px] px-4'>
                    <div className='text-center'>
                        <div className='my-3'>
                            <p className='text-xl sm:text-2xl md:text-[30px] text-[#ffad33]'>FULL SERVICE END-TO-END MARKETING CONSULTANCY</p>
                        </div>
                        <div className='my-3'>
                            <p className='text-sm md:text-base'>Solution for every thinking challenge</p>
                        </div>
                        <div className='my-10'>
                            <button 
                            onClick={()=>navigate('/services')}
                            className='w-full sm:w-auto bg-[#ffad33] px-2 py-3 rounded-md hover:bg-white hover:text-black transition duration-300'>
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* we are dynamic we are deverse */}
            <div className='relative h-auto md:h-[80vh]'>
                <div className='h-full bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url('/background2.jpg')`
                    }}
                >
                   <div className='h-full py-10 md:py-0 bg-[#ffad33]/80 flex justify-center items-center'>
                        <div className='px-4'>
                            <div className='my-6 md:my-10 text-center'>
                                <p className='text-3xl sm:text-4xl md:text-6xl text-white'>WE ARE DYNAMIC.</p>
                            </div>
                            <div className='my-6 md:my-10 text-center'>
                                <p className='text-3xl sm:text-4xl md:text-6xl'>WE ARE DIVERSE.</p>
                            </div>
                            <div className='my-6 md:my-15 text-center'>
                                <p className='my-2 text-sm md:text-base'>OI is made up of young, passionate, innovative</p>
                                <p className='my-2 text-sm md:text-base'>thinkers coming from various backgrounds.</p>
                            </div>
                            <div className='flex justify-center px-4 md:px-0'>
                                <button 
                                onClick={()=>navigate('/teams')}
                                className='py-3 px-5 bg-white rounded w-full md:w-auto md:min-w-[200px]'>Meet The Crew</button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home