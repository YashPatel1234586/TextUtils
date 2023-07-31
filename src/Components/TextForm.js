import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces remove", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Enter the text to analyze below</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>

                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 mb-2" onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 mb-2" onClick={handleLoClick}>LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 mb-2" onClick={handleExtraSpaces}>Extra-Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 mb-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 mb-2" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} word and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "enter something in the text to preview it here"}</p>
            </div>
        </>
    );
}
