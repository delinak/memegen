import react from "react"
import '../style.css'
import React, { useEffect, useState } from 'react';


export default function Meme(){

    const [memes, setMemes] = useState([]);
    const[randomMeme, setRandomMeme] = useState(null);
    const [text, setText] = useState(
        {topText: "", bottomText: ""});

  
    useEffect(() => {
        async function fetchMeme(){
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json();
            setMemes(data.data.memes);
        }
        fetchMeme();
    }, []) //dependencies array - limits effect run

    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * memes.length)
        setRandomMeme(memes[randomIndex])
    }

    function handleChange(event){
        const {name, value} = event.target
        setText(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return(
        <main>
            <div className="div">
                <input 
                    type="text"
                    className="form-input"
                    placeholder="top text"
                    onChange={handleChange}
                    name="topText"
                    value={text.topText}
                />
                <input 
                    type="text"
                    className="form-input"
                    placeholder="bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={text.bottomText}
                />
                <button className="form-button" onClick={getRandomMeme}> Get a new meme image  🖼</button>
                <div className="meme">
                    {randomMeme && (
                        <div>
                            <img src={randomMeme.url} alt="" className="meme-img"/>
                            <h1 className="meme-toptext">{text.topText}</h1>
                            <h1 className="meme-bottomtext">{text.bottomText}</h1>
                        </div> )}
                </div>
            </div>
        </main>
    )
}