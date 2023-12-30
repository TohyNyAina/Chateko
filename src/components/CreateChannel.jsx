import React from 'react';
import { useChatContext } from 'stream-chat-react';

import { UserList } from './'
import { CloseCreateChannel } from '../assets';

const ChannelNameInput = ({ channelName = '', setChannelName }) => {
    const handleChange = (event) => {
        event.preventDefault();
        setChannelName(event.target.value);
    }
    
    return (
        <div className='channel-name-input__wrapper'>
            <p>Anarana</p>
            <input value={channelName} onChange={handleChange} placeholder="anaran'ny fikambanana" />
            <p>Hampiditra mpikambana</p>
        </div>
    );
}


const CreateChannel = () => {
    return (
        <div>
            <ChannelNameInput />
        </div>
    );
}

export default CreateChannel;
