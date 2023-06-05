import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action='https://getform.io/f/a133579f-88ec-414a-9ec9-81ac80f0292a' className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - trnazeer14@gmail.com</p>
            </div>
            <input type='text' className='bg-[#ccd6f6] rounded-md p-2 placeholder:text-slate-500 text-black' placeholder='Name' name='name'/>
            <input type='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md placeholder:text-slate-500' placeholder='Email' name='email' />
            <textarea name='message' rows="10" className='bg-[#ccd6f6] p-2 rounded-md placeholder:text-slate-500' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-3 mx-auto flex items-center rounded-md'>Contact Me!</button>
        </form>
    </div>
  )
}

export default Contact