import React from 'react';

interface TechItemProps {
  tech: string;
  key: number;
}

const TechItem = ({ tech, key }: TechItemProps) => {
  return (
    <li
      key={key}
      className="px-2 py-1 mr-2 mb-2 text-xs font-medium leading-none text-white  bg-gray-700 rounded-full dark:text-white dark:bg-gray-700 flex"
    >
      <span className="ml-1">{tech}</span>
    </li>
  );
};

export default TechItem;
