import React from 'react';
import Folder from './Folder';
import File from './File';

const Sidebar = ({ folders, files, onFolderCreate, onFileCreate, onFileSelect }) => {
    return (
        <div className="sidebar">
            <div className="folders">
                {folders.map(folder => (
                    <Folder key={folder.id} folder={folder} />
                ))}
            </div>
            <div className="files">
                {files.map(file => (
                    <File key={file.id} file={file} onSelect={onFileSelect} />
                ))}
            </div>
            <button onClick={onFolderCreate}>New Folder</button>
            <button onClick={() => onFileCreate('ed')}>New .ed File</button>
            <button onClick={() => onFileCreate('note')}>New .note File</button>
        </div>
    );
};

export default Sidebar;
