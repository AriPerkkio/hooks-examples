import React, { useState, useEffect } from 'react';

import Api from 'api';

const UserCardInvalidDependencies = ({ userId }) => {
    const [user, setUser] = useState();
    const { username, name, email } = user || {};

    useEffect(() => {
        Api.getUser(userId).then(setUser);
        return setUser; // Reset previous user
    }, [userId]);

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>
                {userId}: {name} ({username})
            </h2>
            <h3>@ {email}</h3>
        </div>
    );
};

export default UserCardInvalidDependencies;
