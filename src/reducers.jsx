import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const initialState = {
    notes: [],
    editing: [],
}


export const noteListReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'ADD_NOTE':
        return {
            ...state,
            notes: [ ...state.notes, { id: null, text: action.text } ],
            editing: [ ...state.editing, false ],
        }

    case 'MODIFY_NOTE':
        const notes = [...state.notes]
        if (0 <= action.index && action.index < notes.length) {
            const modifiedNote = { ...notes[action.index], text: action.text };
            notes[action.index] = modifiedNote;
        }

        return { ...state, notes: notes }

    case 'TOGGLE_NOTE_EDIT':
        const editing = [ ...state.editing ];
        editing[action.index] = !state.editing[action.index];
        return { ...state, editing };
    }


    // Unknown action, don't do anything.
    return state;
}

const reducers = {
    noteList: noteListReducer,
    form: formReducer,
}

const reducer = combineReducers(reducers);

export default reducer;
