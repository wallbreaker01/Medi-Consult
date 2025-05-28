import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
           <span className="font-semibold ">About Us</span>
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div className="relative">
          <img
            className="w-full rounded-2xl shadow-2xl"
            src={assets.about_image}
            alt="About Medi Consult"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Welcome to <span className="font-semibold text-blue-600">Medi Consult</span>, 
              your trusted partner in managing healthcare needs with convenience and efficiency.
            </p>
            <p>
              We understand the challenges individuals face when scheduling appointments 
              and managing health records. Our platform bridges the gap between patients 
              and healthcare providers seamlessly.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h3 className="font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To create a seamless healthcare experience for every user, making 
              quality care accessible when you need it most.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-800 mb-4">
          Why <span className="font-semibold text-blue-600">Choose Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're committed to excellence in healthcare technology, continuously enhancing 
          our platform to deliver superior service.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficiency</h3>
          <p className="text-gray-600 leading-relaxed">
            Streamlined appointment scheduling that seamlessly fits into your busy lifestyle.
          </p>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Convenience</h3>
          <p className="text-gray-600 leading-relaxed">
            Access to a trusted network of healthcare professionals in your area.
          </p>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalization</h3>
          <p className="text-gray-600 leading-relaxed">
            Tailored recommendations and reminders to help you stay on top of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
