import React, { useEffect, useState } from 'react';

const  Hide = ({type , size , children}) =>{
    const [hide , setHide] = useState(false);

    useEffect(()=>{
        if(type === 'up'){
            window.innerWidth > size ? setHide(true) : setHide(false);
        }else if(type === 'down') {
            window.innerWidth < size ? setHide(true) : setHide(false);
        }
    },[type , size])
    return(
        <>
            {hide?
                null
                :
                children
            }
        </>
    )
};

export default Hide