import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-50 to-blue-50 border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 py-16'>
          
          {/* Brand Section */}
          <div className='md:col-span-1'>
            <img className='mb-6 w-44 h-auto' src={assets.logo2} alt="MediConsult" />
            <p className='text-gray-600 leading-relaxed text-sm max-w-sm'>
              Your trusted healthcare companion providing expert medical consultations 
              and personalized care solutions for a healthier tomorrow.
            </p>
            <div className='flex space-x-4 mt-6'>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors'>
                <span className='text-blue-600 text-sm'>f</span>
              </div>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors'>
                <span className='text-blue-600 text-sm'>t</span>
              </div>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors'>
                <span className='text-blue-600 text-sm'>in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-gray-900 font-semibold text-lg mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {['Home', 'About Us', 'Services', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href='#' className='text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-gray-900 font-semibold text-lg mb-6'>Get in Touch</h3>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 text-xs'>📞</span>
                </div>
                <span className='text-gray-600 text-sm'>+880 123 456 789</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 text-xs'>✉</span>
                </div>
                <span className='text-gray-600 text-sm'>mediconsult@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-200 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-500 text-sm'>
              © 2025 MediConsult. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <a href='#' className='text-gray-500 hover:text-gray-700 text-sm transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-700 text-sm transition-colors'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
