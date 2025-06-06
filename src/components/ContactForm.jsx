import React from 'react'

const ContactForm = () => {
  return (
      <form className="grid grid-cols-1 gap-4 w-[350px]">
          <h2 className='text-2xl font-bold'>Contact Me</h2>
      <input
        type="text"
        placeholder="Name"
        className="border px-2 py-1 text-sm h-10 "
      />
      <input
        type="email"
        placeholder="Email"
        className="border px-2 py-1 text-sm h-10"
      />
          <textarea placeholder='Message' className="border p-2 text-sm" rows="5" maxLength="200" ></textarea>
          <button type="submit" className='cursor-pointer py-1 bg-green-600 text-white h-10 hover:bg-green-700 transition-colors duration-200 ease-in-out '>
              Send
          </button>
    </form>
  );
}

export default ContactForm