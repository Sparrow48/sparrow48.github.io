import React from 'react'
import ExperienceCard from '../components/ExperienceItem'
import { experiences } from '../store'

const Experience = () => {
    const renderExperiences = experiences.map((experience) => {
        return (<ExperienceCard experience={experience} />)
    })
    return (
        <div className="container px-4 mx-auto leading-7 mt-20">
            <div className=" mx-auto top-20 antialiased text-left px-4 mt-12">
                <h1 className=' text-5xl font-semibold'>
                    Experience
                </h1>
                <div className='mt-12 dark:text-white text-gray-700'>
                    <ol className="-z-10 relative border-l-2 border-gray-200 dark:border-gray-700">
                        {renderExperiences}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Experience