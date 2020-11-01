import React, { useEffect, useState } from 'react';
import { Wrapper, WrapperLoader, AvatarUser,  } from './styles';
import Loader from 'react-loader-spinner';

        
function MyProfile() {

    const [user, setUser] = useState({userName:"", avatar_url: "", fetchInProgress: true})

    useEffect(() => {
        fetch('https://api.github.com/users/anzamarska')
        .then( response => response.json())
        .then((data) => {
            setUser({
                userName: data.name,
                avatar_url: data.avatar_url,
                fetchInProgress: false,
            })   
        })
        .catch( error => console.error(error));
    }, [] );

    return (
        <>
            {(user.fetchInProgress)
               ? <WrapperLoader>
                   <Loader
                    type="Oval"
                    color="#0000FF"
                    height={80}
                    width={80}
                    />
                </WrapperLoader>
            :<Wrapper>
                <h1>{user.userName}</h1>
                <AvatarUser src={user.avatar_url} alt="user profile"/>  
            </Wrapper>}
        </>
    )
}

export default MyProfile;