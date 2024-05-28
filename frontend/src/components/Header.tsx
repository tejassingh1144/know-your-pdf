import React from 'react'
import {QuestionOutlined} from '@ant-design/icons'
import { Flex,Typography,Avatar } from 'antd'
import FileUploadComponent from './FileUploadComponent';

const {Title} = Typography;

const Header : React.FC = () => {
    const titleStyle = {
        display : 'flex'
    };
    return (
        <Flex justify='space-between' align='center'>
            <Flex justify='center' align='center'>
                <Avatar icon={<QuestionOutlined/>}/>
                <Title level={4} style={{margin:'10px 1px'}}>Chat app</Title>
            </Flex>
            <FileUploadComponent/>
        </Flex>
    )
}
export default Header;