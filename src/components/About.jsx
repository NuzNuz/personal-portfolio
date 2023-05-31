import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Nazeer, nice to meet you! Please take a look around.</p>
                </div>
                <div>
                    <p>Hello! I'm currently studying Computer Science at Wayne State University, with a keen focus on web development. My academic journey has allowed me to develop a strong understanding of programming languages such as JavaScript, HTML/CSS, and Python, and frameworks like React.js and Node.js. I'm always eager to take on challenging projects that push my boundaries and encourage me to learn. I'm presently seeking an internship opportunity where I can leverage my skills and passion to contribute to real-world projects while continuing my learning journey. I believe that my tenacity, creativity, and dedication to the craft make me a suitable candidate. Take a look at my projects and let's connect if you're interested in collaborating or discussing potential opportunities.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About