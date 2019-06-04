import React from 'react';

const Quote = (props) => {

    let min=0; 
    let max= props.quotes.length + 1;  
    let random = (Math.floor(Math.random() * (+max - +min)) + +min); 
    
    const {quoteText, quoteAuthor} = props.quotes[random];

    console.log(random, quoteText, quoteAuthor);

    if(!quoteAuthor) {
        return(
        <React.Fragment>
            <p className="quote">{quoteText}</p>
            <p><i>Anonymous</i></p>
        </React.Fragment>
        )
    }

  return(
    <div>
      <p className="quote">{quoteText}</p>
      <p><i>{quoteAuthor}</i></p>
    </div>
  )
}

export default Quote;