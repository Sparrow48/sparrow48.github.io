import Skill from '@/components/Skills';
import { skills } from '@/store';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Skills',
};

const Skills = () => {
  const renderSkills = skills.map((skill, index) => {
    return (
      <li key={index} className="flex justify-between items-center mb-2">
        <Skill skill={skill} uniqId={index} />
      </li>
    );
  });

  return (
    <div className="text-left px-4 mt-12">
      <div className="max-w-4xl mx-auto antialiased">
        <section className="px-4 mb-10 mt-20">
          <h1 className="flex text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-3">
            Skills
          </h1>
          <ul className="flex mt-20 flex-wrap">{renderSkills}</ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
