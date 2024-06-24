import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const NoteMaker = ({ file = { notes: [] } }) => {
    const [notes, setNotes] = useState(file.notes || []);

    const handleNoteAdd = () => {
        const newNote = {
            id: `note-${notes.length + 1}`,
            content: '',
            category: 'To Do'
        };
        setNotes([...notes, newNote]);
    };

    const handleNoteDelete = (noteId) => {
        const updatedNotes = notes.filter(note => note.id !== noteId);
        setNotes(updatedNotes);
    };

    const handleNoteChange = (noteId, content) => {
        const updatedNotes = notes.map(note =>
            note.id === noteId ? { ...note, content } : note
        );
        setNotes(updatedNotes);
    };

    const handleCategoryChange = (noteId, category) => {
        const updatedNotes = notes.map(note =>
            note.id === noteId ? { ...note, category } : note
        );
        setNotes(updatedNotes);
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedNotes = Array.from(notes);
        const [removed] = reorderedNotes.splice(result.source.index, 1);
        removed.category = result.destination.droppableId;
        reorderedNotes.splice(result.destination.index, 0, removed);

        setNotes(reorderedNotes);
    };

    return (
        <div className="note-maker">
            <p className='addNoteBtn' onClick={handleNoteAdd}>Add Note</p>
            <DragDropContext onDragEnd={onDragEnd}>
                {['To Do', 'In Progress', 'Done'].map(category => (
                    <Droppable key={category} droppableId={category}>
                        {(provided) => (
                            <div
                                className="note-category note-category-container"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2>{category}</h2>
                                {notes
                                    .filter(note => note.category === category)
                                    .map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    className="note"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <textarea
                                                        value={note.content}
                                                        onChange={(e) => handleNoteChange(note.id, e.target.value)}
                                                        className="note-content"
                                                    />
                                                    <select
                                                        value={note.category}
                                                        onChange={(e) => handleCategoryChange(note.id, e.target.value)}
                                                        className="note-category"
                                                    >
                                                        <option value="To Do">To Do</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="Done">Done</option>
                                                    </select>
                                                    <button onClick={() => handleNoteDelete(note.id)}>Delete</button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </div>
    );
};

export default NoteMaker;
