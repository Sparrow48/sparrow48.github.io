import ProjectDetails from '@/components/ProjectDetails';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  return {
    title: `Project | ${id}`,
  };
}

const Project = ({ params }: any) => {
  const { id } = params;

  return (
    <>
      <ProjectDetails id={id} />
    </>
  );
};

export default Project;
