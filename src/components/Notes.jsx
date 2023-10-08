import React from "react";
import ReactDOM from "react-dom";
import Note from "./Note";

function Notes(props) {
    return <div className="notes">
        <p>your notes :)</p>
        {props.notes.map((note) => 
            <Note title={note.title} body={note.body} />
        )}
        <Note title="Sample Note" body="Body of your note will be here" />
    </div>
}

export default Notes;