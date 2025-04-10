import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Work() {
    return (
        <div
            className='relative min-h-[1200px] bg-cover bg-center bg-no-repeat bg-black/50'
            style={{
                backgroundImage: `url('/background_new.jpg')`
            }}
        >
            {/* black overlay */}
            <div className='absolute inset-0 bg-black/80'></div>
            <div className={`sticky top-0 w-full z-10`}>
                <Navbar />
            </div>

            {/* item data */}
            <div className='relative w-full min-h-screen mt-20 flex justify-center'>
                <div className='w-[75%] h-full'>
                    {/* title */}
                    <div className='text-6xl my-5'>
                        <p className='mx-2 my-3 text-white'>OUR</p>
                        <p className='my-3 text-[#3a77ed]'>WORK</p>
                    </div>

                    {/* item work */}
                    <div className='my-5'>
                        <div>
                            <p className='text-white'>Bersama kami, ubah tantangan digital menjadi peluang pertumbuhan bisnis.
                                Mari bangun strategi pemasaran yang tepat sasaran, kreatif, dan inovatif.
                                Kami siap menjadi partner digital marketing terpercaya Anda, "Karena sukses Anda, adalah tujuan kami."</p>
                        </div>
                        <div className='flex flex-wrap my-5'>
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px]'
                                src='Logo01.png'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px]'
                                src='Logo02.jpg'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px]'
                                src='Logo03.jpg'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px]'
                                src='Logo04.png'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo05.png'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo06.png'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo07.jpg'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo08.png'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo09.jpg'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo10.jpg'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo11.png'
                            />
                            <img
                                className='mr-3 my-2 w-[200px] h-[200px] bg-white'
                                src='Logo12.jpeg'
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