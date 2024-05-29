import React from 'react';
import {Avatar,Typography} from 'antd';

const {Text} = Typography;
interface prop{
    text : string,
    path : string
}
const ChatElement:React.FC<prop> = ({text,path}) =>{
    return (
        <div style={{display:'flex',justifyContent:'flex-start',columnGap:'1rem',marginTop:'1rem'}}>
            <Avatar src={path}/>
            <Text>{text}</Text>
        </div>
    )
}
export default ChatElement;