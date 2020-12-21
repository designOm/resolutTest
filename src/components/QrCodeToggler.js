import React  from 'react';
import { createUseStyles } from 'react-jss';
import QrcodeIcon from '../assets/qr-code-icon.png';
import Qrcode from '../assets/qr-code.png';
import useToggle from './useToggle';


const QrcodeToggler = (props) =>{
    const styles = style(props);
    const [isOn, toggleIsOn] = useToggle();
    return (
        <>
        <span
        className={styles.QrcodeToggler}
        onClick={toggleIsOn}
        >
            <img src={QrcodeIcon} alt="Show Qr Code"/>
             {isOn ? 
                <span className={styles.qrCodeBox}>
                    <img src={Qrcode} alt="QR code" />
                    <span>Scan QR</span>
                </span>
                :null
            } 
        </span>
       
        </>
    )
}

const style = createUseStyles({
    QrcodeToggler:props=>({
        display:'inline-block',
        position:'relative',
        margin:{
            left:10,
            right:5
        },
        cursor:'pointer',
        '&>img':{
            width:props.iconWidth
        }
    }),
    qrCodeBox:{
        display:'block',
        position:'absolute',
        left:'120%',
        padding:15,
        boxShadow:'5px 5px 15px rgba(0, 111, 255, 0.13)',
        borderRadius:6,
        zIndex:11,
        top:'-60px',
        backgroundColor:'#ffffff',
         '@media (max-width:540px)':{
             right:'150%',
             left:'unset',
             top:20
         },
        '& img':{
            width:110,
            height:110,
            '@media (min-width:1600px)':{
                width:140,
                height:140,
            }
        },
        '& span':{
            display:'block',
            textAlign:'center'
        }
    }
})

QrcodeToggler.defaultProps ={
    iconWidth:18
}

export default QrcodeToggler

