import React, { useState } from 'react';

const TextEditor = ({ file }) => {
    const [content, setContent] = useState(file.content);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <textarea
            className="text-editor"
            value={content}
            onChange={handleContentChange}
        />
    );
};

export default TextEditor;
