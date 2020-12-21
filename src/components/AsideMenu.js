import React from 'react';

import { createUseStyles } from "react-jss";
import logo from '../assets/logo@2x.png';
import WalletIcon from '../assets/wallet_alt.svg';
import TransparencyIcon from '../assets/transparency.svg';
import AllPropertiesIcon from '../assets/all-properties.svg';
import PortfolioIcon from '../assets/portfolio.svg';
import WolfpackIcon from '../assets/wolfPack.svg'
import { NavLink } from "react-router-dom";
import Hide from './Hide';
import { useState } from 'react';



const  MenuList  = ({children , ...props}) =>{
    const styles  = style();
    return(
        <nav className={styles.menuList}>
            <ul>
                {children}
            </ul>
        </nav>
    )
} 

const MenuItem = ({children , ...props}) =>{
    const styles = style();
   return(
        <li className={styles.MenuItem}>
            <NavLink
                exact
                activeClassName={`${styles.MenuItemLinkActive}`}
                className={styles.MenuItemLink}
                to={props.Link} >
                {props.icon?
                <span>{props.icon}</span>
                :
                 null
                }
                {children}
            </NavLink>
        </li>
   )
}

const  AsideMenu = (props) => {
    const [open , setOpen] = useState(false);
    const styles = style();
    return(
        <aside className={open? `${styles.AsideMenu}` : `${styles.AsideMenu} close`}>
            <div className={styles.logo}>
                <img src={logo} alt="LOGO" />
            </div>
            <MenuList>
                 <MenuItem Link="/" icon={<img src={WalletIcon} alt="WalletIcon" />}>Wallet</MenuItem>
                 <MenuItem Link="/wolfpack" icon={<img src={WolfpackIcon}  alt="WolfpackIcon"/>} >Wolfpacks</MenuItem>
                 <MenuItem Link="/portfolio" icon={<img src={PortfolioIcon}  alt="PortfolioIcon"/>} >Portfolio</MenuItem>
                 <MenuItem Link="/transparency" icon={<img src={TransparencyIcon}  alt="TransparencyIcon"/>} >Transparency</MenuItem>
                 <MenuItem Link="/all-properties" icon={<img src={AllPropertiesIcon}  alt="AllPropertiesIcon"/>}>All Properties</MenuItem>
            </MenuList>
            <Hide type="up" size={540}>
                <button className="close" onClick={()=>setOpen(false)}>X</button>
                <button className="open" onClick={()=>setOpen(true)}></button>
            </Hide>
        </aside>
    )
}
const style = createUseStyles({
    AsideMenu:{
        flex: '0 0 18%',
        maxWidth:'18%',
        minWidth: '250px',
        '@media (max-width:540px)':{
          position:'fixed',
          top:0,
          bottom:0,
          left:0,
          right:0,  
          maxWidth:'unset',
          minWidth:'unset',
          backgroundColor:'#293879',
          zIndex:1200,
          paddingLeft:30,
          transition:'0.3s all'
        },
        '& .close':{
            backgroundColor:'transparent',
            position:'absolute',
            left:30,
            color:'#ffff',
            top:80,
            border:'none',
            outline:'none',
            padding:10
        },
        '& .open':{
            backgroundColor:'transparent',
            position:'absolute',
            right:-52,
            top:87,
            border:'none',
            outline:'none',
            width:40,
            height:40
        },
        '&.close':{
            transform:'translateX(-100%)'
        }
    },
    logo:{
        margin:{
            left:20,
            right:20
        },
        display:'flex',
        alignItems:'center',
        height:'90px',
        borderBottom:'2px solid rgba(255, 255, 255, .12)',
        '@media (max-width:540px)':{
            justifyContent:'center',
            borderBottom:'none',
        },
        '& img':{
            height:48
        },
         '@media(min-width:1600px)':{
             height:110,
             '& img':{
                 height:60
             }
         },
    },
    menuList:{
        margin:{
            top:35
        },
        '& ul':{
            listStyle:'none',
            display:'flex',
            width:'100%',
            flexDirection:'column'
        }
    },
    MenuItem:{
        borderRadius:'8px 0 0 8px',
    },
    MenuItemLink:{
        display:'flex',
        alignItems:'center',
        padding:{
            top:16,
            left:20,
            bottom:16
        },
        borderRadius:'8px 0 0 8px',
        fontSize:'18px',
        fontWeight:'600',
        color:'white',
        textDecoration:'none',
        '& span':{
            display:'inline-block',
            marginRight:'35px',
            width:'24px',
            height:'24px'
        },
        '&:hover':{
            backgroundColor:'rgba(255,255,255, 0.1)'
        },
        '@media(min-width:1600px)':{
            padding:25,
            fontSize:20,
            '& span':{
                width:38,
                height:38,
                '& img':{
                    width:38,
                    height:38
                }
            }
        },
        
        
        
        '&.active_link span img':{

        },
        transition:'.3s all'
    },
    MenuItemLinkActive:{
        backgroundColor:'#ffffff',
        color:'#2C2C2C',
        '&:hover':{
            backgroundColor:'rgba(255,255,255, 1)'
        },
    },
    
})
export default AsideMenu;