import React, { useState, useEffect } from 'react';

import Api from 'api';

const UserCardInvalidDependencies = ({ userId }) => {
    const [user, setUser] = useState();
    const { username, name, email } = user || {};

    useEffect(() => {
        setUser(); // Reset previous

        Api.getUser(userId).then(setUser);
    }, []); // eslint-disable-line

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
