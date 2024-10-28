import React, {useState} from 'react'


export default function TextForms(props) {
const handleUpClicked = ()=>{
  // console.log("Uppercase was clicked"+ text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase", "success")
} 
const handleLoClicked = ()=>{
  // console.log("Lowercase was clicked"+ text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase", "success")
}

const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard", "success")
}

const  handleExtraSpaces = ()=>{  
  let newText = text.split(/\s+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed", "success")
}

const handleonChange = (event)=>{
  // console.log("On change");
  setText(event.target.value);
}
const handleClearText  = ()=>{
let newText = '';
  setText(newText);
  props.showAlert("Cleared Text", "success")

}
  const [text, setText] = useState('');
  // setText('Enter text Here');
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="myBox" class="form label">Example Textarea</label> */}
    <textarea className='form-control'id= 'myBox' value = {text} onChange={handleonChange} style={{backgroundColor : props.mode==='dark'? 'grey': 'white' , color:props.mode==='dark'?'white' :'Black'}} rows= "6"></textarea> 
    </div>
<button className="btn btn-primary"   onClick={handleUpClicked}>Convert to Uppercase </button>
<button className="btn btn-primary mx-2"   onClick={handleLoClicked}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2"   onClick={handleExtraSpaces}>Remove Extra  Spaces</button>
<button className="btn btn-primary mx-2"   onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2"   onClick={handleClearText}>Clear All Text</button>
</div>
<div className="container my-3">

  <h2>Your text Summary</h2>
  <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
  <h2>Preview</h2>
  <p>{text.length >0?text:"No text to preview"}</p>

</div>
</>
  )
}