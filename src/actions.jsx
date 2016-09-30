export function addNote({ text }) {
    return { type: 'ADD_NOTE', text }
}

export function modifyNote({ index, text }) {
    return { type: 'MODIFY_NOTE', index, text }
}
