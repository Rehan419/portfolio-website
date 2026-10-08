import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // If showAll is false, show featured or first 4 projects; if true, show all projects
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, 4);

  return (
    <section id="projects" className="pt-12 scroll-mt-20">
      <SectionHeader
        icon={FolderGit2}
        title="Featured Projects"
        badge={projects.length}
        actionText={showAll ? "Show Less" : "View All"}
        onActionClick={() => setShowAll(!showAll)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
