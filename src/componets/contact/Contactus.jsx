 
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contacts">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form className="bg-white p-6 rounded shadow-md w-full md:w-1/2 mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded outline-none" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded outline-none" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-3 border rounded h-32 outline-none"></textarea>
          </div>
          <button type="submit" className="bg-[#f37443] hover:bg-gray-200 hover:text-[#f37443] text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

