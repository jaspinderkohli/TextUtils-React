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
            props.showAlert("Location fetched: Latitude is " + position.coords.latitude + " and Longitude is " + position.coords.longitude, "success");
          });
        
    }

    // credits : https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const wordLength = (str) => {
        let words = str.split(/\s+/);
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== "") {
                count += 1;
            }
        }
        return count;
    }

    const minRead = (str) => {
        let words = str.split(' ');
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== "") {
                count += 1;
            }
        }
        return 0.008 * count + " min read";
    }

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8">
                </textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-info mx-1 my-1" onClick={handleLocation}>Locate</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p> {wordLength(text)} words and {text.length} characters</p>
            <p> {minRead(text)} </p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Enter something to preview here"}</p>
        </div>
        </>
    )
}