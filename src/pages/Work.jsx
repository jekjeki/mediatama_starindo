import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Work() {
    return (
        <div
            className='relative min-h-[1200px] bg-cover bg-center bg-no-repeat bg-black/50'
            style={{
                backgroundImage: `url('/background.jpg')`
            }}
        >
            {/* black overlay */}
            <div className='absolute inset-0 bg-[#ec710a]/70'></div>
            <div className={`sticky top-0 w-full z-10`}>
                <Navbar />
            </div>

            {/* item data */}
            <div className='relative w-full min-h-screen mt-20 flex justify-center'>
                <div className='w-[75%] h-full'>
                    {/* title */}
                    <div className='text-6xl my-3'>
                        <p className='mx-2 my-3 text-white'>OUR</p>
                        <p className='my-3 text-white'>SERVICES</p>
                    </div>

                    {/* item work */}
                    <div className='my-5'>
                       <div>
                            <p className='text-white'>Agencies</p>
                       </div>
                       <div className='flex my-3'>
                            <img 
                                className='mr-3'
                                src='logo-client.png'
                            />
                            <img 
                                className='mr-3'
                                src='logo-client.png'
                            />
                       </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default Work