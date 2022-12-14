import React from 'react'
// Components 
import NavBar from '../components/NavBar'

export default function ContactPage() {
  return (
    <>
        <NavBar  buttons={true} active={'contact'} />
        <div className="w-full flex items-center justify-center h-screen">
            <div className="p-10 border border-gray-300 sm:rounded-md bg-black">
                <form className=''>
                <label className="block mb-6">
                    <span className="text-white">Your name</span>
                    <input
                    type="text"
                    name="name"
                    className="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        p-4
                    "
                    placeholder="Joe Bloggs"
                    />
                </label>
                <label class="block mb-6">
                    <span class="text-white">Email address</span>
                    <input
                    name="email"
                    type="email"
                    className="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        p-4
                    "
                    placeholder="joe.bloggs@example.com"
                    required
                    />
                </label>
                <label class="block mb-6">
                    <span class="text-white">Message</span>
                    <textarea
                    name="message"
                    className="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        p-4
                    "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                    ></textarea>
                </label>
                <div class="mb-6">
                    <button
                    type="submit"
                    className="
                        h-10
                        px-5
                        text-indigo-100
                        bg-indigo-700
                        rounded-lg
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        hover:bg-indigo-800
                        text-stone-50
                    "
                    >
                    Contact Us
                    </button>
                </div>
          
                </form>
            </div>
            </div>

    </>
  )
}
