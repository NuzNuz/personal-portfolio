import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Resume from '../assets/NazeerAResume1.pdf'
import Logo from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => { 
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        <div>
            <p>Nazeer Abuchaar</p>
            <img src={Logo} width={100} height={100} className='p-2'/>
        </div>
        
            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        

        <div className='md:hidden z-10' onClick={handleClick}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul className= {!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li  className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='about' smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='projects' smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='contact' smooth={true} duration={500}>Contact</Link></li>
            
        </ul>

        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='https://www.linkedin.com/in/nazeer-abuchaar/' className='flex justify-between items-center w-full text-gray-300'>LinkedIn <FaLinkedin  size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a href='https://github.com/NuzNuz' className='flex justify-between items-center w-full text-gray-300'>Github <FaGithub  size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href='mailto:trnazeer14@gmail.com' className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail  size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={Resume} download='NazeerAbuchaarResume'>Resume <BsFillPersonLinesFill  size={30}/></a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar