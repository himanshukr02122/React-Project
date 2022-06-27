import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange=(event)=> {
    // console.log("On change");
    setText(event.target.value);
    
  }
  const textSearch= (e) => {
    e.preventDefault();
    let searchText= document.getElementById('searchText').value;
    let myPattern = new RegExp('(\\w*'+searchText+'\\w*)','gi');
    let matches = myPattern.test(text);
    let matched = document.getElementById('matchedText');
    matched.innerHTML="";
    if(matches===true) {
      matched.innerHTML="word found - "+ text.match(myPattern).length +" matches found" ;
    }
    else {
      matched.innerHTML="No matches found";
    }

    
  }
  const handleLoClick = () => {
    // console.log("LowerCase is Clicked: "+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleUpClick = () => {
    // console.log("UpperCase is Clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }
  
  const [text, setText] = useState("Enter text here!")
  return (
      <>
        <div className="container">
          <h1 className="text-2xl font-bold">{props.heading}</h1>
          <div className="mb-3">
            <textarea value={text} onChange={handleOnChange} className="form-control text-justify shadow-none" id="myBox" rows="8"></textarea>
          </div>
          
          <button className="btn btn-primary mx-2 shadow-none" onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2 shadow-none" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2 shadow-none" onClick={handleClearClick}>Clear Text</button>
        </div>
        <form className="m-4 d-flex">
          <input 
            type="text" 
            name="search" 
            id="searchText" 
            className="form-control w-96 border-black shadow-none mr-2 rounded-full px-4 " />
          <button 
            className="btn bg-gray-200 shadow-none border-black rounded-full px-4"
            onClick={textSearch}>
               search</button>
        </form>
        
        <div className="container my-4">
          <h2 className="text-xl font-bold">Text summary here!</h2>
          <p>{text.split(" ").length} words, {text.length} characters</p>
          <p className="font-medium" id="matchedText">Search text result!</p>
          <h3 className="text-lg my-2 font-medium">Word read time!</h3>
          <p>{0.008* text.split(" ").length} Minutes read!</p>
          <h3 className="text-lg my-2 font-medium">Preview</h3>
          <p className="text-justify">{text}</p>  
        </div>
      </>
  )
}
