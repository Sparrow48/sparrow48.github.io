'use client';
import React, { useEffect, useState } from 'react';
import { BsCardList, BsLink45Deg, BsArrowLeftCircle } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { projects } from '@/store';
import TechItem from '@/components/TechItem';
import Head from 'next/head';
import { Project } from '@/@types';

interface ProjectDetailsProps {
  id: string;
}

const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const _project = projects[id as keyof typeof projects];
      setProject(_project);
    }
  }, [id]);

  const associatedWithView = () => {
    if (project?.associatedWith?.companyName) {
      return (
        <div className="flex items-center mt-4 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-4 ring-gray-200 dark:ring-gray-700 dark:bg-white">
            <img
              className="rounded-full shadow-lg p-px"
              src={project?.associatedWith?.companyLogo}
              alt=""
            />
          </span>
          <span>Associated with {project?.associatedWith?.companyName}</span>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const goBack = () => {
    // navigate(-1)
  };

  return (
    <>
      <Head>
        <title>{project?.title}</title>
      </Head>
      <section className="px-4 mb-10 mt-20 text-left">
        <h1 className="flex text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-3">
          <span className="lg:text-3xl cursor-pointer   mt-2 mr-4 ease-in-out">
            <BsArrowLeftCircle
              className="hover:bg-slate-700 hover:rounded-full hover:text-white "
              onClick={goBack}
            />
          </span>
          {project?.title}
        </h1>
        {/* Associated with company name with pic */}
        {associatedWithView()}
        {/* subtitle of the project */}
        <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-100">
          {project?.longDescription}
        </p>

        {/* project contribution list */}
        <div className="mt-8 space-y-2">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-md">
                <BsCardList className="text-xl" />
              </span>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                My Contributions
              </h3>
              {/* Project contribution list */}
              <ul className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                {project?.workDescriptions?.map((desc, index) => {
                  return (
                    <li key={index} className="ml-5 list-disc mt-2">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-md mt-8">
                <FaTools />
              </span>
            </div>
            <div className="ml-3 mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Tech Stacks
              </h3>
              <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap p-1">
                {project?.techStack?.map((tech, index) => {
                  return <TechItem key={index} tech={tech}></TechItem>;
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-8">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-md">
                <BsLink45Deg />
              </span>
            </div>
            <div className="ml-3 mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Links
              </h3>
              <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href={project?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {project?.link}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
