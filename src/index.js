import React from "react";
import ReactDOM from "react-dom";
import "./index.css";




function TextBox(props){
    return (
        <input type="text" 
               name="txt" 
               onChange={props.onChange} 
               value={props.value} 
               placeholder={props.placeholder}/>
    );
}


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        let value = event.target.value;
        this.setState({
           text: value
        });
    }

    render(){ 
        let text = textInfo(this.state.text);
        return(
            <div className="container">
               <div className="header">
                  <h1 className="title">Counter words, letters and characters</h1>
               </div> 
               <div className="body">
                   <div className="container-text-box">
                       <TextBox value={this.state.text} onChange={this.handleOnChange} placeholder="Enter your Text"/>
                   </div>
                   <div className="container-description">
                       <h2>Words: <span>{text.words}</span></h2>
                       <h2>Letters(Only): <span>{text.letters}</span></h2>
                       <h2>Characters: <span>{text.characters}</span></h2>
                   </div>
               </div>
            </div>
        );

    }
}


function textInfo(text){
    let obj = {}; 
    if(text.trim()){
        obj.words = text.match(/\w+/g).length;
        obj.letters = text.match(/[a-z]/ig).length;
        obj.characters = text.length
        return obj;
    }
   return {words: 0, letters: 0, characters: text.length};
}

ReactDOM.render(<App />, document.getElementById("root"));