import React from 'react'
import { useStateValue } from './StateProvider';


function Basket() {
    const [{ basket }] = useStateValue();
    
    
    return (<span >{basket?.length} </span>)
}

export default Basket
