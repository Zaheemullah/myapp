import React, {useState} from 'react'


export default function TextForm(props) {
  const HandleupClick =()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to UpperCase", "success");
  }
  const HandleupClicked =()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LoweCase", "success");
  }
  const HandleupClearClicked =()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Text cleared", "success");
  }
  const HandleupSymbolClicked =()=>{
      let newText = text + '1234567890';
      setText(newText)
      props.showAlert("Numbers added", "success");
  }
  const HandleCopy =()=>{
    console.log("i am copy")
    var text = document.getElementById("my-Box");
    text.select();
    props.showAlert("Copy to clipboard", "success");
    navigator.clipboard.writeText(text.value);
  }
  const handleextraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");
  }
  const HandleonChange =(event)=>{
      // console.log("On Changed")
      setText(event.target.value)
  }
  const [text, setText] = useState('');
  // text ="hello Enter you text" //this wrong way to change the value
  // setText("hello Enter you text"); //this wrong way to change the value
  return (
    <>
    <div className="container">
    <h1 className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={HandleonChange} style={{backgroundColor: props.mode=== 'light' ? 'dark' : 'light'}} id="my-Box" rows="12"></textarea>
  </div>
  <button className="btn btn-dark mx-2" onClick={HandleupClick}>CONVERT TO UPPERCASE</button>
  <button className="btn btn-dark mx-2" onClick={HandleupClicked}>CONVERT TO LOWERCASE</button>
  <button className="btn btn-dark mx-2" onClick={HandleupClearClicked}>Clear Text</button>
  <button className="btn btn-dark mx-2" onClick={HandleupSymbolClicked}>Numbers</button>
  <button className="btn btn-dark mx-2" onClick={HandleCopy}>CopyText</button>
  <button className="btn btn-dark mx-2" onClick={handleextraSpaces}>Remove Extra Spaces</button>
</div>
<div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'grey'}`}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").filter(word => word.trim() !== "").length} words {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in textbox  to preview here"}</p>
</div>
</>
);
}
