import React from "react";
import { Link } from "react-router-dom";

const SingleNote = props => {
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );
    const deleteNotes = e => {
      e.preventDefault();
      props.deleteNote(note._id);
      props.history.push("/");
    };
    return (
      <div className="singleNote">
        {props.deleting && (
          <div className="deleteModal">
            <p>Are you sure you want to delete this?</p>
            <div className="button-div">
              <button className="delete-button" onClick={deleteNotes}>
                Delete
              </button>
              <button className="no-button" onClick={props.toggleDeletingOff}>
                No
              </button>
            </div>
          </div>
        )}
        <h5 className="editDelete">
          <Link
            to={`/note/${note._id}/edit`}
            onClick={() => props.editingNote(note.title, note.textBody)}
          >
            edit
          </Link>{" "}
          <span onClick={props.toggleDeletingOn}>delete</span>
        </h5>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
      </div>
    );
  } else {
    return <h2>Loading Note...</h2>;
  }
};

export default SingleNote;
