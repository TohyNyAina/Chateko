import React from 'react';

import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing }) => {
    if(error) {
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    Misy tsy fahatomombanana ny tambazotra, miandrasa kely azavady na miverena afaka kelikely eo.
                </p>
            </div>
        ) : null
    }

    if(loading) {
        return (
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>
                    {type === 'team' ? 'Vondrona' : 'Hafatra'} Miandry fa gasy ...
                </p>
            </div> 
        )
    }
    
    return (
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title'>
                {type === 'team' ? 'Vondrona' : 'Hafatra'}
                </p>
                <AddChannel
                    isCreating={isCreating} 
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'Vondrona' : 'Hafatra'}
                />
            </div>
            {children}
        </div>
    );
}

export default TeamChannelList;
