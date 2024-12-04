import React , {useState} from 'react'

export default function TextForm(props) {
    const handleupClick = () =>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Converted to Upper case!" , "success")
    }

    const handleLowClick = () =>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Converted to Lower case!" , "success")
    }

    const handleClearClick = () =>{
        let clearText = '';
        setText(clearText);
    }

    const onChangeEvent = (event) => {
        setText(event.target.value);
    }

    const[text,setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChangeEvent} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        
    </div>

    <div className="container my-3">
        <h2>Your summary of text</h2>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p><b>{0.008 * text.split(" ").length} Minutes reading time</b></p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
