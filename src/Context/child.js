import React, {useContext} from 'react';
import { UserContext } from './parent';

const Child = () => {
    const value  = useContext(UserContext)
    
    return (
        <p>Chlid { value }</p>
    )
}

export default Child;