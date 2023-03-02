import React from 'react'
import { BsGithub, BsLinkedin, BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from "react-router-dom";
import Profile from './../assets/Profile.jpg'
import { about } from '../store'

const Home = () => {
    const { name, jobDescription, company, description, opening } = about
    return (
        <div className='container mx-auto leading-7'>
            <div className=' lg:px-4 lg:space-x-5 lg:mt-12 flex lg:flex-row flex-col-reverse dark:text-white lg:text-left '>
                <div className='lg:pr-16'>
                    <span className=' text-5xl font-medium'>Hey there,</span>
                    <p className='mt-6'>I'm <span className=' font-semibold '>{name}</span>, {jobDescription} <a href={company.link} target="_blank" rel="noreferrer" className={"transition-colors hover:text-yellow-500 font-semibold"}>{company.name}</a></p>
                    <p className='mt-6'>{description}</p>
                    <p className='mt-6'>{opening}</p>
                </div>
                <div className=' flex flex-col '>
                    <img
                        src={Profile}
                        alt="Profile"
                        width={300}
                        height={300}
                        className=' rounded-md'
                    />
                    <div className='mt-10 flex w-auto justify-center lg:justify-start' >
                        <Link to={'https://github.com/Sparrow48'} className=" py-2 px-4 bg-gray-400 rounded-md text-2xl" target="_blank"><BsGithub /></Link>
                        <Link to={'https://www.linkedin.com/in/nasib48/'} className=" ml-2 py-2 px-4 bg-gray-400 rounded-md text-2xl" target="_blank"><BsLinkedin /></Link>
                        <Link to={'mailto: abunasib48@gmail.com'} className=" ml-2 py-2 px-4 bg-gray-400 rounded-md text-2xl" target="_blank"><SiGmail /></Link>
                        <Link to={'https://github.com/Sparrow48'} className=" ml-2 py-2 px-4 bg-gray-400 rounded-md text-2xl" target="_blank"><BsFillFileEarmarkPdfFill /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home