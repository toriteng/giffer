import React, {useState} from 'react'
import './App.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [text,setText] = useState('')
  const [memes, setMemes] = useState([])

  async function search(){
    const key = '0jhKSmT0IW44IaFhM9yqQZ34e3MUeeSd'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`
    const r = await fetch(url)
    const j = await r.json()
    setMemes(j.data)
    setText('')
  }

  return (
    <div className="App">
      <div className="searchbar">
        <TextField label ="Search" variant="outlined" color="white"
        placeholder="Search for a meme!" value={text}
        onChange={e=> setText(e.target.value)}
        onKeyPress={e=>{
          if(e.key==="Enter") search()
        }}
        />
        <Button variant="contained" color="primary"
        style={{height:55, marginLeft:8}}
        disabled={!text} onClick={search}>
          Search
        </Button>
      </div>
      <div className="memes">
        {memes.map((m,i) => {
          return <div className='meme'>
            <img key={i}
              src={m.images.fixed_height.url}
            />
            console.log(m)
            <div className="meme-title">
              {m.title}
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
