import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TextEditor from './TextEditor';
import NoteMaker from './NoteMaker';

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
            content: ''
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
                {selectedFile &&
                    (selectedFile.type === 'ed' ? (
                        <TextEditor file={selectedFile} />
                    ) : selectedFile.type === 'note' ? (
                        <NoteMaker file={selectedFile} />
                    ) : null)}
            </div>
        </div>
    );
};

export default IDE;
