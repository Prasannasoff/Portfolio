import React from 'react'
import MainImage from '../assets/MainImage.png'
import reactImg from '../assets/icons/react.png';
import cImg from '../assets/icons/c.png';
import nodeImg from '../assets/icons/node.png';
import pythonImg from '../assets/icons/python.png';
import SunImg from '../assets/sun.png'
export default function AboutMePage() {
    return (
        <div className='h-full flex flex-col overflow-hidden w-screen items-center justify-center'>
            <div className='flex flex-col items-center'>
                <div className='font-Poppins text-5xl text-white '>About Me</div>
                <div className='flex flex-row pt-2 items-center justify-center mb-10'>
                    <div className=' w-2/5 h-4/5 pt-10'>
                    

                        {/* <img src={SunImg} className='w-52 ml-32  pt-16  animate-rotate absolute'></img> */}
                        <img src={MainImage} className='h-full z-20 pr-24 pt-10 animate-cont-left'></img>
                    </div>
                    <div className='flex flex-col w-3/6 pt-10 gap-5 text-white'>
                        <div className='font-Poppins lg:text-xl font-normal'>My name is Prasanna, and I am a dedicated full-stack developer currently in my third year at Kongu Engineering College, where I have achieved a CGPA of 8.58 up to the third semester. I hail from Erode and completed my schooling at Bharathi Vidya Bhavan in 2022. Proficient in programming languages such as C, C++, Python, and Java, I have also gained hands-on experience with frameworks like React.js, React Native, and Node.js. My passion for development has led me to create a full-stack website using the MERN stack. Additionally, I enjoy solving programming problems on platforms like LeetCode and other coding sites. I have also completed a 2-credit course in UI/UX, which has further refined my skills. With a strong foundation in both the front-end and back-end, I am eager to contribute my expertise and continue growing in the field of software development.</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
