import React, { useState } from 'react'

function App() {
  const [url,setUrl] = useState("");
  const [days,setDays] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, days: days ? parseInt(days) : undefined }),
    });
    const data = await res.json();
    setShortUrl(data.short_url || "");
  };

  return (
    <div style={{maxWidth: "500px", margin: "auto", padding: "20px"}}>
      <h1>Url shortener</h1>
      <form onSubmit={handleSubmit}>
        <input type="url" placeholder='Enter Url' value={url} onChange={(e) => setUrl(e.target.value)} required style={{width: "100%", padding: "10px", marginBottom: "10px"}} />
        <input type="number" placeholder='Expires in days' value={days} onChange={(e) => setDays(e.target.value)}  style={{width: "100%", padding: "10px", marginBottom: "10px"}} />
        <button type='submit' style={{ padding: "10px 15px"}}> Short the Url </button>
      </form>
      {shortUrl && (
        <p>
          Short Url: {" "}
          <a href={shortUrl} target='_blank' rel='noopener noreferrer'> {shortUrl}</a>
        </p>
      )}
    </div>
  )
}

export default App
