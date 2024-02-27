import React from 'react';

const JobDescription = ({ key, description }: any) => {
  return (
    <li className="list-disc" key={key}>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

export default JobDescription;
