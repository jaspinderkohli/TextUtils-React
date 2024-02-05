import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("New text"); //Correct way to change the state
    // text = "New text"; //Wrong way to change the state
    
    const handleUpClick = () => {
        console.log('Uppercase was clicked' + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleOnChange = (event) => {
        console.log('On Change');
        setText(event.target.value);
        // setText(event.target.value);
    }

    const handleLoClick = () => {
        console.log('Lowercase was clicked' + text);
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleLocation = () => {
        console.log(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            props.showAlert("Location fetched", "success");
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
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8">
                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-info mx-2" onClick={handleLocation}>Locate</button>
            <button className="btn btn-info mx-2" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Enter something to preview here"}</p>
        </div>
        </>
    )
}