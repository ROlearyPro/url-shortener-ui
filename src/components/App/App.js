import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App() {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
  console.log(getUrls())
    getUrls().then((data) => {
      setUrls([data.urls]);
    });
  
  },[])
  

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm  urls={urls} seturls={setUrls}/>
      </header>
      <UrlContainer key={0} urls={urls} />
    </main>
  );
}

export default App;
