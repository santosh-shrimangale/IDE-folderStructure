import React from 'react';

const File = ({ file, onSelect }) => {
    const handleClick = () => {
        onSelect(file);
    };

    return (
        <div className="file" onClick={handleClick}>
            {file.name}
        </div>
    );
};

export default File;
