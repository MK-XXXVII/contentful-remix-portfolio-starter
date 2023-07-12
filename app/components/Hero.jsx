import { TextLoop } from "react-text-loop-next";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useSpring, animated } from 'react-spring';
import SocialMedia from "./SocialMedia";

import { client } from "../models/contentful.server";

export async function loader() {
    return json(await client.getPage("Michail"))
}

export default function Hero() {
    const { title, rolesCollection, description, imageForPage } = useLoaderData();

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <b>{text}</b>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => <p>{children}</p>,
        },
    };

    const shakeAnimation = useSpring({
        to: [
            { transform: 'rotate(5deg)' },
            { transform: 'rotate(-5deg)' },
        ],
        from: { transform: 'rotate(0deg)' },
        config: { tension: 80, friction: 10 },
        reset: true,
        loop: true
    });

    return (
        <div className="relative isolate max-h-full overflow-hidden">
            <div className="mx-auto max-w-full px-4 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:px-8">
                <div className="lg:pt-20" >
                    {imageForPage && (
                        <img src={imageForPage.url} alt="Hero" className="w-full object-cover object-center h-auto lg:hidden" />
                    )}
                    <div className="mx-auto">
                        <div className="max-w-3xl">
                            <div className="items-center justify-center pt-8 lg:pt-0">
                                <h1 className="text-3xl text-start text-happy md:text-start sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                                    Hello, I'm{' '}
                                    <animated.div style={shakeAnimation}
                                        className="inline-block text-center bg-happy text-black px-2 py-4 dark:bg-secondary dark:text-primary">
                                        {title}
                                    </animated.div>
                                </h1>
                            </div>
                            <div className="flex flex-wrap text-white items-center justify-left text-center sm:justify-left md:justify-start lg:justify-start xl:justify-start 
                                            text-2xl md:text-2xl lg:text-3xl xl:text-4xl 
                                            pt-6 font-bold tracking-tighter">
                                <h1>
                                    and I'm{'  '}
                                </h1>
                                <TextLoop mask={true}>
                                    {rolesCollection.items.map(role => (
                                        <h1 className="bg-deepPurple px-2 py-4 mx-2" key={role.roleTitle}>
                                            {role.roleTitle}
                                        </h1>
                                    ))}
                                </TextLoop>
                                <span> Developer</span>
                            </div>
                            <p className="my-6 text-lg leading-8 text-cyan">
                                {documentToReactComponents(description.json, options)}
                            </p>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 text-center lg:flex items-center justify-center hidden">
                    {imageForPage && (
                        <img src={imageForPage.url} alt={imageForPage.title} className="w-full object-cover object-center h-auto" />
                    )}
                </div>
            </div>
        </div>
    )
}