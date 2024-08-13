import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';
import './App.css';

class DisplayQuotes extends Component{
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.getQuote = this.getQuote.bind(this);
    this.getQuote();
  }
 //make API call
 getQuote(){
  try{
  fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',{
    method: 'GET',
    headers: {'X-Api-Key': '/KbzuyZiahTQ8PkAVXDXAw==lA4XrF461iP1RKIe'},
    contentType: 'application/json'
  }).then(res => {return res.json()}).then(data => {
    if(data.length > 0){
      this.setState({ quote: '"'+data[0].quote+'"', author: "-"+data[0].author });
    }
  });
}catch(error){
  console.error(error);
}
};
  render(){
    return(
      <div id={"quote-box"}>
        <h1 className={"title"}>Random Quote Generator</h1>
        <h3 className={"quote-label"}>Quote: </h3>
        <div id={"quote-box"}>
        <p id={"text"}  className={"quote-box"}>{this.state.quote}</p>
        <p id={"author"}>{this.state.author} <a href={"twitter.com/intent/tweet"}><img id={"tweet-quote"} src={"https://image.similarpng.com/very-thumbnail/2020/06/Logo-Twitter-icon-transparent-PNG.png"}></img></a></p>
        </div>
        <button id={"new-quote"} type='button' onClick={this.getQuote}>Generate</button>
        
      </div>
    );
  }
};

const root = createRoot(document.createElement('div')); 

root.render(<DisplayQuotes />);

export default DisplayQuotes;


/*
changes to make: 
  -> color change on button press, function for onclick
  -> change colors to variables to change the color palatte
  -> idea for camsite -> 
    have a color palatte dropdown to select the one you like

  later:
  -> different quote generator boxes w/ different quote categories
  -> remove twitter links
*/