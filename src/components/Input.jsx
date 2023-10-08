import React from "react";
import ReactDOM from "react-dom";

function Input(prop) {

    function onAdd(event) {
        event.preventDefault();
        var title = document.getElementById("title").value;
        var body = document.getElementById("body").value;
        if (title == "") return; 
        var obj = {
            title: title,
            body: body
        }
        prop.add(obj);
        document.getElementById("title").value = "";
        document.getElementById("body").value = "";
    }

    return <div>
        <form>
            <p>create...</p>
            <input type="text" name="title" placeholder="title" id="title"></input>
            <textarea placeholder="description" name="body" rows={6} id="body"></textarea>
            <button onClick={onAdd}>add</button>
        </form>
    </div>
}

export default Input;