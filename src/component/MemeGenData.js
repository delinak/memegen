import React, { useEffect, useState } from 'react';

export default function MemeGenData(){
    const [memes, setMemes] = useState([]);
    const[loading, setLoading] = useState(true);

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

    if(loading){
        return <p>Loading memes...</p>
    }

    return (
        <div>
            <h1>MemeGenerator</h1>
        </div>
    )
}