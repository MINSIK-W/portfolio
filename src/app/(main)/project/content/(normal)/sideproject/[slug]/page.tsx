import { sideProjectsData } from '@/data/sideProjectsData';
import { notFound } from 'next/navigation';
import TitleContent from '@/app/(main)/project/content/(normal)/sideproject/[slug]/components/TitleContent';
import ProjectOutline from '@/app/(main)/project/content/(normal)/sideproject/[slug]/components/ProjectOutline';
import Technologies from '@/app/(main)/project/content/(normal)/sideproject/[slug]/components/Technologies';
import MainFunction from '@/app/(main)/project/content/(normal)/sideproject/[slug]/components/MainFunction';
import ChallengeAndExcellence from '@/app/(main)/project/content/(normal)/sideproject/[slug]/components/ChallengeAndExcellence';
import FutureImprovement from '@/app/(main)/project/content/(normal)/sideproject/[slug]/components/FutureImprovement';

export function generateStaticParams() {
  return sideProjectsData.map((project) => ({
    slug: project.path,
  }));
}
type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = sideProjectsData.find((p) => p.path === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="font-noto mx-auto max-w-4xl space-y-12 py-8">
      <TitleContent
        title={project.title}
        date={project.toggle[0].date}
        note={project.note}
        pathLive={project.pathLive}
        githubUrl={project.githubUrl}
      />
      <ProjectOutline intro={project.intro} />
      <Technologies technologies={project.technologies} />
      <MainFunction features={project.features} />
      <ChallengeAndExcellence challenges={project.challenges} learnings={project.learnings} />
      <FutureImprovement improvement={project.improvement} />
    </div>
  );
}
