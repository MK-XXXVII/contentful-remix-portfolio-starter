import { useSpring, animated } from 'react-spring';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextRenderOptions } from './richTextRenderOptions';

function ProjectCard({ project }) {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
    });

    return (
        <animated.li 
            key={project.title}
            style={fadeIn}
            className="relative group block w-full overflow-hidden rounded-lg bg-cyan dark:bg-gray-700 shadow-md cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
            <div className="aspect-w-10 aspect-h-7 overflow-hidden">
                <img alt="" {...project.image} className="pointer-events-none object-cover group-hover:opacity-75" />
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-lg sm:text-xl mb-2 dark:text-secondary">
                    {project.title}{' '}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span
                            role="img"
                            aria-label="internet"
                            className="cursor-pointer"
                        >
                            🔗
                        </span>
                    </a>
                </h2>
                {documentToReactComponents(
                    project.desc.json,
                    richTextRenderOptions
                )}
            </div>
        </animated.li>
    );
}

export default ProjectCard;
