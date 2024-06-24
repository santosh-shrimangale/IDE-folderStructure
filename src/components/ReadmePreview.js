import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReadmePreview = ({ file }) => {
    const { content } = file;

    return (
        <div className="readme-preview">
        <div># IDE-folderStructure</div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default ReadmePreview;
