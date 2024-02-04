import React, { createContext } from 'react';
import Child from './child';

export const UserContext = createContext('');

const Parent = () => {
    return (
        <UserContext.Provider value='data'>
            <Child/>
        </UserContext.Provider>
    )
}

export default Parent;