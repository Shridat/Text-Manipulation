import React, {useState} from 'react'

export default function Textform(props) {
    function showText(){
        var i=0, text;
        text = document.getElementById("text1");
        if(i<text.length){
            document.getElementById("text1").innerHTML.charAt(i);
            i++;
            setTimeout(showText,50);
        }
    }
    const [text, setText] = useState("Enter Your Text");
    const handleUpClick = ()=>{
        console.log("clicked");
        setText(text.toUpperCase());
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
    }
    const handleOnClear = ()=>{
        setText("");
        console.log(props.mode);
    }
    const handleCopy = ()=>{
        let newtext = document.getElementById("text1");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
    }
    const handleRemove = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleFind = ()=>{
        document.getElementById("find1").style.display = "block";
        document.getElementById("replace1").style.display = "none";
    }
    const handleReplace = ()=>{
        console.log("replace");
        document.getElementById("replace1").style.display = "block";
        document.getElementById("find1").style.display = "none";
    }
    const handleOnOk = () =>{
        console.log("okay");
        let word1= document.getElementById("word1").value;
        let word2 = document.getElementById("word2").value;
        if(word1 === '' && word2 === ''){
            alert("This field cannot be empty!");
        }
        else{
            let newtext = document.getElementById("text1").value;
            console.log(newtext.split(" ").length);
            newtext = newtext.replaceAll(word1,word2);
            setText(newtext);
            /*for(var i=0; i<newtext.split(" ").length; i++){
                newtext = newtext.replace(word1,word2);
                setText(newtext);
            }*/
            
        }
    }
    const handleOnFind = ()=>{
        console.log("find");
        var i=0, newtext;
        var word1 = document.getElementById("word3").value;
        //var word2 = document.getElementById("word3").value.style.backgroundColor ="yellow";
        //var word2 = document.getElementById("word3").style;
        if(word1){
            //var newtext = text.replaceAll(word1,word2);
            console.log(text.split(" "));
            console.log(text.split(" ")[0]);
            console.log(word1);
            var pattern = new RegExp(`(${word1})`,"gi");
            newtext = text.replace(pattern,word1 => `<mark style=" background:yellow ">${word1}</mark>`);
            setText(newtext);
        }
        else{
            alert("Enter a word");
        }

    }
    const close = ()=>{
        document.getElementById("replace1").style.display = "none";
        document.getElementById("find1").style.display = "none";
    }
    const handleOnChange = (event)=>{
        console.log("change");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1 className="text-left my-3">Analyze and Manipulate Your text here...</h1>
            <div className="mb-3">
                <textarea className="form-control shadow-sm" id="text1" value={text} onChange={handleOnChange} rows="10" cols="200" style={{backgroundColor: props.mode==='dark' ? '#423F3E' : 'white', color: props.mode=== 'dark'?'white':'black', borderColor: props.mode=== 'dark'?'white':'black'}}></textarea>
            </div>
            <div className="container">
            <button type="button" className="btn my-3 mx-3 text-light" onClick={handleUpClick} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Uppercase</button>
            <button type="button" className="btn my-3 mx-3 text-light" onClick={handleLowClick} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Lowercase</button>
            <button type="button" className="btn my-3 mx-3 text-light" onClick={handleCopy} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Copy text</button>
            <button type="button" className="btn my-3 mx-3 text-light" onClick={handleReplace} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Replace</button>
            <button type="button" className="btn my-3 mx-3 text-light" onClick={handleRemove} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Remove Space</button>
            <button type="button" className="btn my-3 mx-3 text-light" onClick={handleFind} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Find Word</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleOnClear} style={{backgroundColor: props.mode==='dark' ? '#FF5403' :'#6610f2'}}>Clear</button>
            </div>
            <div className="container" id="replace1" style={{display: 'none'}}>
                <div className="card">
                <div className="row g-3">
                    <div className="col-sm">
                        <input type="text" id="word1" className="form-control mx-4 my-3" placeholder="Enter Word" aria-label="Word1" />
                    </div>
                    <div className="col-sm">
                        <input type="text" id="word2" className="form-control mx-3 my-3" placeholder="Replace with" aria-label="Word2" />
                    </div>
                    <div className="col-sm">
                    <button type="button" className="btn btn-success my-3" onClick={handleOnOk}>Replace</button>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={close}>Close</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="container" id="find1" style={{display: 'none'}}>
                <div className="card">
                <div className="row g-3">
                    <div className="col-sm">
                        <input type="text" id="word3" className="form-control mx-4 my-3" placeholder="Enter Word" aria-label="Word1" />
                    </div>
                    <div className="col-sm">
                    <button type="button" className="btn btn-success my-3" onClick={handleOnFind}>Find</button>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={close}>Close</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="conatiner my-3">
                <h2>Text Summary</h2>
                <h3>{text.split(' ').length} words {text.length} characters</h3>
                <h2>Time for Reading</h2>
                <h3>{((text.split(' ').length)/125).toFixed(2)}at 125 wpm and {((text.split(' ').length)/300).toFixed(2)} at 300 wpm</h3>
            </div>
            </div>
            <div className="conatiner my-3">
                <h1 style={{color: props.mode=== 'dark'?'white':'black'}}>Preview</h1>
                <div className="card my-3" style={{backgroundColor: props.mode=== 'dark'?'#423F3E':'white',borderColor: props.mode=== 'dark'?'white':'black'}}>
                <p style={{color: props.mode=== 'dark'?'white':'black'}}>{text}</p>
                </div>
            </div>
        </>
        
    )
}
