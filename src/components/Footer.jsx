import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='  border-t-2 mt-12'>
            <div className='flex px-4 pt-3 justify-between'>
                <p>Design has been adopted from <a className=' font-medium hover:text-yellow-400' href={'https://github.com/caffeines'} target="_blank" >caffeines</a></p>
                <div className='flex gap-4'>
                    <Link className=' hover:text-yellow-400' to={'https://github.com/Sparrow48'} target="_blank">Github</Link>
                    <Link className=' hover:text-yellow-400' to={'https://www.linkedin.com/in/nasib48/'} target="_blank">LinkedIn</Link>
                    <Link className=' hover:text-yellow-400' to={''} target="_blank">Resume</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer 