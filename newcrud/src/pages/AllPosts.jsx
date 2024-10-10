import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, createUser } from '../reduxfeatures/userDetails';

function AllPosts() {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.app);

    const handleClick = () => {
        console.log("Dispatching showUsers action...");
        dispatch(allUsers());
    };

    useEffect(() => {
        if (users.length) {
            console.log("Fetched users:", users);
        }
    }, [users]);

    return (
        <div>
            <button onClick={handleClick} className='bg-black text-white rounded-md p-2 hover:bg-gray-900'>
                AllPosts
            </button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li> // Adjust the property as needed
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AllPosts;
