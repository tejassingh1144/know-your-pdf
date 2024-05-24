import React,{useState} from 'react';
import axios from 'axios';

const ChatInput : React.FC = () =>{
    const [prompt,setPrompt] = useState<string>('');
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void =>{
        setPrompt(e.target.value);
    };
    const handleSubmit = async ( e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            // console.log(prompt);
            const response = axios.post('http://127.0.0.1:8000/',{'prompt' : prompt});
        }catch(err){
            console.log(err);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    id = 'prompt'
                    type = 'text'
                    value = {prompt}
                    placeholder = 'Type here...'
                    onChange = {handleChange}
                />
                <button type ='submit'>Icon</button>
            </form>
        </div>
    )
}
export default ChatInput;