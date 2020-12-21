import React from 'react';
import { createUseStyles } from 'react-jss';
import SaveMoneyIcon from '../assets/save-money.svg';


const InvesterBadge = (props)=>{
    const styles = style();
    return(
        <div className={styles.InvesterBadge}>
            <div className={styles.icon} >
                <img src={SaveMoneyIcon} alt="Save Money icon" />
            </div>
            <p className={styles.text}>Investor</p>
        </div>
    )
}

const style = createUseStyles({
    InvesterBadge:{
        paddingLeft:'7.5px',
        display:'flex',
        alignItems:'center',
        border:'0.25px solid rgba(41, 56, 121, 1)',
        borderRadius:'4px',
        height:45,
        boxShadow:'0px 1px 5px rgba(0, 111, 255, 0.11)',
        '@media (min-width:1600px)':{
            height:60
        },
        '@media (max-width:540px)':{
            height:40
        }
    },
    icon:{
        width:30,
        height:30,
        backgroundColor:'rgba(41, 56, 121, 1)',
        borderRadius:'4px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        '& img':{
            width:24,
            height:24
        },
        '@media (min-width:1600px)':{
            width:45,
            height:45
        }
    },
    text:{
        color:'rgba(41, 56, 121, 1)',
        fontSize:'18px',
        textAlign:'center',
        flexBasis:0,
        flexGrow:'1',
        fontWeight:'600',
        '@media (min-width:1600px)':{
            fontSize:20
        },
        '@media (max-width:540px)':{
            fontSize:15
        }
    }
})

export default InvesterBadge