import React, { useState } from 'react'

export default function Home(props) {

const [text,setText] = useState("")

let SetUppercase = () =>{
    setText(text.toUpperCase())
}
let SetLowercase = () =>{
    setText(text.toLowerCase())
}
let SetClear = () =>{
    setText("")
}
let SetCopy = () =>{
    navigator.clipboard.writeText(text)
}
function handleChange(e) {
    setText(e.target.value);
}

  return (
    <>
    <div className='container'>
        <div class="mb-3 py-2">
            <label for="exampleFormControlTextarea1" style={{color:props.mode === 'light'?'black':'white'}} class="form-label">{props.heading}</label>
            <textarea class="form-control" style={{backgroundColor: props.mode === 'light'?'white':'black',color:props.mode === 'light'?'black':'white'}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
    <button type="button" class="btn btn-primary mx-1" onClick={SetUppercase}>Convert UpperCase</button>
    <button type="button" class="btn btn-primary mx-1" onClick={SetLowercase}>Convert LowerCase</button>
    <button type="button" class="btn btn-primary mx-1" onClick={SetCopy}>Copy Text</button>
    <button type="button" class="btn btn-primary mx-1" onClick={SetClear}>Clear</button>
    
    <div className={`my-3 text-${props.mode === 'light'?'dark':'light'}`}>  
    <h4>Your Text Summary</h4>
    <p>{text.split(/\s+/).filter((e) => {return e.length !== 0}).length} words and {text.length} Charecters</p>
    <p>{0.008 * text.split(" ").filter((e) => {return e.length !== 0}).length} Minutes Read</p>
    
    </div>
    <div className={`my-3 text-${props.mode === 'light'?'dark':'light'}`}>  
        <h4>Preview</h4>
        <p>{text.length > 0?text:`Noting To Preview`}</p>
    </div>
    </div>
    </>
  )
}
