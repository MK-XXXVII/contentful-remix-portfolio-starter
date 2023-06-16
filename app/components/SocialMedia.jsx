import { useLoaderData } from "@remix-run/react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { json } from "@remix-run/node";
import { client } from "../models/contentful.server";

export async function loader() {
	return json(await client.getPage("Michail"))
}
export default function SocialMedia() {
    const { linksCollection } = useLoaderData();

    const links = {}
	linksCollection.items.forEach(link => {
		Object.assign(links, Object.fromEntries([Object.values(link)]))
	});

    return (
        <div className="flex flex-nowrap gap-2 mt-4 sm:mt-16 dark:text-secondary items-start">
            <a href={links.LinkedIn} target="_blank" aria-label="LinkedIn" rel="noreferrer"><FaLinkedin className="h-10 w-10 sm:h-14 sm:w-14 fill-secondary" /></a>
            <a href={links.GitHub} target="_blank" aria-label="GitHub" rel="noreferrer"><FaGithub className="h-10 w-10 sm:h-14 sm:w-14 fill-secondary" /></a>
            <a href={links.Facebook} target="_blank" aria-label="Facebook" rel="noreferrer"><FaFacebook className="h-10 w-10 sm:h-14 sm:w-14 fill-secondary" /></a>
            <a href={links.Instagram} target="_blank" aria-label="Instagram" rel="noreferrer"><FaInstagram className="h-10 w-10 sm:h-14 sm:w-14 fill-secondary" /></a>
            <a href={links.Twitter} target="_blank" aria-label="Twitter" rel="noreferrer"><FaTwitter className="h-10 w-10 sm:h-14 sm:w-14 fill-secondary" /></a>
            <a href={links.YouTube} target="_blank" aria-label="YouTube" rel="noreferrer"><FaYoutube className="h-10 w-10 sm:h-14 sm:w-14 fill-secondary" /></a>
        </div>
    )
}