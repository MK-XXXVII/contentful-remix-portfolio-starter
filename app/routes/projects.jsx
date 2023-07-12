import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Title from "../components/Title";
import { client } from "../models/contentful.server";
import ProjectsGrid from '../components/ProjectsGrid';

export async function loader() {
    const projects = await client.getProjects();
    const page = await client.getPage("Projects")
    return json({ projects, page });
}

export const meta = ({ data }) => {
    const { title, description, ogImage } = data.page.seoMetadata
    return {
        title,
        description,
        "og:image": `${ogImage.url}`
    }
}

export default function Projects() {
    const { projects } = useLoaderData();

    return (
        <div className="px-8 md:px-24 lg:px-32">
            <Title title="Projects" emoji="💻" />
            <ProjectsGrid projects={projects} />
        </div>
    );
}