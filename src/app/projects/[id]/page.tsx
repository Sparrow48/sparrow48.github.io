import ProjectDetails from '@/components/ProjectDetails';
import type { Metadata } from 'next';

interface ProjectProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const id = params.id;

  return {
    title: `Project | ${id}`,
  };
}

const Project = ({ params }: ProjectProps) => {
  const { id } = params;

  return (
    <>
      <ProjectDetails id={id} />
    </>
  );
};

export default Project;
