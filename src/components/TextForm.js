import React, {useState} from "react";



export default function TextForm(props) {
  
    const [text, setText] = useState("Enter text here");

    const convertToUppercase=()=>{
      let newText=text.toUpperCase();
      setText(newText);
    }

    const convertToLowercase=()=>{
      let newText=text.toLowerCase();
      setText(newText);
    }

    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    return (
    <>

    <div class="mb-3">
      
     <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        value={text}
        onChange={handleOnChange}
      ></textarea>
    </div>
    <button className="btn btn-primary me-2" onClick={convertToUppercase}>Convert to Uppercase</button>
    <button className="btn btn-primary me-2" onClick={convertToLowercase}>Convert to Lowercase  </button>

    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  );
}
