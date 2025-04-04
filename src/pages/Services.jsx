import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Services() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        // Empty useEffect, keeping it as in original
    })

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
                <div className='w-full px-4 md:px-8 lg:w-[75%]'>
                    {/* title */}
                    <div className='text-3xl sm:text-4xl md:text-6xl my-3'>
                        <span className='mx-2 text-white'>OUR</span>
                        <span className='text-[#ffad33]'>SERVICES</span>
                    </div>

                    {/* description */}
                    <div className='my-3'>
                        <p className='text-white text-sm md:text-base my-2'>We are a full service end-to-end manila-based global marketing</p>
                        <p className='text-white text-sm md:text-base my-2'>agency with solutions for every thinking challenge. </p>
                    </div>

                    {/* item data services */}
                    <div className='my-5'>
                        {/* RESEARCH item */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p>RESEARCH</p>
                                </div>
                                <div className='my-4 md:my-15'>
                                    <ul className='list-disc text-xs sm:text-sm text-white mx-6 md:mx-16 space-y-1 md:space-y-2'>
                                        <li>Traditional and Digital Research</li>
                                        <li>Focus Group Discussion</li>
                                        <li>In-Depth Discussion</li>
                                        <li>Nationwide Surveys</li>
                                        <li>Communications Research</li>
                                        <li>Organizational Research</li>
                                        <li>Channel Research</li>
                                        <li>Mystery Shopping</li>
                                        <li>Landscape Scan</li>
                                        <li>New Research Models</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Research"
                                />
                            </div>
                        </div>
                        
                        {/* PLANNING item */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p>PLANNING</p>
                                </div>
                                <div className='my-4 md:my-15'>
                                    <ul className='list-disc text-xs sm:text-sm text-white mx-6 md:mx-16 space-y-1 md:space-y-2'>
                                        <li>Strategic Planning</li>
                                        <li>Communications Planning</li>
                                        <li>Marketing Consultancy</li>
                                        <li>Consumer Insighting</li>
                                        <li>Health Communications Planning</li>
                                        <li>User Experience</li>
                                        <li>Channel Research</li>
                                        <li>Design Thinking</li>
                                        <li>Human Centered Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Planning"
                                />
                            </div>
                        </div>
                        
                        {/* WORKSHOPS item */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p>WORKSHOPS</p>
                                </div>
                                <div className='my-4 md:my-15'>
                                    <ul className='list-disc text-xs sm:text-sm text-white mx-6 md:mx-16 space-y-1 md:space-y-2'>
                                        <li>Strategic Communications</li>
                                        <li>Workshops</li>
                                        <li>Branding Workshops</li>
                                        <li>Design Thinking Workshops</li>
                                        <li>Personal Coaching</li>
                                        <li>Organizational Workshops</li>
                                        <li>Employee Training Workshops</li>
                                        <li>Custom Workshops</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Workshops"
                                />
                            </div>
                        </div>
                        
                        {/* BRANDING & DESIGN */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p>BRANDING & DESIGN</p>
                                </div>
                                <div className='my-4 md:my-15'>
                                    <ul className='list-disc text-xs sm:text-sm text-white mx-6 md:mx-16 space-y-1 md:space-y-2'>
                                        <li>Brand Discovery</li>
                                        <li>Brand Identity</li>
                                        <li>Brand Book</li>
                                        <li>Marketing Collaterals</li>
                                        <li>Personal Branding</li>
                                        <li>Graphic & Informational Design</li>
                                        <li>Promotional Materials</li>
                                        <li>Data Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Branding & Design"
                                />
                            </div>
                        </div>

                        {/* SPECIALIZED SERVICES */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p>SPECIALIZED SERVICES</p>
                                </div>
                                <div className='my-4 md:my-15'>
                                    <ul className='list-disc text-xs sm:text-sm text-white mx-6 md:mx-16 space-y-1 md:space-y-2'>
                                        <li>Health Communications</li>
                                        <li>Communication Toolkits</li>
                                        <li>Capacity Building</li>
                                        <li>Behavioral Change</li>
                                        <li>CSV / CSR / Advocacy Communications</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Specialized Services"
                                />
                            </div>
                        </div>

                        {/* IMPLEMENTATION */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p className='text-2xl sm:text-3xl md:text-4xl'>IMPLEMENTATION</p>
                                    <p className='text-lg sm:text-xl'>with Partner Agencies</p>
                                </div>
                                <div className='my-4 md:my-15'>
                                    <ul className='list-disc text-xs sm:text-sm text-white mx-6 md:mx-16 space-y-1 md:space-y-2'>
                                        <li>Event Launches</li>
                                        <li>Speaking Engagements</li>
                                        <li>Seminars & Webinars</li>
                                        <li>Sales Rallies and Activations</li>
                                        <li>CRM</li>
                                        <li>Social Media & Websites</li>
                                        <li>Trade Marketing</li>
                                        <li>Video and Content Production</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 bg-[#ffad33]/80'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Implementation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default Services