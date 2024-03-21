import React from "react";
import contact from '../assets/contact-us.png'; 

const Contact = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="mt-8 lg:mt-16">
        <h1 className="text-4xl font-semibold text-center lg:text-center"> 
          Contact <span className="text-[#4E007A]">Us</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-8 md:mt-12 lg:mt-16">
        <div className="w-full lg:w-auto lg:max-w-md mx-auto lg:mx-0 ml-4 lg:ml-[10rem]">
          <h2 className="text-lg text-[#4E007A] font-semibold py-2">Address</h2>
          <h3 className="text-base font-semibold">Head Office:</h3>
          <p className="text-base py-1">140 N University Dr Coral Springs,</p>
          <p className="text-base py-1">FL 33071</p>
        </div>
        <div className="w-full lg:w-auto lg:max-w-md mx-auto lg:mx-0 mr-4 lg:mr-[12rem]">
          <h2 className="text-lg text-[#4E007A] font-semibold py-2">Email</h2>
          <p className="text-base">info@jobsshopper.com</p>
        </div>
      </div>
      <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row items-start">
        
        <div className="lg:w-1/2 mx-auto lg:mx-0 lg:ml-[10rem] lg:mr-[12rem]">
          <h1 className="text-black text-5xl font-semibold">
            Leave a <span className="text-[#4E007A]">Message</span>
          </h1>
          <form action="contact" method="post" className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg mt-8">
            <div className="hidden">
              <input type="hidden" name="" value="" />
              <input type="hidden" name="" value="" />
              <input type="hidden" name="" value="" />
              <input type="hidden" name="" value="" />
              <input type="hidden" name="" value="" />
              <input type="hidden" name="" value="" />
            </div>
            <div className="mb-4">
              <label htmlFor="your-name" className="block text-gray-700 text-sm font-bold mb-2">Your Name (required)</label>
              <input type="text" name="your-name" id="your-name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="your-email" className="block text-gray-700 text-sm font-bold mb-2">Your Email (required)</label>
              <input type="email" name="your-email" id="your-email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="your-subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input type="text" name="your-subject" id="your-subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="your-message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
              <textarea name="your-message" id="your-message" rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
            </div>
            <div className="mb-4 text-center">
              <input type="submit" value="Send" className="px-4 py-2 bg-[#4E007A] text-white rounded-md cursor-pointer transition duration-300" />
            </div>
          </form>
        </div>
        <img src={contact} alt="Contact Us" className="lg:w-1/2" />
      </div>
      
    </div>
  );
};

export default Contact;
