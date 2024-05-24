import React,{useState} from 'react';

const ChatInput : React.FC = () =>{
    const [text,setText] = useState<string>('');
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void =>{
        setText(e.target.value);
    };
    return (
        <div>
            <form>
                <input 
                    type = 'text'
                    value = {text}
                    placeholder = 'Type here...'
                    onChange = {handleChange}
                />
                <button type = 'submit'>Icon</button>
            </form>
        </div>
    )
}
export default ChatInput;