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
    linksCollection.items.forEach(link => Object.assign(links, Object.fromEntries([Object.values(link)])));
    
    const socialMediaLinks = Object.keys(links).map((key) => {
      let Icon;
      switch (key) {
        case "LinkedIn":
            Icon = <FaLinkedin className="h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy" />;
            break;
        case "GitHub":
            Icon = <FaGithub className="h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"  />;
           break;
        case "Facebook":
            Icon = <FaFacebook className="h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"  />;
            break;
        case "Instagram":
            Icon = <FaInstagram className="h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"  />;
            break;
        case "Twitter":
            Icon = <FaTwitter className="h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"  />;
            break;
        case "YouTube":
            Icon = <FaYoutube className="h-8 w-8 sm:h-12 sm:w-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-125 fill-happy"  />;
            break;
        default:
          break;
      }
      return (
        <a 
            key={key} 
            href={links[key]} 
            target="_blank" 
            aria-label={key} 
            rel="noreferrer"
        >
            {Icon}
        </a>
      );
    })

    return (
        <div className="flex flex-nowrap gap-4 mt-4 sm:mt-16 dark:text-happy items-start">
            {socialMediaLinks}
        </div>
    )
}