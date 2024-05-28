import React from 'react'
import {QuestionOutlined} from '@ant-design/icons'
import { Typography } from 'antd'
import FileUploadComponent from './FileUploadComponent';

const {Title} = Typography;

const Header : React.FC = () => {
    const titleStyle = {
        display : 'flex'
    };
    return (
        <div style = {{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
                <div style={{border:'solid',display : 'flex',alignItems:'center',justifyContent:'center'}}>-NA-</div>
                <Title level={4}>Chat app</Title>
            </div>
            <FileUploadComponent/>
        </div>
    )
}
export default Header;