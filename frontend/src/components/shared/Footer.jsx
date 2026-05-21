import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className='border-t border-gray-200 bg-white'>
            <div className='max-w-7xl mx-auto px-6 py-10'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>

                    {/* Logo + Description */}
                    <div className='text-center md:text-left'>
                        <h1 className='text-2xl font-bold'>
                            Hire<span className='text-[#6A38C2]'>Flow</span>
                        </h1>
                        <p className='text-sm text-gray-500 mt-2 max-w-md'>
                            Find your dream job faster with thousands of opportunities
                            from top companies.
                        </p>
                    </div>

                    {/* Links */}
                    <div className='flex items-center gap-6 text-sm font-medium text-gray-600'>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors'>
                            Home
                        </a>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors'>
                            Jobs
                        </a>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors'>
                            Browse
                        </a>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors'>
                            Contact
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className='flex items-center gap-4 mt-5'>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors duration-200'><FaFacebook className='h-5 w-5' /></a>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors duration-200'><FaTwitter className='h-5 w-5' /></a>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors duration-200'><FaInstagram className='h-5 w-5' /></a>
                        <a href='#' className='hover:text-[#6A38C2] transition-colors duration-200'><FaLinkedin className='h-5 w-5' /></a>
                    </div>
                </div>

                {/* Bottom */}
                <div className='border-t border-gray-100 mt-8 pt-5 text-center text-sm text-gray-500'>
                    © 2026 JobPortal. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
