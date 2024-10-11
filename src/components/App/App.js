import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App() {
  const [urls, setUrls] = useState(["abcdefg", "hijklmnop"]);
  useEffect(() => {
  console.log(getUrls())
    getUrls().then((data) => {
      setUrls([data.urls[0].long_url, data.urls[0].short_url]);
    });
  
  },[])
  

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>
      <UrlContainer urls={urls} />
    </main>
  );
}

export default App;
