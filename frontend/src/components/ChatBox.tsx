import React from 'react';
import {Flex,Input} from 'antd';
import ChatElement from './ChatElement';
const { Search } = Input;

const ChatBox : React.FC = () => {
    const handleSearch = (e : string) =>{

    }
    return (
        <Flex vertical style={{flex:1}}>
            <Flex vertical style={{flex:1}} justify='flex-end'>
                <ChatElement text='Dummy answer' path='/spider.png' />
                <ChatElement text='Dummy Question' path='/user.svg' />
            </Flex>
            <Flex style={{flex:0}}>
                <Search  allowClear={true} onSearch={handleSearch} />
            </Flex>
        </Flex>
    )
}
export default ChatBox;