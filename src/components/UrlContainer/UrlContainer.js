import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  console.log(props)
  const urlEls = props.urls.map((url, index) => {
    return url.map((url2, index)=>{
    return (
      <div key ={index} >
        <h3>{url2.title}</h3>
        <a href={url2.short_url} target="google.com">{url2.short_url}</a>
        <p>{url2.long_url}</p>
      </div>
    )
  })
  });
 
  return (
    <section key = {props.urls.length}>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      
    </section>
  )
}

export default UrlContainer;
