import React from 'react';
import NoteList from '../containers/NoteList.jsx';
import AddNote from '../containers/AddNote.jsx';
import 'bootstrap/less/bootstrap.less';

const App = () => {
    return <div>
        <NoteList />
        <AddNote />
    </div>
}

export default App;
