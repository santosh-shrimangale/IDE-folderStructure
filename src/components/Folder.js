import React, { useState } from 'react';

const Folder = ({ folder, setFolders, folders }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [EditValue, setEditValue] = useState(folder.name);

    const handleEditFolderName = () => {
        setIsEdit(true);
    }

    const handleEditInputChange = (e) => {
        setEditValue(e.target.value);
    }
    const handleSaveFolderChange = () => {
        setFolders(folders.map(fol =>
            fol.id === folder.id ? { ...fol, name: EditValue } : fol
        ));
        setIsEdit(false);
    };

    return (
        <div className="folder">
            {
                isEdit ? (
                    <>
                        <input type="text" className='editInput' placeholder='Type text here...' value={EditValue} onChange={handleEditInputChange} />
                        <p className='editButton' onClick={handleSaveFolderChange}>Save</p>
                    </>
                ) : (

                    <>
                        <div className="folder-name">{folder.name}
                        </div>
                        <p className='editButton' onClick={handleEditFolderName}>Edit</p>

                    </>
                )
            }
        </div>
    );
};

export default Folder;
