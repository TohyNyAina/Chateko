import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({ channel, type }) => {
    const { channel: activeChannel, client } = useChatContext();
    
    const ChannelPreview = () => (
        <p className='channel-preview__item'>
            # {channel?.data?.name || channel?.data?.id}
        </p>
    )
    
    return (
        <div>
            
        </div>
    );
}

export default TeamChannelPreview;
