import React from 'react'
import globe from '../assets/globe.png';
import meteor from '../assets/meteor.png';
import MyImage from '../assets/PortfolioFinal.png';
import gitHub from '../assets/icons/github.png'
import LinkedIn from '../assets/icons/linkedIn.png'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
export default function LangingPage() {
    return (
        <div className='overflow-hidden flex w-full flex-col h-screen '>
            <div className='absolute w-10 flex flex-row gap-24 -top-20 left-0'>
                <img src={meteor} className='animate-light animation-delay-75' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-6500' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-7800' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-2300' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-5000' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-1200' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-9800' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-8800' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-4000' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-10800' alt='meteor' />
                <img src={meteor} className='animate-light animation-delay-500' alt='meteor' />


            </div>
            <div className='flex flex-row h-20 w-full  justify-around items-center animate-move-down  top-0 z-10'>
                <div className='text-4xl font-bold text-orange-600 font-Poppins'>Logo</div>
                <div className='flex gap-10 font-medium text-xl cursor-pointer'>
                    <div className='hover:underline text-white'>Home</div>
                    <div className='hover:text-red-600 text-white'>About</div>
                    <div className='hover:text-red-600 text-white'>Projects</div>
                    <div className='hover:text-red-600 text-white'>Contacts</div>
                </div>
                <div className='flex gap-4 items-center'>

                </div>
            </div>
            <div className='flex h-full w-screen  overflow-hidden items-center justify-around align-middle  '>
                <div className='flex gap-4 w-2/4 flex-col ml-20'>
                    <div className='text-2xl font-medium text-orange-500 font-Rubik animate-move-down '>Full Stack Developer</div>
                    <div className='text-7xl font-bold font-Poppins text-white flex flex-col gap-3'>
                        <div className='animate-cont-left'>Hello,my name is</div>
                        <div className='animate-cont-right'>Prasanna</div>
                    </div>
                    <div className='text-lg font-normal text-gray-200 font-Rubik w-3/5 animate-cont-left'>Brief description with insights into myself,my vocational journey, and what I engage in professionally</div>
                    <div className='flex flex-row gap-3'>
                        <div className='flex flex-row  bg-orange-400 rounded-3xl p-2 font-Roboto items-center justify-center h-12 gap-3 w-40'>
                            <div className=' text-white ' >Contact me</div>
                            <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" style={{ width: '16px', height: '16px' }}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>paper-plane</title> <path d="M30.669 1.665l-0.014-0.019c-0.042-0.082-0.096-0.152-0.16-0.21l-0.001-0c-0.013-0.011-0.032-0.005-0.046-0.015-0.020-0.016-0.028-0.041-0.050-0.055-0.107-0.066-0.236-0.106-0.374-0.106-0.017 0-0.033 0.001-0.050 0.002l0.002-0c-0.035 0.006-0.065 0.014-0.095 0.024l0.005-0.001c-0.095 0.007-0.184 0.030-0.264 0.067l0.005-0.002-27.999 16c-0.227 0.132-0.378 0.374-0.378 0.652 0 0.3 0.176 0.559 0.431 0.679l0.005 0.002 9.564 4.414v6.904c0 0 0 0 0 0 0 0.414 0.336 0.75 0.75 0.75 0.153 0 0.296-0.046 0.414-0.125l-0.003 0.002 6.259-4.106 9.015 4.161c0.092 0.043 0.2 0.068 0.314 0.068h0c0 0 0.001 0 0.001 0 0.395 0 0.719-0.306 0.747-0.695l0-0.002 2-27.999c0.001-0.014-0.008-0.025-0.008-0.039 0-0.010 0.001-0.021 0.001-0.032 0-0.115-0.026-0.225-0.073-0.322l0.002 0.004zM26.495 4.867l-14.716 16.82-8.143-3.758zM12.75 28.611v-4.823l4.315 1.992zM27.33 28.865l-8.32-3.841c-0.024-0.015-0.038-0.042-0.064-0.054l-5.722-2.656 15.87-18.139z"></path> </g></svg>
                        </div>
                        <div className='bg-white rounded-3xl p-2 flex items-center font-Roboto justify-center h-12 gap-3 w-40'>
                            <div className='text-black' >Download CV</div>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" style={{ width: '20px', height: '20px' }}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>

                    </div>
                    <div className='flex flex-row gap-5 items-center pl-3 mt-5'>
                        <a href='https://www.linkedin.com/in/prasanna-s-a4b392259/'>
                            <FaLinkedin className='w-8 h-8 cursor-pointer hover:scale-150 text-white'/>
                        </a>
                        <a href='https://github.com/Prasannasoff'>
                            <FaGithub className='w-8 h-8 cursor-pointer hover:scale-150 text-white' />
                        </a>
                    </div>
                </div>
                <div className='flex -mt-40 h-2/6 w-2/6 mb-20 '>
                    <div className='relative'>
                        <img src={MyImage} className='z-10 animate-movement' alt='globe' />
                    </div>

                </div>
            </div>
        </div>
    )
}