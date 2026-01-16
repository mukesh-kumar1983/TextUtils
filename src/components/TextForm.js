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
      
     <h1 style={{
             
          color: props.mode==='dark'?'white':'black'
        }} >{props.heading}</h1>
      <textarea
        style={{
          backgroundColor: props.mode==='dark'?'#13466e':'white',   
          color: props.mode==='dark'?'white':'black'
        }}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={text}
        onChange={handleOnChange}
      ></textarea>
    </div>
    <button className="btn btn-primary me-2" onClick={convertToUppercase}>Convert to Uppercase</button>
    <button className="btn btn-primary me-2" onClick={convertToLowercase}>Convert to Lowercase  </button>

    <div className="container my-3" style={{
             
          color: props.mode==='dark'?'white':'black'
        }}>
        <h1>Your text summary</h1>
        <p>
  {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
</p>
    </div>
    </>
  );
}
