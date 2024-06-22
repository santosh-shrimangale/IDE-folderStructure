import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TextEditor from './TextEditor';
import NoteMaker from './NoteMaker';
import ListMaker from './ListMaker';
import ReadmePreview from './ReadmePreview';

const IDE = () => {
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFolderCreate = () => {
        const newFolder = {
            id: folders.length + 1,
            name: `New Folder ${folders.length + 1}`,
            folders: [],
            files: []
        };
        setFolders([...folders, newFolder]);
    };

    const handleFileCreate = (extension) => {
        const newFile = {
            id: files.length + 1,
            name: `New File ${files.length + 1}.${extension}`,
            type: extension,
            content: extension === 'lt' ? [] : '' // Initialize content based on file type
        };
        setFiles([...files, newFile]);
    };

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    return (
        <div className="ide">
            <Sidebar
                folders={folders}
                files={files}
                onFolderCreate={handleFolderCreate}
                onFileCreate={handleFileCreate}
                onFileSelect={handleFileSelect}
            />
            <div className="editor">
                {selectedFile && (
                    {
                        'ed': <TextEditor file={selectedFile} />,
                        'note': <NoteMaker file={selectedFile} />,
                        'lt': <ListMaker file={selectedFile} />,
                        'readme': <ReadmePreview file={selectedFile} />
                    }[selectedFile.type] || null
                )}
            </div>
        </div>
    );
};

export default IDE;
