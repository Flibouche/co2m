import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <p>Aucun projet trouvé !</p>
  }

  return (
    <div className="flex justify-center flex-1">
      <div>
        <h2>{project.title}</h2>
        <img src={project.src} alt={project.alt} />
        <p>{project.description}</p>
      </div>
    </div>
  );
}