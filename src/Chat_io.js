import { useState } from "react";

 import "./App2.css";
import AuthPage from "./AuthPage.js";
import ChatsPage from "./ChatsPage.js";

function Chat_io() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default Chat_io;