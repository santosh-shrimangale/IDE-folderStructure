import React from 'react';

const Folder = ({ folder }) => {
    return (
        <div className="folder">
            <div className="folder-name">{folder.name}</div>
            {folder.folders.map(subfolder => (
                <Folder key={subfolder.id} folder={subfolder} />
            ))}
            {folder.files.map(file => (
                <div key={file.id} className="file">{file.name}</div>
            ))}
        </div>
    );
};

export default Folder;
