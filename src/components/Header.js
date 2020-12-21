import React from 'react';
import { createUseStyles } from 'react-jss';
import InvesterBadge from './InvesterBadge';
import Notification from './NotoficationBadge';
import MessageBadge from './Message';
import UserDpDisplay from './UserDpDisplay';
import Hide from './Hide';
import mLogo from '../assets/m-logo.svg';
import menuIcon from '../assets/Menu.svg';



const Header = (props) =>{
      const styles = style();
    return(
        <header className={styles.pageHeader}>
            <div className={styles.tabMenu}>
                <Hide type='up' size={540}>
                    <div className="headerTop">
                        <img src={mLogo} alt='logo' /> 
                        <MessageBadge />
                        <Notification />
                        <UserDpDisplay />
                    </div>
                    <div className="headerBottom" style={{backgroundColor:'#ffffff'}}>
                       <div>
                            <span>
                                <img src={menuIcon} alt="Menu" />
                            </span>
                            <span>Wallet</span>
                       </div>
                       <div>
                            <InvesterBadge />
                       </div>
                    </div>
                </Hide>
            </div>
            <Hide type='down' size={541}>
            <div className={styles.n_and_m}>
                <MessageBadge />
                <Notification />
            </div>
            <div className={styles.invester_badge}>
                <InvesterBadge />
            </div>
            <div className={styles.devider}>
                <span></span>
            </div>
            <div className={styles.userDpDiplay}>
                <UserDpDisplay />
            </div>
         </Hide>
     </header>
    )
}

const style = createUseStyles({
     pageHeader:{
        borderBottom:'2px solid rgba(41, 56, 121, .12)',
        width:'calc(100% - 40px )',
        height:60,
        display:'flex',
        alignItems:'center',
        '@media(min-width:992px) and (max-width:1200px)':{
            position:'sticky',
            top:0,
            backgroundColor:'#ffffff',
            zIndex:11,
            width:'100%'
        },
        '@media(min-width:1600px)':{
            height:90
        },
        '@media (max-width:540px)':{
            borderBottom:'none',
            width:'auto',
            display:'block',
            margin:{
                left:'-12pt',
                right:'-12pt'
            },
            backgroundColor:' #293879',
            position:'sticky',
            top:0,
            height:'auto',
            zIndex:1100,
        }
    },
    tabMenu:{
        flexBasic:'0',
        flexGrow:'1',
        maxWidth:'100%',
        '& .headerTop':{
            display:'flex',
            alignItems:'flex-end',
            justifyContent:'flex-end',
            paddingBottom:10,
            height:80,
            '&>img':{
                marginLeft:'12px',
                marginRight: 'auto',
            }
        },
        '& .headerBottom':{
            height:55,
            display:'flex',
            alignItems:'center',
            boxShadow:'0px 3px 6px rgba(41, 56, 121, 0.17)',
            '&>div:last-child':{
                flex:'0 0 120px',
                maxWidth:'120px',
                marginLeft:'auto',
                marginRight:12
            },
            '&>div:first-child':{
                display:'flex',
                alignItems:'center',
                paddingLeft:12,
                '&>span:first-child':{
                    height:40,
                    width: 'auto',
                    paddingTop:'calc((55px - 40px )/2)',
                    paddingRight:12,
                    marginRight:15,
                },
                '&>span:last-child':{
                    color:'#303030',
                    fontSize:15,
                    fontWeight:'bold',
                }
            }
        }
    },
    n_and_m:{
          maxWidth:110,
        flex:'0 0 110px' ,
        display:'flex' ,
        '@media (min-width:1600px)':{
             maxWidth:200,
            flex:'0 0 200px'
        },
        '@media (max-width:540px)':{
            visiblity:'hidden',
            display:'none'
        }
    },
    invester_badge:{
        maxWidth:150,
        flex:'0 0 150px',
        '@media (min-width:1600px)':{
            maxWidth:200,
            flex:'0 0 200px',
        },
        '@media (max-width:540px)':{
            visiblity:'hidden',
            display:'none'
        }
    },
    devider:{
        maxwidth:60,
        flex:'0 0 60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
        '& span':{
            width:2,
            height:28,
            borderRadius:5,
            display:'block',
            backgroundColor:'#2938793F',
        },
        '@media (max-width:540px)':{
            visiblity:'hidden',
            display:'none'
        }
    },
    userDpDiplay:{
        flex:'0 0 250px',
        maxWidth:250 ,
        '@media(min-width:1600px)':{
             flex:'0 0 300px',
            maxWidth:300 ,
        },
        '@media (max-width:540px)':{
            visiblity:'hidden',
            display:'none'
        }
    }
})

export default Header;