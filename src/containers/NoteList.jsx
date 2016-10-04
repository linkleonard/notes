import NoteListComponent from '../components/NoteList.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        notes: state.noteList.notes,
        editing: state.noteList.editing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const NoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteListComponent)

export default NoteList;
