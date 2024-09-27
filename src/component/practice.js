import react, {useState} from "react"

export default function App(){
    const [messages , setMessages] = useState(['a','b'])

    return (
        <div>
            {
                messages.length === 0 ? 
                <p>you are all caught up</p> : 
                <p>you have unread message{messages.length > 1 && "s"}</p>
            }
        </div>
    )
}