const initialState = {
    notes: [],
}


export const todoApp = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'ADD_NOTE':
        return { ...state, notes: [...state.notes, { id: null, text: action.text }] }

    case 'MODIFY_NOTE':
        const notes = [...state.notes]
        if (0 <= action.index && action.index < notes.length) {
            const modifiedNote = { ...notes[action.index], text: action.text };
            notes[action.index] = modifiedNote;
        }

        return { ...state, notes: notes }
    }
    // Unknown action, don't do anything.
    return state;
}
