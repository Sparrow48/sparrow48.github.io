import React from 'react';

interface JobDescriptionProps {
  description: string;
  uniqId: number;
}

const JobDescription = ({ uniqId, description }: JobDescriptionProps) => {
  return (
    <li className="list-disc" key={uniqId}>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

export default JobDescription;
