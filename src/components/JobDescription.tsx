import React from 'react';

interface JobDescriptionProps {
  description: string;
  key: number;
}

const JobDescription = ({ key, description }: JobDescriptionProps) => {
  return (
    <li className="list-disc" key={key}>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

export default JobDescription;
