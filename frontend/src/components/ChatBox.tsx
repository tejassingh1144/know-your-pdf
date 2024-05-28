import React from 'react';
import {Flex,Input,Typography } from 'antd';
import ChatOutput from './ChatOutput';
const { Search } = Input;

const {Text} = Typography;
const ChatBox : React.FC = () => {
    return (
        <Flex vertical style={{flex:1}}>
            <Flex vertical style={{flex:1}} justify='flex-end'>
                <ChatOutput text='Dummy answer' path='/spider.png' />
                <ChatOutput text='Dummy Question' path='/user.svg' />
            </Flex>
            <Flex style={{flex:0}}>
                <Search />
            </Flex>
        </Flex>
    )
}
export default ChatBox;