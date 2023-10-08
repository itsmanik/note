import React from "react";
import ReactDOM from "react-dom";

function Note(props) {
    return <div className="note">
        <p className="noteTitle">{props.title}</p>
        <p className="noteBody">{props.body}</p>
    </div>
}

export default Note;