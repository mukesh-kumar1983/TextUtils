import React, {useState} from "react";



export default function TextForm(props) {

    const handleUpClick = () => {
        
                let newText = text.toUpperCase();
                setText(newText);
                props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
                let newText = text.toLowerCase();
                setText(newText);
                props.showAlert("Converted to Lowercase!", "success");
    }

    const clearTextClick = () => {
                
                setText("");
                props.showAlert("Text Cleared!", "success");  
    }

    const removeExtraSpacesClick = () => {
                let newText = text.replace(/\s+/g, ' ').trim();
                setText(newText);
                props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      
        <div className="mb-3">
          
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
            
            style={{backgroundColor: props.mode==='dark'? '#343a40': 'light'}  }
          ></textarea>
        </div>
        <button className="btn btn-primary me-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary me-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary me-1" onClick={removeExtraSpacesClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary me-1" onClick={clearTextClick} >Clear Text</button>
      
    </div>

    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p> Characters: {text.length} and words:{text.split(" ").length}</p>
      {/* <p>Words: {text.split(/\s+/).filter(word => word !== "").length}</p> */}

      <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter text above to preview it here."}</p>
    </div>
    </>
  );
}
