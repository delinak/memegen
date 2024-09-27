import react from "react"
import '../style.css'
import React, { useEffect, useState } from 'react';


export default function Meme(){

    const [memes, setMemes] = useState([]);
    const[loading, setLoading] = useState(true);
    const[randomMeme, setRandomMeme] = useState(null);
    const [text, setText] = useState(
        {topText: "", bottomText: ""});

  
    useEffect(() => {
        async function fetchMeme(){
            try{
                const response = await fetch('https://api.imgflip.com/get_memes')
                const data = await response.json();
                setMemes(data.data.memes);
                setLoading(false);
            }catch (error){
                console.error('Error fetching memes:', error);
                setLoading(false);
            }
        }
        fetchMeme();
    }, [])

    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * memes.length)
        setRandomMeme(memes[randomIndex])
    }

    if(loading){
        return <p>Loading memes...</p>
    }

    function handleChange(event){
        setText(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
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
                />
                <input 
                    type="text"
                    className="form-input"
                    placeholder="bottom text"
                    onChange={handleChange}
                    name="bottomText"

                />
                <button className="form-button" onClick={getRandomMeme}> Get a new meme image  🖼</button>
                {randomMeme && (
                    <div>
                        <img src={randomMeme.url} alt="" className="meme-img"/>
                    </div>
                )}
            </div>
        </main>
    )
}