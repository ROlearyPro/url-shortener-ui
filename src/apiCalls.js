export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
        .catch((err)=> console.error("error fetching:", err))

}

export const postUrls = (title, urlToShorten) =>
{
  fetch('http://localhost:3001/api/v1/urls', {
    method:'POST',
    body: JSON.stringify({
      title:title,
      long_url:urlToShorten
    }), 
    headers:{
      'Content-type': 'application/json'
    }
  })
  .then(response=> response.json())
  .catch((err)=> console.error("error fetching:", err))
}