import { json } from "@remix-run/node";
import { client } from "../models/contentful.server";
import Hero from "../components/Hero";

export async function loader() {
	return json(await client.getPage("Michail"))
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
	return (
		<>
			<Hero />
		</>
	);
}