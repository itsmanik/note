import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import Notes from "./Notes";

function Main() {
    const [notes, setNotes] = useState([]);

    function add(note) {
        setNotes(
            [...notes, note]
        );
    }

    return <main>
        <Input add={add} />
        <Notes notes={notes} />
    </main>;
}

export default Main;