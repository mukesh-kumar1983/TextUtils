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

    const getWordCount=(str)=>{
      return str.trim().split(/\s+/).filter((word)=>word.length>0).length;
    }

    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    return (
    <>

    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      
     <h1>{props.heading}</h1>
        <div className="mb-3">
      <textarea
    //   style={{backgroundColor: props.mode==='dark'?'grey':'white'}}
      style={{
    backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  }}
        className="form-control"
        id="myBox"
        rows="3"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      </div>
    </div>
    <button className="btn btn-primary me-2" onClick={convertToUppercase}>Convert to Uppercase</button>
    <button className="btn btn-primary me-2" onClick={convertToLowercase}>Convert to Lowercase  </button>

    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        {<p>{getWordCount(text)} words and {text.length} characters</p>}
    </div>
    </>
  );
}
