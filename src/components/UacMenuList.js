import React from 'react';
import userIcon from '../assets/user.svg';
import cardIcon from '../assets/credit.svg';
import powerButton from '../assets/power.svg';
import { Link } from 'react-router-dom';

const menuData = [
    {
        id:1,
        label:'Profile',
        icon:userIcon,
        link:'/'
    },
    {
        id:2,
        label:'Update Account',
        icon:cardIcon,
        link:'/'
    },
    {
        id:3,
        label:'Log Out',
        icon:powerButton,
        link:'/'
    }
]

const UacMenuList = (props) => {
   return(
       <ul className="uAcMenu">
        {menuData.map((menu,index)=>{
            return(
                <li key={`uAcMenu-${index}`} className="uAcMenu-item">
                    <Link to={menu.link} title={menu.label}>
                            <span><img src={menu.icon} alt=''/></span>
                            {menu.label}
                    </Link>
                </li>
            )
        })}
    </ul>
   )
}
export default UacMenuList