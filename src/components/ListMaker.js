import React, { useState } from 'react';

const ListMaker = ({ file }) => {
    const [items, setItems] = useState(file.content || []);

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
            <button onClick={handleItemAdd}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input
                            type="text"
                            value={item.content}
                            onChange={(e) => handleItemChange(item.id, e.target.value)}
                        />
                        <button onClick={() => handleItemDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMaker;
