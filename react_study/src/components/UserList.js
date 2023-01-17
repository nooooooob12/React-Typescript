import React from 'react';

function Users({user}) {
    return(
        <div>
            <b>{user.userName}{user.age}</b>
        </div>
    )
}

const UserList = () => {
    const  user = [
        {
            id:"one",
            userName : "chobo",
            age:14
        },
        {
            id:"two",
            userName:"chobo2",
            age:15
    }
    ]
    return (
        <div>
            <ul>
                <li>
                    {user.map(user=>(
                        <Users user={user} key={user.id}></Users>
                    ))}
                </li>
            </ul>
        </div>
    );
};

export default UserList;