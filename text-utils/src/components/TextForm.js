import React, {useState} from "react";



export default function TextForm(props) {

    const handleUpClick = () => {
        
                let newText = text.toUpperCase();
                setText(newText);
    }

    const handleLoClick = () => {
                let newText = text.toLowerCase();
                setText(newText);
    }

    const clearTextClick = () => {
                
                setText("");
    }

    const removeExtraSpacesClick = () => {
                let newText = text.replace(/\s+/g, ' ').trim();
                setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

  return (
    <>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary me-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary me-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary me-1" onClick={removeExtraSpacesClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary me-1" onClick={clearTextClick} >Clear Text</button>
      
    </>
  );
}
