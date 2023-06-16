import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Title from "../components/Title";
import { client } from "../models/contentful.server";
import { useSpring, animated } from 'react-spring';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export async function loader() {
	const projects = await client.getProjects();
	const page = await client.getPage("Projects")
	return json({projects, page});
}

export const meta= ({data}) =>{
	const { title, description, ogImage } = data.page.seoMetadata
	return {
		title,
		description,
		"og:image": `${ogImage.url}`
	}
}

export const richTextRenderOptions = {
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			const { data } = node;
			const { uri } = data;
			return (
					<a
						className="text-primary underline dark:text-secondary"
						target="_blank"
                        href={uri} rel="noreferrer"
					>
						{children[0]}
					</a>
			);
		},
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return (
				<p className="text-gray-700 text-base dark:text-gray-400">{children}</p>
			);
		},
	},
};

export default function Projects() {
    const {projects} = useLoaderData();

    const popUpAnimation = useSpring({
		to: { transform: 'scale(1)' },
		from: { transform: 'scale(0.90)' },
		config: { tension: 100, friction: 5 }
	})

    return (
        <div className="px-8 md:px-24 lg:px-32">
            <Title title="Projects 1" emoji="💻" />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => {
                    return (
                        <animated.div
                            style={popUpAnimation}
                            key={project.title}
                            className="mt-8 rounded overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-700"
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'block',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        transform: 'scale(1.5)',
                                        filter: 'blur(40px)',
                                        // ...project.css,
                                    }}
                                />
                                <img alt="" {...project.image} className="w-full h-64 object-cover"/>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-lg sm:text-xl mb-2 dark:text-secondary">
                                    {project.title}{' '}
                                    <a href={project.link} target="_blank" rel="noreferrer">
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
                        </animated.div>
                    );
                })}
            </div>
        </div>
    )
}
