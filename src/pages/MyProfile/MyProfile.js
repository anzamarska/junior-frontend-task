import React, { useEffect, useState } from 'react';
import { WrapperUserInfo, AvatarUser } from './styles';
        
function MyProfile() {

    const [user, setUser] = useState({userName:"", avatar_url: ""})

    useEffect(() => {
        fetch('https://api.github.com/users/anzamarska')
        .then( response => response.json())
        .then((data) => {
            setUser({
                userName: data.bio,
                avatar_url: data.avatar_url,
            })
        })
        .catch( error => console.error(error));
    }, [] );

    return (
        <WrapperUserInfo>
            <h1>{user.userName}</h1>
            <AvatarUser src={user.avatar_url} alt="user profile"/>  
        </WrapperUserInfo>
    )
}

export default MyProfile;