import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'

import addNotification from 'react-push-notification';
import logo from '/Users/shafiqaabdat/Downloads/client-main/src/images/background.png'; // Update path accordingly

const ChatsPage = (props) => {
    const chatProbs = useMultiChatLogic(
        '25f0aff1-9f7d-4c3d-bbdf-2300af3d326c',
        props.user.username,
        props.user.secret
    );

    
    const clickToNotify = () => {
        addNotification({
            title: 'New Message Alert!',
            message: 'You have a new message in the chat.',
            duration: 4000,
            icon: logo,
            native: true
        });
    }

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProbs} />
            <MultiChatWindow {...chatProbs} style={{ height: '100%' }} />
            <button onClick={clickToNotify}>Notify</button>
        </div>
    );
}

export default ChatsPage;



