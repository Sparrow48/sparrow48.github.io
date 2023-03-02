import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import { Navbar, Button } from "flowbite-react";

const Header = () => {

    return (
        <Navbar
            fluid={true}
            rounded={true}
            className=" sticky z-20  py-2 gap-1 mx-auto  bg-white md:py-6 md:mb-6 dark:!bg-black"
        >
            <Navbar.Brand>
                <NavLink to="/">
                    <a className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Md. Abu Nasib
                    </a>
                </NavLink>

            </Navbar.Brand>
            <div className="flex space-x-1 md:order-2">
                <ThemeSwitch />
                <Navbar.Toggle className="-mt-1" />
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <NavLink to='/' className="font-medium tracking-wider transition-color hover:text-yellow-500">
                        Home
                    </NavLink>

                </Navbar.Link>
                <Navbar.Link>

                    <NavLink to='/experience' className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                        Experience
                    </NavLink>

                </Navbar.Link>
                <Navbar.Link>

                    <NavLink to='/skills' className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                        Skills
                    </NavLink>

                </Navbar.Link>
                <Navbar.Link>

                    <NavLink to='/projects' className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                        Projects
                    </NavLink>

                </Navbar.Link>
                <Navbar.Link>

                    <NavLink to='/certifications' className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                        Certifications
                    </NavLink>

                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

        // <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black max-w-4xl mx-auto">
        //     <div className='container px-4 mx-auto lg:max-w-4xl flex items-center justify-between'>
        //         <div>
        //             <NavLink to="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Md Abu Nasib</NavLink>
        //         </div>
        //         <div className="space-x-10">
        //             <NavLink to="/" className={textStyle}>Home</NavLink>
        //             <NavLink to="/experience" className={textStyle}>Experience</NavLink>
        //             <NavLink to="/skills" className={textStyle}>Skills</NavLink>
        //             <NavLink to="/projects" className={textStyle}>Projects</NavLink>
        //             <NavLink to="/certifications" className={textStyle}>Certifications</NavLink>
        //         </div>
        //         <div>
        //             <ThemeSwitch />
        //         </div>
        //     </div>
        // </div >

    )
}

export default Header