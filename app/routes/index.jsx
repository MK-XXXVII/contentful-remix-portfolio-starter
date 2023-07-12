import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";

export async function loader() {
	const page = await client.getPage("Michail");
	const projects = await client.getProjects();
	return json({ ...page, projects });
}

export const meta = ({ data }) => {
	const { seoMetadata } = data;
	return {
		title: seoMetadata.title,
		description: seoMetadata.description,
		"og:image": `${seoMetadata.ogImage.url}`
	}
}

export default function Index() {
	const { projects } = useLoaderData();
	return (
		<>
			<Hero />
			<ProjectsGrid projects={projects} />
		</>
	);
}