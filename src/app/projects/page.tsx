import Project from '@/components/Project';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects',
};

const Projects = () => {
  return (
    <div className=" mx-auto antialiased">
      <Project />
    </div>
  );
};

export default Projects;
