import React from 'react';
import { createUseStyles } from 'react-jss';

import MessageIcon from '../assets/Message.svg';


const MessageBadge = (props) =>{
    const styles = style();
    return(
        <div className={styles.Message}>
            <img src={MessageIcon} alt="Message Icon" />
        </div>
    )
} 

const style = createUseStyles({
    Message:{
        width:24,
        height:24,
        margin:{
            right:10,
            left:10
        },
        '@media (max-width:540px)':{
             margin:{
            right:15,
            left:15
        },
        },
        '& img':{
            width:'100%',
            height:'100%'
        },
         '@media (min-width:1600px)':{
            width:38,
            height:38,
             margin:{
                right:20,
                left:20
            },
        }
    }
});

export default MessageBadge