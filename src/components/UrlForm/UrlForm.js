import React, { useState } from 'react';
import { postUrls } from '../../apiCalls';

function UrlForm({urls, setUrls}) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleSubmit = e => {
  postUrls(title, urlToShorten)

    // clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  const handleInputTitle = (e) => {
    setTitle(()=> e.target.value);

  }

  const handleInputUrl = (e) => {
    setUrlToShorten(()=> e.target.value);
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={handleInputTitle}
      />

      <input
        type='urlShort'
        placeholder='URL to Shorten...'
        name='urlShort'
        value={urlToShorten}
        onChange={handleInputUrl}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
