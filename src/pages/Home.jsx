import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const knowWhatWeDoClick = () => {
        navigate('/contact')
    }

    return (
        <div className='relative min-h-screen'>
            {/* header image */}
            <div className='sticky top-0 w-full z-10'>
                <Navbar />
            </div>
            <div className='relative h-[120vh]'>
                <div className='h-full bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url('/background_new.jpg')`
                    }}
                >
                    <div className='h-full bg-black/80'>
                        <div className='relative h-full w-full md:w-[500px] flex items-center px-4 md:px-0 md:left-[100px]'>
                            <div className=''>
                                <div className='text-3xl sm:text-4xl md:text-6xl'>
                                    <span className='text-white'>SOLUSI PERMASALAHAN UNTUK BISNIS </span>
                                    <span className='text-[#3a77ed]'>ANDA</span>
                                </div>
                                <div className='my-5'>
                                    <p className='text-white text-sm md:text-base'>Di era digital yang serba cepat ini, kehadiran online bukan lagi pilihan melainkan kebutuhan.
                                    MEDIA TAMA STARINDO hadir sebagai solusi strategis untuk membantu bisnis Anda tumbuh, dikenal, dan mencuri perhatian di dunia digital.</p>
                                    <p className='text-white text-sm md:text-base mt-2'>
                                    Kami adalah perusahaan digital marketing yang menggabungkan kreativitas, data, dan teknologi untuk menciptakan kampanye pemasaran
yang efektif dan berdampak. Dari strategi media sosial, iklan digital, SEO, hingga pembuatan konten yang relevan dan menggugah kami
siap menjadi mitra Anda dalam menjangkau audiens yang tepat dan meningkatkan konversi secara signifikan.
                                    </p>
                                    <p className='text-white text-sm md:text-base mt-2'>
                                    Dengan tim ahli yang berpengalaman dan terus mengikuti tren terbaru, kami percaya bahwa setiap brand punya cerita unik.
                                    Tugas kami adalah menyampaikan cerita itu dengan cara yang paling menarik dan berkesan.
                                    </p>
                                    <p className='text-white text-sm md:text-base mt-2'>
                                    Bersama MEDIA TAMA STARINDO, mari tumbuh lebih cepat, lebih kuat, dan lebih digital.
                                    </p>
                                </div>
                                <div>
                                    <button
                                    onClick={knowWhatWeDoClick}
                                    className='bg-[#3a77ed] text-white px-4 py-2 mt-5 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer'>
                                        CONTACT
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
                            <p className='text-xl sm:text-2xl md:text-[30px] text-[#3a77ed]'>FULL SERVICE END-TO-END MARKETING CONSULTANCY</p>
                        </div>
                        <div className='my-3'>
                            <p className='text-sm md:text-base'>Solution for every thinking challenge</p>
                        </div>
                        <div className='my-10'>
                            <button 
                            onClick={()=>navigate('/services')}
                            className='w-full sm:w-auto bg-[#3a77ed] text-white px-2 py-3 rounded-md hover:bg-white hover:cursor-pointer hover:text-black transition duration-300'>
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* we are dynamic we are deverse */}
            <div className='relative h-auto md:h-[120vh]'>
                <div className='h-full bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url('/background2.jpg')`
                    }}
                >
                   <div className='h-full py-10 md:py-0 bg-[#ffad33]/80 flex justify-center items-center'>
                        <div className='px-4'>
                            <div className='my-6 md:my-10 text-center'>
                                <p className='text-3xl sm:text-4xl md:text-6xl text-white'>MEET OUR CEO.</p>
                            </div>
                            
                            <div className='md:my-3 flex justify-center'>
                               <img
                               src='/CEO_DondiSumanri.jpg'
                               />
                            </div>
                            <div className='text-center md:px-0'>
                               <div className='text-white my-2 font-bold text-2xl'>
                                    <p>Dondi Sumanri</p>
                               </div>
                               <div className='text-white font-bold text-lg'>
                                <p>CEO / Marketing Manager</p>
                               </div>
                            </div>
                            <div className='md:my-5 md:mx-[150px] text-center'>
                                <p className='text-white'>Digital marketing bukan sekadar pekerjaan buat saya, tapi sudah menjadi passion.
                                Saya membantu brand berkembang secara online lewat strategi yang tepat sasaran, konten yang engaging, dan analisis data yang tajam.</p>
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