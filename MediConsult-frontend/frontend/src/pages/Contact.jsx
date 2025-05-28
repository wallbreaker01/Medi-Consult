import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { MapPin, Phone, Mail, Briefcase } from 'lucide-react'
import SendMessage from '../components/SendMessage'

const Contact = () => {
  const [showMessageForm, setShowMessageForm] = useState(false)

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50'>
      
      {/* Hero Section */}
      <div className='text-center pt-16 pb-8'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4'>
          Get In Touch
        </h1>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto px-4'>
          We're here to help you with your healthcare needs. Reach out to us anytime.
        </p>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          
          {/* Image Section */}
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl transform rotate-3'></div>
            <img 
              className='relative w-full rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300' 
              src={assets.contact_image} 
              alt="Contact us" 
            />
          </div>

          {/* Contact Info */}
          <div className='space-y-8'>
            
            {/* Office Info Card */}
            <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <MapPin className='w-6 h-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>Our Office</h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                Software Engineering Department<br />
                Shahjalal University of Science & Technology<br />
                Sylhet, Bangladesh
              </p>
            </div>

            {/* Contact Details Card */}
            <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Contact Details</h3>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-green-600' />
                  <span className='text-gray-600'>+880 123 456 789</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-blue-600' />
                  <span className='text-gray-600'>mediconsult@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Careers Card */}
            <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <Briefcase className='w-6 h-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>Join Our Team</h3>
              </div>
              <p className='mb-6 text-gray-600'>
                Discover exciting career opportunities and become part of our mission to revolutionize healthcare.
              </p>
              <button className='bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                Explore Careers
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center py-16 px-4'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Ready to Get Started?</h2>
          <p className='text-gray-600 mb-8'>
            Have questions about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <button 
            onClick={() => setShowMessageForm(true)}
            className='bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            Send Message
          </button>
        </div>
      </div>

      {/* SendMessage Component */}
      {showMessageForm && (
        <SendMessage onClose={() => setShowMessageForm(false)} />
      )}

    </div>
  )
}
export default Contact