import React, { useContext } from 'react'
import UserContext from '../Context/UserContest';

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <h2>Please login to view profile</h2>;
    return <div>Welcome {user.username} </div>
}

export default Profile