import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import UserDpImg from '../assets/dp.jpg';
import arrowDown from '../assets/arrow2-down.svg';
import UacMenuList from './UacMenuList';
import Hide from './Hide';



const UserDpDisplay = (props) =>{
    const [showMenu , setShow] = useState(false);
    const [render , setRender] = useState(showMenu);

    useEffect(()=>{
        if(showMenu) setRender(true);
    },[showMenu]);

    const onAnimationEnd = () => {
        if (!showMenu) setRender(false);
    };
    const styles = style();
    return(
        <div className={styles.UserDpDisplay} >
            <div className={styles.DpImage}>
                <img src={UserDpImg} alt='Robert Downey' />
            </div>
            <Hide type='down' size={541}>
            <p className={styles.userName}>Robert Downey</p>
            <button className={styles.MenuListBtn} 
            onClick={()=>setShow(showMenu => !showMenu)}
            style={{
                    transform:`${showMenu ? 'rotate(180deg)' : 'rotate(0)'}`
            }}
            >
                <img 
                src={arrowDown} 
                alt="dropDown" 
                
                />
            </button>
            {render ?
            <div 
                className={styles.UacMenuList}
                style={{ animation: `${showMenu ? "menuIn" : "menuOut"} .5s` }}
                onAnimationEnd={onAnimationEnd}
            >
                <UacMenuList />
            </div>
            :null
            }
            </Hide>
        </div>
    )
}
const style = createUseStyles({
    UserDpDisplay:{
        display:'flex',
        alignItems:'center',
        position:'relative'
    },
    DpImage:{
        width:45,
        height:45,
        marginRight:25,
        '& img':{
            width:'100%',
            height:'100%',
            borderRadius:'5px',
            objectFit:'cover',
            objectPosition:'center',
            transition:'0.5s all'
        },
        '@media(min-width:1600px)':{
            width:60,
            height:60
        },
        '@media (max-width:540px)':{
             width:40,
            height:40,
            marginRight:12,
        }
    },
    userName:{
        color:'#2c2c2c',
        fontSize:'18px',
        fontWeight:600,
        '@media(min-width:1600px)':{
            fontSize:20
        },
        '@media (max-width:540px)':{
                       display:'none'
            },
    },
    MenuListBtn:{
        backgroundColor:'transparent',
        outline:'none',
        border:'none',
        marginLeft:'auto',
        cursor:'pointer',
        transition:'.5s all',
        '@media (max-width:540px)':{
                       display:'none'
            },
    },
    UacMenuList:{
        position:'absolute',
        right:0,
        top:'110%',
        backgroundColor:'#ffffff',
        borderRadius:5,
        zIndex:11,
        boxShadow:'0pt 10pt 20pt rgba(41, 56, 121, 0.3)',
        '& .uAcMenu':{
            listStyle:'none',
            padding:5,
            borderRadius:5,
            '& .uAcMenu-item':{
                fontSize:14,
                borderBottom:'1px solid rgba(41, 56, 121, .12)',
                '&:last-child':{
                    border:'none'
                },
                '& a':{
                    color:'#717171',
                    padding:8,
                    textDecoration:'none',
                    display:'flex',
                    alignItems:'center',
                    '& span':{
                        display:'inline-block',
                        margin:{
                            left:5,
                            right:15,height:14

                        },
                        '& img':{
                            width:14,
                            height:14
                        }
                    }
                }
            }
        }
    }
});
export default UserDpDisplay;