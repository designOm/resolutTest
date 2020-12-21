import React from 'react';
import { createUseStyles } from 'react-jss';


const DataDisplayCard  = ({children,...props}) =>{
    const styles = style(props);
    return(
        <div className={styles.DataDisplayCard}>
            <div className={styles.cardHeading}>
                <p>{props.headingLable}</p>
            </div>
            <div className={styles.contentArea}>
                {children}
            </div>
        </div>
    )
}

const style = createUseStyles({
    DataDisplayCard:{
        border:'1px solid rgba(231, 232, 233, 1)',
        boxShadow:'0px 0px 6px rgba(7, 7, 7, 0.06)',
        borderRadius:6,
        margin:{
            top:10,
            botton:10
        },
        '@media (min-width:1600px)':{
           margin:{
                top:15,
                botton:15
            }, 
        },
        '@media (max-width:540px)':{
                margin:{
                    top:20,
                    botton:20
                }
            } 
    },
    cardHeading:props => ({
        backgroundColor:props.headingBgColor,
        border:`1px solid ${props.headingBgColor}`,
        borderRadius:'6px 6px 0 0',
        padding:'8px 10px',
        '@media (min-width:1600px)':{
            padding:15
         },
        '&>p':{
            fontSize:14,
            fontWeight:600,
            color: props.headingTextColor,
            '@media (min-width:1600px)':{
                fontSize:20
            }
        }
    }),
    contentArea:{
        backgroundColor:'#ffffff',
        padding:'8px 10px',
        borderRadius:'0 0 6px 6px',
         '@media (min-width:1600px)':{
             padding:15
         }
    }
})

DataDisplayCard.defaultProps ={
    headingLable:'Set headingLable Props',
    headingBgColor:'rgba(0, 111, 255, 0.16)',
    headingTextColor:'rgba(41, 56, 121, 1)'
}
export default DataDisplayCard;