import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'


const ChatsPage=(props)=> {
    const chatProbs=useMultiChatLogic
    ('25f0aff1-9f7d-4c3d-bbdf-2300af3d326c',
    props.user.username,
    props.user.secret
    );

    return <div style={{height:'100vh'}}>
    <MultiChatSocket {...chatProbs}/>
    <MultiChatWindow {...chatProbs}  style={{height:'100%'}}/>

   

    </div>
}
export default ChatsPage


