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
            <input value={channelName} onChange={handleChange} placeholder="anaran'ny vondrona" />
            <p>Hampiditra mpikambana</p>
        </div>
    );
}


const CreateChannel = ({ createType, setIsCreating }) => {
    return (
        <div className='create-channel__container'>
            <div className='create-channel__header'>
                <p>{createType === 'team' ? 'Hamorona vondrona vaovao' : 'Handefa hafatra avy hatrany'}</p>
                <CloseCreateChannel setIsEditing={setIsCreating} />
            </div>
        </div>
    );
}

export default CreateChannel;
