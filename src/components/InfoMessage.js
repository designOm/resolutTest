import React from 'react';
import { createUseStyles } from 'react-jss';
import infoMessageIcon from '../assets/infoMessageIcon.svg';

const InfoMessage = ({children,...props})=>{
    const styles = style(props);
    return(
        <span className={styles.infoMessageBOX}>
            <img src={infoMessageIcon} alt="i" />
            <span className='mesageText'>{children}</span>
        </span>
        
    )
}
const style = createUseStyles({
    infoMessageBOX: props =>({
        display:'inline-block',
        position:'relative',
        height:props.height,
        marginRight:5,
        marginLeft:5,
        width:'auto',
        '& img':{
            height:props.height,
            width:'auto'
        },
        '& .mesageText':{
            backgroundColor:'#2c2c2c',
            padding:5,
            fontSize:9,
            color:'#ffffff',
            borderRadius:3,
            position:'absolute',
            bottom:'125%',
            left:'100%',
            display:'inline-block',
            width:250,
            visibility:'hidden',
            opacity:'0',
            transition:'all 0.3s'
        },
        '&:hover .mesageText':{
            visibility:'visible',
            opacity:'1',
            transition:'all 0.3s'
        }
    })

})

InfoMessage.defaultProps ={
    height:16
}

export default InfoMessage