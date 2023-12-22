import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey = '3nwtewpc5gza';

function App() {
  return (
    <div className="app__wrapper">
        <Chat>
            <ChanellListContainer

            />
            <ChanelContainer

            />
        </Chat>
    </div>
  );
}

export default App;
