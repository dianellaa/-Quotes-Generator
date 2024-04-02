import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

useEffect(() => {
  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(  
    (quote) =>{
      setQuote(quote.content);
      setAuthor(quote.author);
    }
  )
},[])

let fetchNewQuote = () =>{
  fetch("https://api.quotable.io/random").then(res => res.json())
  .then(  
    (quote) =>{
      setQuote(quote.content);
      setAuthor(quote.author);
    }
  )
}

  return (
    <div className="App">
       <header className='header'>
          <h1 className='h1'>Quote Generator</h1>
        </header>
      <div className='quote'>
          <p>"{quote}"</p>
          <h4>{author}</h4>
      </div>
      <button className='btn' onClick={fetchNewQuote}>New Quote</button> 
    </div>
  );
}

export default App;
