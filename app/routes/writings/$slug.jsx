import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from '../../models/contentful.server';
import Title from "../../components/Title";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const loader = async ({ params }) => {
	const { slug } = params;
	return json(await client.getSingleBlog(slug))
}

export const meta = ({ data }) => {
	const { title, description, openGraphImage } = data
	return {
		title,
		description,
		"og:image": `${openGraphImage.url || ''} ${openGraphImage.title || ''}`
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
		[BLOCKS.PARAGRAPH]: (_node, children) => {
			return (
				<p className="text-secondary text-base dark:text-gray-400 leading-relaxed mb-4 text-justify">{children}</p>
			);
		},
		[BLOCKS.HEADING_1]: (_node, children) => {
			return (
				<h2 className="text-4xl">{children}</h2>
			)
		},
		[BLOCKS.HEADING_2]: (_node, children) => {
			return (
				<h2 className="text-2xl font-semibold text-secondary my-6">{children}</h2>
			)
		},
		[BLOCKS.OL_LIST]: (_node, children) => {
			return (
				<ol className="list-decimal">{children}</ol>
			)
		},
		[BLOCKS.LIST_ITEM]: (_node, children) => {
			return (
				<li className="text-secondary text-lg dark:text-gray-400 mb-4">{children}</li>
			)
		}
	}
};

export default function PostSlug() {
	const { title, description, tag, blogBody, sys, canonicalUrl, openGraphImage } = useLoaderData();
	let canonicalName = '';
	if (canonicalUrl) {
		canonicalName = canonicalUrl.replace('https://', '').split('/')[0];
	}

	return (
		<div className="sm:max-w-3xl mx-auto px-4 sm:px-0 pb-28">
			<Title title={title} />
			{openGraphImage &&
				<img
					src={openGraphImage.url}
					alt={openGraphImage.title}
					className="w-full h-auto object-cover rounded-lg pb-10"
				/>
			}
			{description && <p className="text-xl text-secondary dark:text-gray-400 mb-8">{description}</p>}
			{tag && (
				<p className="text-lg font-bold text-secondary dark:text-cyan mx-2 mb-4 my-4">
					Tags:{" "}
					{tag.map((t, index) => (
						<span key={index} className="bg-happy px-2 py-1 mx-2 rounded-full border-2 border-secondary">
							{t}
							{index < tag.length - 1 && ", "}
						</span>
					))}
				</p>
			)}				<article className="mt-4">
				<div className="post">
					{canonicalUrl ? (
						<p className="text-lg my-8 italic">
							This blog was originally shared on{' '}
							<a href={canonicalUrl}>
								{canonicalName}
							</a>
							.
						</p>
					) : null}
					{documentToReactComponents(blogBody.json, richTextRenderOptions)}
				</div>
			</article>
			<p className="text-hover italic">
				Last Updated: {new Date(sys.publishedAt).toDateString()}
			</p>
		</div>
	)
}
