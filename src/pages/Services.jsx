import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function Services() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

    })

    return (
        <div
            className='relative min-h-[1200px] bg-cover bg-center bg-no-repeat bg-black/50'
            style={{
                backgroundImage: `url('/background.jpg')`
            }}
        >
            {/* black overlay */}
            <div className='absolute inset-0 bg-[#ec710a]/50'></div>
            <div className={`sticky top-0 w-full z-10`}>
                <Navbar />
            </div>
            {/* item data */}
            <div className='relative w-full min-h-screen mt-20 flex justify-center'>
                <div className='w-[50%]'>
                    {/* title */}
                    <div className='text-6xl my-3'>
                        <span className='mx-2 text-white'>OUR</span>
                        <span className='text-[#ffad33]'>SERVICES</span>
                    </div>

                    {/* description */}
                    <div className='my-3'>
                        <p className='text-white my-2'>We are a full service end-to-end manila-based global marketing</p>
                        <p className='text-white my-2'>agency with solutions for every thinking challenge. </p>
                    </div>

                    {/* item data services */}
                    <div className='my-5'>
                        {/* item */}
                        <div className='w-full flex h-[500px]'>
                            <div className='w-[50%] bg-gray-700 h-full'>
                                <div>
                                    <p>RESEARCH</p>
                                </div>
                            </div>
                            <div className='relative w-[50%] h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full'
                                    src='/background2.jpg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services