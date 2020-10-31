import React, { useEffect, useState } from 'react';
        
function MyProfile() {
    const [name, setName] = useState('');
    const [avatar_url, setAvatarUrl] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/anzamarska')
        .then( response => response.json())
        // .then( data => console.log("data", data))
        .then((data) => {
            setData(data)
        })
        .catch( error => console.error(error));
    }, [] );

    const setData = ({bio, avatar_url}) => {
        setName(bio)
        setAvatarUrl(avatar_url)
    }

    return (
        <div>
            <h1>{name}</h1>
            <img src={avatar_url} alt="user profile"/>  
        </div>
    )
}

export default MyProfile;