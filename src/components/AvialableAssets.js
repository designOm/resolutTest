import React from 'react';
import { createUseStyles } from 'react-jss';
import Img1 from '../assets/Img_1.png';
import Img2 from '../assets/Img_2.png';
import Img3  from '../assets/Property.png';
import Img4 from '../assets/Img_4.png';
import { Link } from 'react-router-dom';


const Data = [
    {
        id:1,
        headingLable:'Potential Covid-19 Cure: Clinical Trial',
        descriptionLable:'Description:',
        descriptionText:"A well known, safe, generic medication that has been used for decades has been shown to….",
        thumbnail: Img1  
    },
    
    {
        id:2,
        headingLable:'Mission',
        descriptionLable:'Description:',
        descriptionText:'Ownership in Minuteman is decentralized and distributed democratically across its base of…',
        thumbnail: Img2
    },
    {
        id:3,
        headingLable:'20922 Avalon Drive',
        descriptionLable:'Address:',
        descriptionText:'8801 Holly Road Tullahoma, TN 37388',
        thumbnail: Img3
    },
    {
        id:4,
        headingLable:'17456 Eastgate Drive',
        descriptionLable:'Address:',
        descriptionText:'23 North Briarwood Avenue Williamsburg, VA 23185',
        thumbnail: Img4
    },
];

const AvialableAssets = (props) =>{
    const styles  = style();
    return(
        <div className={styles.AvialableAssets}>
            <div className={styles.heading}>
                <h4>Avialble Assets</h4>
            </div>
            {
                Data.map((item , index)=>{
                    return(
                        <div 
                         className={styles.AssetsItemBox} key={`assetsItem${index}`}>
                            <div className={styles.AssetsItem}>
                                <div className={styles.assetsItemImage}>
                                    <img src={item.thumbnail} alt={item.headingLable} />
                                </div>
                                <div className={styles.assetsItemContent}>
                                    <h4>{item.headingLable}</h4>
                                    <p className={styles.boldHeading}>{item.descriptionLable}</p>
                                    <p>{item.descriptionText}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={styles.viewMore}>
                <Link to="/" title="View More" >View More</Link>
            </div>
        </div>
    )
}

const style = createUseStyles({
    AvialableAssets:{
        background:'#FFFFFF',
        boxShadow:'0px 0px 40px rgba(110, 137, 255, 0.16)',
        height:'100%',
        borderRadius:10,
        padding:20,
        '@media (max-width:540px)':{
            boxShadow:'none',
            padding:0,
            marginTop:25
        }

    },
    heading:{
        borderBottom:'2px solid rgba(41, 56, 121, .12)',
        '& h4':{
            fontSize:18,
            fontWeight:'600',
            marginBottom:10,
             '@media (min-width:1600px)':{
                 fontSize:22,
                  marginBottom:15,
             }
        },
        '@media (max-width:540px)':{
                textAlign:'center',
                borderBottom:'none',
        },
    },
    AssetsItemBox:{
        paddingTop:7,
        paddingBottom:7,
        borderBottom:'2px solid rgba(41, 56, 121, .12)',
        '@media (min-width:1600px)':{
            paddingTop:10,
            paddingBottom:10,
         },
        '@media (max-width:540px)':{
            paddingTop:10,
            paddingBottom:10,
        }
    },
    AssetsItem:{
        borderRadius:6,
        display:'flex',
         transition:'0.3s all',
         '&:hover':{
             backgroundColor:'rgba(239, 238, 242, 1)',
         },
          '@media (max-width:540px)':{
              flexWrap:'wrap'
          }
    },
    assetsItemImage:{
        flex:'0 0 90px',
        maxWidth:90,
        height:90,
        '@media (min-width:1600px)':{
            flex:'0 0 120px',
            maxWidth:120,
            height:120,
        },
         '@media (max-width:540px)':{
            flex:'0 0 100%',
            maxWidth:'100%',
            textAlign:'center',
            height:'auto'
         },
        '& img':{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            objectPosition:'center',
            borderRadius:'5px',
            '@media (max-width:540px)':{
                width:120,
                height:120
            }
        }
    },
    assetsItemContent:{
        flexBasis:'0',
        flexGrow:'1',
        maxWidth:'100%',
        paddingLeft:10,
        '@media (max-width:540px)':{
            textAlign:'center'
        },
        '& h4':{
            fontSize:16,
            fontWeight:600,
            marginBottom:10,
             '@media (min-width:1600px)':{
                 fontSize:20,
                 marginBottom:15
             }
        },
        '& p':{
            fontSize:14,
             '@media (min-width:1600px)':{
                 fontSize:17,
             }
        }
    },
    boldHeading:{
        fontWeight: 700,
         '@media (min-width:1600px)':{
                 fontSize:18,
             }
    },
    viewMore:{
        textAlign:'right',
       
        '& a':{
            textDecoration:'none',
            fontSize:14,
            color:'rgba(41, 56, 121, 1)',
            fontWeight:600,
            '@media (min-width:1600px)':{
                fontSize:18
            },
        }
    }
});
export default AvialableAssets;