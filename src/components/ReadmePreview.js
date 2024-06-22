import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReadmePreview = ({ file }) => {
    const { content } = file;

    return (
        <div className="readme-preview">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default ReadmePreview;
