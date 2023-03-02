import React from 'react'

const JobDescription = ({ key, description }) => {
    return (
        <li className="list-disc">
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </li>
    )
}

export default JobDescription