import React from 'react';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';

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