import React from 'react';
import Header from '../components/Header'
import ChatBox from '../components/ChatBox';
const Home : React.FC = () => {
    return (
        <div style = {{height:'100%',width:'100%',display:'flex',flexDirection:'column'}}>
            <Header />
            <ChatBox />
        </div>
    )
}
export default Home;