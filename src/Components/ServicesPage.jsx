import React from 'react'
import { FaPaintBrush, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

function ServicesPage() {

    const services = [
        {
            name: 'UI/UX Design',
            icon: <FaPaintBrush size={30} color='#ffffff' />, // Paint brush for design and creativity
            desc: 'Crafting user-friendly interfaces and intuitive user experiences using modern design principles. Expertise in wireframing, prototyping, and ensuring responsive designs.'
        },
        {
            name: 'Web Development',
            icon: <FaLaptopCode size={30} color='#ffffff' />, // Laptop with code for web development
            desc: 'Building dynamic and responsive websites using the MERN stack (MongoDB, Express, React, Node.js). Skilled in API integration, Spring Boot framework, and implementing JWT for secure authentication.'
        },
        {
            name: 'Mobile App Development',
            icon: <FaMobileAlt size={30} color='#ffffff' />, // Mobile phone for app development
            desc: 'Creating cross-platform mobile applications using React Native. Ensuring responsive designs, smooth functionality, and a seamless user experience tailored to business needs.'
        }
    ];

    return (
        <div id='services' className='flex flex-col h-full p-10'>
            <div className='text-7xl text-white font-bold text-center mb-10'>Services Page</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
                {services.map((service, index) => (
                    <div key={index} className='relative flex flex-col justify-between mx-auto group'>
         
                        <div className='absolute left-4 -top-6 flex items-center justify-center rounded-full min-w-[60px] h-[60px] bg-orange-500 transform transition-all duration-500 group-hover:scale-105 z-10'>
                            {service.icon}
                        </div>

                 
                        <div className='flex flex-col h-[330px] bg-gray-500 bg-opacity-20 rounded-xl border-gray-500 p-6 max-w-sm transform transition-all duration-500 group-hover:scale-105'>
                            <div className='flex flex-col gap-5 mt-5 cursor-pointer'>
                                <div className='text-2xl font-bold text-white'>{service.name}</div>
                                <div className='border border-orange-400 w-[60px]'></div>
                                <div className='text-sm text-white'>{service.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
