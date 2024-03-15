import Link from 'next/link';
import TechItem from './TechItem';
import { Project } from '@/@types';

interface ProjectCardProps {
  project: Project;
  id: string;
  uniqId: number;
}

function ProjectCard({ project, id, uniqId }: ProjectCardProps) {
  const { title, description, techStack, link } = project;

  return (
    <Link
      key={uniqId}
      href={`/projects/${id}`}
      className="transition ease-in-out delay-150 bg-white border border-gray-200 rounded-lg shadow sm:max-w-sm lg:max-w-md dark:bg-neutral-900 dark:border-gray-700 hover:border-dashed hover:dark:bg-black hover:bg-slate-100"
    >
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 text-sm font-normal text-gray-500 dark:text-white">
          {techStack.map((tech: string, index: number) => {
            return <TechItem key={index} uniqId={index} tech={tech}></TechItem>;
          })}
        </ul>
      </div>
    </Link>
  );
}

export default ProjectCard;
