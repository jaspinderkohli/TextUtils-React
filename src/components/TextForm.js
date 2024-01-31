import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    // setText("New text"); //Correct way to change the state
    const handleUpClick = () => {
        console.log('Uppercase was clicked' + text);
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        console.log('On Change');
        setText(event.target.value);
        // setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}>

                </textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
        </div>
    )
}
