import React from 'react'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

function Contact() {
    // State to track viewport width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    // WhatsApp phone number - update this to your desired number
    const whatsappNumber = "628122883323"; // Replace with your WhatsApp number

    // Handle form submission
    const handleSubmit = () => {
        

        // Create the message text
        const messageText = `
*Data Persona:*
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Message:* ${formData.message}
        `.trim();

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(messageText);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };


    // Effect to handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Check if current view is mobile (less than 768px)
    const isMobile = windowWidth < 768;
    // Check if current view is tablet (between 768px and 1024px)
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    return (
        <div className='relative min-h-[1200px]'>
            <div className={`sticky top-0 w-full z-500`}>
                <Navbar />
            </div>

            {/* maps */}
            <div className='w-full relative'>
                <Map />
            </div>

            {/* section form */}
            <div className='min-h-[500px] bg-[#474748] flex justify-center'>
                <div className={`${isMobile ? 'w-[90%]' : isTablet ? 'w-[85%]' : 'w-[75%]'} my-20`}>
                    <div>
                        <p className={`text-[#ffad33] ${isMobile ? 'text-4xl' : 'text-6xl'}`}>GET IN TOUCH</p>
                    </div>
                    {/* flex form dan alamat */}
                    <div className={`${isMobile ? 'flex-col' : 'flex'} mt-5 mt-20 w-full`}>
                        <div className={`${isMobile ? 'w-full mb-10' : isTablet ? 'w-[55%] mr-5' : 'w-[50%] mr-10'}`}>
                            {/* input name */}
                            <div className={`${isMobile ? 'flex-col space-y-4' : 'flex'} w-full justify-between mt-2`}>
                                <div className={isMobile ? 'w-full' : ''}>
                                    <input
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder='First Name'
                                        className={`bg-gray-500 text-[#474748] px-4 h-10 py-2 ${isMobile ? 'w-full' : isTablet ? 'w-[220px]' : 'w-[250px]'} h-[50px]`}
                                    />
                                </div>
                                <div className={isMobile ? 'w-full' : ''}>
                                    <input
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder='Last Name'
                                        className={`bg-gray-500 text-[#474748] px-4 py-2 ${isMobile ? 'w-full' : isTablet ? 'w-[220px]' : 'w-[250px]'} h-[50px]`}
                                    />
                                </div>
                            </div>
                            {/* input email */}
                            <div className={`${isMobile ? 'flex-col space-y-4' : 'flex'} w-full justify-between ${isMobile ? 'mt-4' : 'mt-10'}`}>
                                <div className={isMobile ? 'w-full' : ''}>
                                    <input
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder='Email'
                                        className={`bg-gray-500 text-[#474748] px-4 h-10 py-2 ${isMobile ? 'w-full' : isTablet ? 'w-[220px]' : 'w-[250px]'} h-[50px]`}
                                    />
                                </div>
                                <div className={isMobile ? 'w-full' : ''}>
                                    <input
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder='Phone'
                                        className={`bg-gray-500 text-[#474748] px-4 py-2 ${isMobile ? 'w-full' : isTablet ? 'w-[220px]' : 'w-[250px]'} h-[50px]`}
                                    />
                                </div>
                            </div>
                            {/* input service select */}
                            <div className={`${isMobile ? 'mt-4' : 'mt-10'}`}>
                                <select
                                    className='bg-gray-500 w-full px-4 py-2 h-[50px] text-[#474748] border border-white'>
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Research">Research</option>
                                    <option value="Planning">Planning</option>
                                    <option value="Workshops">Workshops</option>
                                    <option value="Strategy & Design">Strategy & Design</option>
                                    <option value="Specialized Services">Specialized Services</option>
                                    <option value="Implementation">Implementation</option>
                                </select>
                            </div>
                            {/* text area data */}
                            <div className={`${isMobile ? 'mt-4' : 'mt-10'}`}>
                                <textarea
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder='Message'
                                    className='bg-gray-500 text-[#474748] px-4 py-2 w-full h-[200px]'
                                />
                            </div>
                            {/* button submit */}
                            <div className={`${isMobile ? 'mt-4' : 'mt-10'}`}>
                                <button 
                                onClick={handleSubmit}
                                className={`bg-[#ffad33] text-black rounded-xl px-4 py-4 ${isMobile ? 'w-full' : 'w-[75%]'}`}>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                        <div className={`${isMobile ? 'w-full mt-10' : isTablet ? 'w-[45%]' : 'w-[50%]'}`}>
                            <div>
                                <p className={`text-white ${isMobile ? 'text-lg' : 'text-xl'}`}>Mediatama Starindo, Bekasi Timur</p>
                            </div>
                            {/* location section */}
                            <div className='my-10'>
                                <div>
                                    <CiLocationOn size={isMobile ? 30 : 40} color='white' />
                                </div>
                                <div className='mt-2'>
                                    <p className={`text-white ${isMobile ? 'text-lg' : 'text-xl'}`}>jl. candi kalasan no.266, duren jaya, bekasi timur 17111</p>
                                </div>
                            </div>
                            {/* phone section */}
                            <div className='my-10'>
                                <div>
                                    <FiPhone size={isMobile ? 25 : 30} color='white' />
                                </div>
                                <div className='mt-2'>
                                    <p className={`text-[#ffad33] ${isMobile ? 'text-lg' : 'text-xl'}`}>+6285161338833</p>
                                </div>
                            </div>
                            {/* mail */}
                            <div className='my-10'>
                                <div>
                                    <MdOutlineMailOutline size={isMobile ? 25 : 30} color='white' />
                                </div>
                                <div>
                                    <p className={`text-[#ffad33] ${isMobile ? 'text-lg break-all' : 'text-xl'}`}>mediatamastarindo@outlook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact