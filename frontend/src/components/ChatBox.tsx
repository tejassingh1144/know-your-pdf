import React from 'react';
import {Flex,Input} from 'antd';
import ChatElement from './ChatElement';
const { Search } = Input;

const ChatBox : React.FC = () => {
    const handleSearch = (e : string) =>{

    }
    return (
        <Flex vertical>
            <Flex className='ChatSpace' vertical style={{height:'90vh',overflowY:'scroll'}}>
                <ChatElement text='You can start here' path='/spider.png'/>
            </Flex>
            <Flex className='ChatInput'>
                <Search  allowClear={true} onSearch={handleSearch} />
            </Flex>
        </Flex>
    )
}
export default ChatBox;