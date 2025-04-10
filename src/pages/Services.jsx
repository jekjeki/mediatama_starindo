import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdPermMedia } from "react-icons/md";
import { HiOutlineCamera } from "react-icons/hi";
import { SiGoogleads } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { PiStrategyBold } from "react-icons/pi";
import {motion} from 'framer-motion'

function Services() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        // Empty useEffect, keeping it as in original
    })

    return (
        <div
            className='relative min-h-[1200px] bg-cover bg-center bg-no-repeat bg-black/80'
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
                <div className='w-full px-4 md:px-8 lg:w-[75%]'>
                    {/* title */}
                    <div className='text-3xl sm:text-4xl md:text-6xl my-3'>
                        <span className='mx-2 text-white'>OUR</span>
                        <span className='text-[#3a77ed]'>SERVICES</span>
                    </div>

                    {/* description */}
                    <div className='my-3'>
                        <p className='text-white text-sm md:text-base my-2'>We are a full service end-to-end manila-based global marketing</p>
                        <p className='text-white text-sm md:text-base my-2'>agency with solutions for every thinking challenge. </p>
                    </div>

                    {/* item data services */}
                    <motion.div 
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.25, ease: "easeOut" }}
                    className='my-5'>
                        {/* RESEARCH item */}
                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p>Manajemen media sosial</p>
                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Kelola media sosial bisnis Anda tanpa repot.
                                        Tim kami siap menyusun strategi konten, desain visual yang menarik, copywriting yang engaging,
                                        hingga laporan performa yang membantu Anda memahami audiens dengan lebih baik</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <MdPermMedia className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
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
                                    <p>20+ konten perbulan</p>
                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Lebih dari 20 konten kreatif setiap bulan siap bantu brand Anda tampil konsisten, menarik, dan selalu relevan di mata audiens.
                                        Tinggal fokus ke bisnis, biar kami yang urus kontennya</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <HiOutlineCamera className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
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
                                    <p>Ads Management</p>
                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Stop buang budget buat iklan yang nggak ngaruh!
                                        Kami bantu kelola iklan Anda di Facebook, Instagram, Google, hingga TikTok dengan strategi yang terbukti efektif bikin brand makin dikenal
                                        dan penjualan makin lancar</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <SiGoogleads className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
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
                                    <p>SEO Analysis</p>
                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Website tanpa SEO ibarat toko bagus tapi tersembunyi.
                                        Kami bantu ‘menyalakan lampu etalase’ Anda di mesin pencari, supaya calon pelanggan lebih mudah menemukan dan mengenal brand Anda</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <TbSeo className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
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
                                    <p>Email Marketing</p>
                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Bangun koneksi yang lebih personal dengan pelanggan lewat email marketing yang tepat sasaran.
                                        Kami bantu Anda mengirimkan pesan yang relevan, menarik, dan mendorong aksi langsung ke inbox audiens Anda</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <MdOutlineMailOutline className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
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
                                    <p className='text-2xl sm:text-3xl md:text-4xl'>Laporan Bulanan</p>

                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Setiap angka punya cerita. Lewat laporan bulanan yang lengkap dan mudah dipahami,
                                        kami bantu Anda melihat performa kampanye, mengevaluasi strategi, dan menentukan langkah terbaik ke depannya, berdasarkan data bukan asumsi</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <BsBarChartFill className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Implementation"
                                />
                            </div>
                        </div>

                        <div className='w-full flex flex-col md:flex-row h-auto md:h-[500px] my-1'>
                            <div className='w-full md:w-[50%] bg-gray-700 p-4 md:p-0'>
                                <div className='text-white mx-3 md:mx-10 my-4 md:my-8'>
                                    <p className='text-2xl sm:text-3xl md:text-4xl'>Konsultasi Strategy</p>

                                </div>
                                <div className='my-4 md:my-15 md:mx-10 text-white text-xl flex items-center'>
                                    <p>Setiap brand punya potensi besar, asal punya strategi yang tepat.
                                        Lewat sesi konsultasi digital marketing bersama kami, Anda akan mendapatkan panduan jitu untuk menaklukkan dunia online
                                        dan mengubah audiens jadi pelanggan loyal.</p>
                                </div>
                            </div>
                            <div className='relative w-full md:w-[50%] h-64 md:h-full'>
                                <div className='absolute inset-0 z-20 flex items-center justify-center'>
                                    <PiStrategyBold className='text-white' size={180} />
                                </div>
                                <div className='absolute inset-0 bg-[#3a77ed]/90'></div>
                                <img
                                    className='w-full h-full object-cover'
                                    src='/background2.jpg'
                                    alt="Implementation"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='relative bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default Services