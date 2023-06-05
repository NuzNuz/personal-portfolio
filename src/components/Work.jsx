import React from 'react'
import SwiftSum from '../assets/swiftsum.png'
import Illustraite from '../assets/illustraite.png'
import Illustraite2 from '../assets/illustraite2.png'
import Chatly from '../assets/chatly1.png'

const Work = () => {
  return (
    <div className=' w-full sm:h-screen h-[1800px] text-gray-300 bg-[#0a192f] sm:pt-0 pt-[500px]' name='projects' >
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-screen '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inlin border-b-4 text-gray-300 border-pink-600'>Projects</p>
          
                
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>

               <div className='flex flex-col'>
                <div style={{backgroundImage: `url(${Illustraite})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            IllustraAIte
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://illustraite.tech/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                            
                        </div>

                       
                        
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center items-center py-4'>
                    <p className='text-3xl font-bold'>IllustrAIte</p>
                    <p className='py-2'>IllustrAIte is an application that uses OpenAI's Dall-E ai model to produce AI generated images based on a users prompt. Technologies used for this project
                    include:</p>
                    <ol className='font-bold '>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>OpenAI API</li>
                        <li>JavaScript</li>
                    </ol>
                    
                </div>
                </div>
               
                
                
                <div className='flex flex-col'>
                <div style={{backgroundImage: `url(${SwiftSum})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            SwiftSum
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://swiftsum.netlify.app/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center py-4 '>
                    <p className='text-3xl font-bold'>SwiftSum</p>
                    <p className='py-2'>SwiftSum is a web application that intakes a link to an article, and uses artificial intelligence
                    to return a summary of the article. Technologies used here are:</p>
                    <ol className='font-bold '>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>RapidAPI</li>
                        
                        <li>OpenAI API</li>
                        <li>JavaScript</li>
                    </ol>
                    
                </div>
                </div>

                <div>
                <div style={{backgroundImage: `url(${Chatly})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>

                    <div className='opacity-0 group-hover:opacity-100 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Chatly
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://chatly1.netlify.app/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>



                </div>
                <div className='flex flex-col justify-center items-center py-4 '>
                    <p className='text-3xl font-bold'>Chatly</p>
                    <p className='py-2'>Chatly is an real time chatting application that is based off of Facebook messenger. Users can create gruopchats, send photographs/videos, and manage several chats at once Technologies used for this project
                    include:</p>
                    <ol className='font-bold '>
                        <li>React.js</li>
                        <li>Vanilla CSS</li>
                        <li>Firebase</li>
                        <li>Chat Engine</li>
                        <li>Social Auth</li>
                        <li>React Router</li>
                    </ol>
                    
                </div>
                
                </div>


                
            </div>
        </div>
    </div>
  )
}

export default Work