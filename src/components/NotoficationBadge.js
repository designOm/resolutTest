import React from 'react';
import { createUseStyles } from 'react-jss';

import NotificationIcon from '../assets/Notification.svg';


const Notification = (props) =>{
    const styles = style();
    return(
        <div className={styles.Notification}>
            <img src={NotificationIcon} alt="Notification Icon" />
        </div>
    )
} 

const style = createUseStyles({
    Notification:{
        width:24,
        height:24,
        margin:{
            right:10,
            left:10
        },
        '& img':{
            width:'100%',
            height:'100%'
        },
        '@media (max-width:540px)':{
             margin:{
                right:15,
                left:15
            }
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

export default Notification