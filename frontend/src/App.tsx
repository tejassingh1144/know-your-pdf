import React from 'react';
import ChatInput from './components/ChatInput'
import FileUploadComponent from './components/fileUploadComponent';
const App : React.FC = () => {
    return (
        <div>
            <FileUploadComponent/>
            <ChatInput/>
        </div>
    )
}
export default App;