import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
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
                        <div className='relative h-full w-[400px] flex items-center  left-[100px]'>
                            <div className='mt-20'>
                                <div className='text-6xl'>
                                    <span className='text-white'>INSIGHT-DRIVEN SOLUTION FOR YOUR </span>
                                    <span className='text-[#ffad33]'>BRAND</span>
                                </div>
                                <div className='my-5'>
                                    <p className='text-white'>We are the business of providing insgihts and communications solutions, harnessing local community and best-in-class global resources to connect with the ever-chaning consumer</p>
                                </div>
                                <div>
                                    <button className='bg-[#ffad33] text-black px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300'>
                                        KNOW WHAT WE DO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service section */}
            <div className='relative min-h-[110vh]'>
                <div className='flex justify-center items-center mt-[70px]'>
                    <iframe width="1060" height="515" src="https://www.youtube.com/embed/bixR-KIJKYM?si=yPEEad-aNV1_XWwm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='my-[60px]'>
                    <div className='text-center'>
                        <div className='my-3'>
                            <p className='text-[30px] text-[#ffad33]'>FULL SERVICE END-TO-END MARKETING CONSULTANCY</p>
                        </div>
                        <div className='my-3'>
                            <p>Solution for every thinking challenge</p>
                        </div>
                        <div className='my-3'>
                            <button className='w-xl bg-[#ffad33] px-2 py-3 rounded-md hover:bg-white hover:text-black transition duration-300'>
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* we are dynamic we are deverse */}
            <div className='relative h-[110vh]'>
                <div className='h-full bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url('/background2.jpg')`
                    }}
                >
                   <div className='h-full bg-[#ffad33]/80'>

                   </div>
                </div>
            </div>
        </div>
    )
}

export default Home