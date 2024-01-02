import React, { useEffect, useState } from 'react';
import { Avatar, useChatContext } from 'stream-chat-react'; 

import { InviteIcon } from '../assets';

const ListContainer = ({ children }) => {
    return (
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>Mpampiasa</p>
                <p>Asaina</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = ({ user, setSelectedUsers }) => {
    const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        if(selected) {
            setSelectedUsers((prevUsers) => prevUsers.filter((prevUsers) => prevUser !== user.id))
        }

        setSelected((prevSelected) => !prevSelected)
    }

    return (
        <div className='user-item__wrapper' onClick={handleSelect}>
            <div className='user-item__name-wrapper'>
                <Avatar image={user.image} name={user.fullName || user.id} size={32} />
                <p className='user-item__name'>{user.fullName || user.id}</p>
            </div>
            {selected ? <InviteIcon /> : <div className='user-item__invite-empty' />}
        </div>
    )
}


const UserList = ({ setSelectedUsers }) => {
    const { client } = useChatContext();
    const [users, setUsers]  = useState([]);
    const [loading, setLoading] = useState(false);
    const [listEmpty, setListEmpty] = useState(false);

    useEffect(() => {
        const getUsers= async () => {
            if(loading) return;

            setLoading(true);

            try {
                const response = await client.queryUsers(
                    { id: {$ne: client.userID} },
                    { id: 1 },
                    { limit: 8 }
                );

                if(response.users.length) {
                    setUsers(response.users);
                } else {

                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

        if(client) getUsers()
    }, [])

    return (
        <ListContainer>
            {loading ? <div className='user-list__message'>
                Miandry fa gasy...
            </div> : (
                users?.map((user, i) => (
                    <UserItem index={i} key={user.id} user={user} setSelectedUsers={setSelectedUsers}/>
                ))
            )}
        </ListContainer>
    )
}

export default UserList;
