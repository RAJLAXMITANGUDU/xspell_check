import React,{useState} from "react";
const customDictionary={
  teh:"the",
  wrok:"work",
  fot:"for",
  exampl:"example"
};
const XSpellCheck=()=>{
  const [inputText,setInputText]=useState("");
  const [suggestion,setSuggestion]=useState("");
  const handleChange=(event)=>{
    const text=event.target.value;
    setInputText(text);
    const words=text.split(/\s+/);
    const foundWord=words.find((word)=>{
      const lowerCaseWord=word.toLowerCase();
      return customDictionary.hasOwnProperty(lowerCaseWord);
    });
    if(foundWord){
      const correctedWord=customDictionary[foundWord.toLowerCase()];
      setSuggestion(`Did you mean: ${correctedWord}?`);
    } else {
      setSuggestion("");
    }
  };
  return(
    <div style={{padding:"20px",fontFamily:"Arial,sans-serif"}}>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        row="5"
        cols="50"
        value={inputText}
        onChange={handleChange}
        placeholder="Type something here..."
        style={{fontSize:"16px",padding:"10px"}}
      ></textarea>
      <div style={{margin:"10px",fontSize:"18px",color:"red"}}>
        {suggestion}
      </div>
    </div>
  );
};
export default XSpellCheck
