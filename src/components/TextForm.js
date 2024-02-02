import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("New text"); //Correct way to change the state
    // text = "New text"; //Wrong way to change the state
    
    const handleUpClick = () => {
        console.log('Uppercase was clicked' + text);
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        console.log('On Change');
        setText(event.target.value);
        // setText(event.target.value);
    }

    const handleLoClick = () => {
        console.log('Lowercase was clicked' + text);
        setText(text.toLowerCase());
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleLocation = () => {
        console.log(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }

    // credits : https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}>

                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-info mx-2" onClick={handleLocation}>Locate</button>
            <button className="btn btn-info mx-2" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}