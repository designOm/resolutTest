import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import checkIcon from '../assets/check.png';
import icCancel from '../assets/ic_cancel_24px.png';
// import SlideFade from './SlideFade';


const AlertBox = (props) =>{
    const styles = style();
    const [show , setShow] = useState(true);
    const [shouldRender , setRender]  = useState(show);

    useEffect(()=>{
        if(show) setRender(true);
    },[show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };
    return(
        shouldRender && (
        <div className={styles.AlertBox} style={{ animation: `${show ? "slideIn" : "slideOut"} 1s` }}
                onAnimationEnd={onAnimationEnd}>
            <button className={styles.closeBtn} onClick={()=>setShow(false)} >
                <img src={icCancel} alt="cancel" />
            </button>
            <div className={styles.checkIcon}>
                <img src={checkIcon} alt="Check Icon" />
            </div>
            <p>{props.message}</p>
            {props.isAnyLinkBtn ?
            <div >
                <Link className={styles.linkBtn} to={props.btnLink} title={props.btnTitle}>{props.btnTitle}</Link>
            </div> 
            : null }
        </div>
        )
    )
}
const style = createUseStyles({
    AlertBox:{
        position:'fixed',
        bottom:'20px',
        left:30,
        width:'225px',
        padding:'50px 15px 15px 15px',
        backgroundColor:'#1C2964',
        borderRadius:'8px',
        '& p':{
            color:'#ffffff',
            fontSize:'12px',
            marginBottom:'25px'
        },
    },
    checkIcon:{
        position:'absolute',
        top:'calc(-45px/2)',
        left:'50%',
        width:45,
        height:45,
        transform:'translateX(-50%)',
        '& img':{
            width: 45,
            height:45
        }
    },
    closeBtn:{
        position:'absolute',
        top:10,
        right:10,
        backgroundColor:'transparent',
        width:18,
        height:18,
        outline:'none',
        border:'none',
         cursor:'pointer',
        '& img':{
            width:18,
            height:18
        }
    },
    linkBtn:{
       backgroundColor:'#FFB400' ,
       color:'#ffffff',
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       height: 36,
       borderRadius:4,
       fontSize: 12,
       textDecoration:'none',
       boxShadow:'0px 2px 2px #FFB40026',
    }
})

export default AlertBox;