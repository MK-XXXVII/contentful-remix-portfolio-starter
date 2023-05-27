import { TextLoop } from "react-text-loop-next";
import { motion } from 'framer-motion';
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import { FaGithub, FaLinkedin, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';

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
	const { title, rolesCollection, linksCollection } = useLoaderData();
	const links = {}
	linksCollection.items.forEach(link => {
		Object.assign(links, Object.fromEntries([Object.values(link)]))
	});
	return (
		<div className="mt-24 sm:mt-24 w-full dark:text-white">
			<div className="text-center">
				<h1 className="text-3xl sm:text-6xl">
					Hello, I'm{' '}
					<motion.div animate={{
						rotate: [0, 5, 0, -5, 0]
					}}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
							loop: "Infinity",
							repeatDelay: 2
						}}
						className="inline-block text-center bg-primary text-secondary px-2 dark:bg-secondary dark:text-primary"
					>{title}
					</motion.div>
				</h1>
			</div>
			<div className="text-center pt-8">
				<TextLoop mask={true}>
					{rolesCollection.items.map(role => (
						<h1 className="text-2xl sm:text-5xl bg-happy px-2 py-1" key={role.roleTitle}>
							{role.roleTitle}
						</h1>
					))}
				</TextLoop>
				<span className="text-2xl sm:text-5xl"> Developer</span>
			</div>
			<div className="mt-8 sm:mt-16 flex justify-between sm:mx-64 mx-12 dark:text-secondary">
				<a href={links.LinkedIn} target="_blank" aria-label="LinkedIn" rel="noreferrer"><FaLinkedin className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
				<a href={links.GitHub} target="_blank" aria-label="GitHub" rel="noreferrer"><FaGithub className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
				<a href={links.Twitter} target="_blank" aria-label="Twitter" rel="noreferrer"><FaTwitter className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
				<a href={links.Twitch} target="_blank" aria-label="Twitch" rel="noreferrer"><FaTwitch className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
				<a href={links.YouTube} target="_blank" aria-label="YouTube" rel="noreferrer"><FaYoutube className="h-12 w-12 sm:h-16 sm:w-16 fill-current" /></a>
			</div>
		</div>
	);
}
