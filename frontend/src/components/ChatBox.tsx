import React from 'react';
import { Avatar,Flex, Input,Space,Typography } from 'antd';
import {UserOutlined} from '@ant-design/icons'
const { Search } = Input;

const {Text} = Typography;
const ChatBox : React.FC = () => {
    return (
        <Flex vertical style={{flex:1}}>
            <Flex vertical style={{flex:1}} justify='flex-end'>
                <Space>
                    <Avatar icon={<UserOutlined/>} />
                    <Text>Dummy question</Text>
                </Space>
                <Space>
                    <Avatar src='/spider.png'/>
                    <Text>Dummy answer</Text>
                </Space>
            </Flex>
            <Flex style={{flex:0}}>
                <Search />
            </Flex>
        </Flex>
    )
}
export default ChatBox;