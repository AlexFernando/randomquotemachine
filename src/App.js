import React, {Component} from 'react';

import Quote from './componentes/Quote';

import quotesFile from './data/quotes.json'



class App extends Component {

  
  state = {
    quotes : [],
    colors: ["red", "yellow", "blue", "green", "purple", "pink"]
  }

  changeBackground = () => {
    const {colors} = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
  }

  myRandomFoo = () => {
    this.setState({
      quotes: quotesFile
    })     

    this.changeBackground();

  }

  componentWillMount() {
    this.myRandomFoo();
  }

  render() {
    
    return (
      <div className="contenedor">
        <Quote
          quotes = {this.state.quotes}
          quoteText={this.state.quoteText} 
          quoteAuthor={this.state.quoteAuthor}
        />

        <button onClick={this.myRandomFoo}>
              New Quote
        </button>
      </div>  
    );
  }
}


export default App;
