import React, { useState } from 'react';

const ListMaker = ({ file }) => {
console.log(file)

    const [items, setItems] = useState( [{
        id: `item-${0}`,
        content: ''
    }]);

    // console.log(items)

    const handleItemAdd = () => {
        const newItem = {
            id: `item-${items.length + 1}`,
            content: ''
        };
        setItems([...items, newItem]);
    };

    const handleItemChange = (itemId, content) => {
        const updatedItems = items.map(item =>
            item.id === itemId ? { ...item, content } : item
        );
        setItems(updatedItems);
    };

    const handleItemDelete = (itemId) => {

        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    };

    return (
        <div className="list-maker">
            <button className='addNoteBtn' onClick={handleItemAdd}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input
                            type="text"
                            value={item.content}
                            onChange={(e) => handleItemChange(item.id, e.target.value)}
                        />
                        <button className='deleteNote' onClick={() => handleItemDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMaker;
