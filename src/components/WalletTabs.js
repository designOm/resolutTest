import React from 'react';
import { createUseStyles } from "react-jss";
import DataDisplayCard from './DataDisplayCard';
import Hide from './Hide';
import InfoMessage from './InfoMessage';
import QrcodeToggler from './QrCodeToggler';
import TabPane from './TabPane';
import Tabs from './Tabs';



const WalletTabs = (props) =>{
    const styles = style();
    return(
        <div className={styles.WalletTabs}>
            <Tabs>
                <TabPane name="Overview" key="1">
                    <div className={styles.overviewContent}>
                        <Hide type='up' size={540}>
                            <div className={styles.mheading}>
                                <p><span className="heading-text">Total Balance</span> 
                                <InfoMessage height={14}>Total Balance, It includes overall balance like freedom coin, property investment & wolfpack investment</InfoMessage>
                                : $60.00</p>
                            <p>
                                <span className="heading-text">Wallet Address</span>
                                <QrcodeToggler iconWidth={18}/>
                            </p>
                            </div>
                        </Hide>
                        <div className={styles.totalBalance}>
                            <Hide type='down' size={541}>
                                <p><span className="heading-text">Total Balance</span> 
                                <InfoMessage height={14}>Total Balance, It includes overall balance like freedom coin, property investment & wolfpack investment</InfoMessage>
                                : $60.00</p>
                           </Hide>
                           <DataDisplayCard headingLable="Checking">
                              <div className={styles.idT}>
                                  <p>Cash &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<b>&nbsp;&nbsp;&nbsp;$20.00</b></p>
                              </div>
                                <div className={styles.buySellForm}>
                                     <p>Buy Coins<sup>TM</sup></p>
                                     <input type="number" placeholder="0" />
                                     <button>Buy</button>
                                </div>
                           </DataDisplayCard>
                            <DataDisplayCard headingLable="Savings">
                              <div className={styles.idT}>
                                   <p><span>Invested</span> : <span className="v">$50.00 </span> </p>
                               <p>
                                   <span>Total Payout
                                   <InfoMessage height={14}>Projected total payments based on term and APR</InfoMessage>
                                   </span> : <span className="v">$120.00</span>
                               </p>
                              </div>
                           </DataDisplayCard>
                        </div>
                        <div className={styles.walletAddress}>
                             <Hide type='down' size={541}>
                                     <p>
                                        <span className="heading-text">Wallet Address</span>
                                        <QrcodeToggler iconWidth={18}/>
                                    </p>
                             </Hide>
                           
                            <DataDisplayCard headingLable="Transfers">
                              <div className={styles.idT}>
                                  <p>Paypal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Bank Account</b></p>
                                    <div className={styles.buySellForm}>
                                        <p>Sell Coins<sup>TM</sup></p>
                                        <input type="number" placeholder="0"/>
                                        <button>Sell</button>
                                    </div>
                              </div>
                           </DataDisplayCard>
                            <DataDisplayCard headingLable="Investments">
                               <div className={styles.idT}>
                                    <p><span>Invested</span> : <span className="v">$50.00 </span> </p>
                                    <p><span>Contributed</span> : <span className="v">$120.00</span></p>
                              </div>
                           </DataDisplayCard>
                        </div>
                    </div>
                </TabPane>
                <TabPane name="Savings" key="2">
                    <p>This Tab Is For Saving Content</p>
                </TabPane>
                <TabPane name="Investments" key="3">
                    <p>This tab is for investment Content</p>
                </TabPane>
            </Tabs>
        </div>
    )
}

const style = createUseStyles({
    WalletTabs:{
        height:'100%',
        position:'relative',
        "& .tab-container":{
            paddingTop:'15px',
            '@media (min-width:1600px)':{
                padding:{
                    top:45
                }
            }
        },
        "& .tab-header":{
            position:'absolute',
            height:60,
            top:'-60px',
            '@media(min-width:992px) and (max-width:1199px)':{
                position:'relative',
                top:0,
                borderBottom:'2px solid rgba(41, 56, 121, .12)',
                marginBottom:15,
            },
            '@media (min-width:1600px)':{
                height:90,
                top:-90
            },
             '@media (max-width:540px)':{
                position:'relative',
                top:0,
                height:45,
                borderBottom:'2px solid rgba(41, 56, 121, .12)'
             },
            '& .tab-menuList':{
                listStyle:'none',
                display:'flex',
                width:'100%',
                height:'100%',
                '& .tab-menuListItem':{
                    display:'inline-flex',
                    height:'100%',
                    alignItems:'center',
                    fontSize:18,
                    fontWeight:500,
                    color:'#717171',
                    margin:{
                        right:25
                    },
                    cursor:'pointer',
                    position:'relative',
                    '@media (min-width:1600px)':{
                        fontSize:20,
                        margin:{
                            right:35
                        }
                    },
                    '@media (max-width:540px)':{
                        fontSize:14,
                    },
                    '&.active':{
                        color:'#2C2C2C',
                        '&::after':{
                            content:'""',
                            position:'absolute',
                            left:0,
                            bottom:0,
                            height:2,
                            width:'100%',
                            backgroundColor:'#293879'
                        }
                    }
                }
            }
        }
    },
    overviewContent:{
        display:'flex',
        flexDirectiob:'row',
        '@media (max-width:540px)':{
            display:'block'
        }
    },
    totalBalance:{
        flex:'0 0 50%',
        maxWidth:'50%',
        paddingRight:15,
        '@media (min-width:1600px)':{
               paddingRight:25,
        },
        '@media (max-width:540px)':{
            flex:'0 0 100%',
            maxWidth:'100%',
            paddingRight:0,
        },
        '&>p':{
            fontSize:14,
            color:'#2c2c2c',
            fontWeight:'bold',
            '@media (min-width:1600px)':{
                fontSize:20
            }
        }
    },
    walletAddress:{
        flex:'0 0 50%',
        maxWidth:'50%',
        paddingLeft:15,
        '@media (min-width:1600px)':{
               paddingLeft:25,
        },
        '@media (max-width:540px)':{
            flex:'0 0 100%',
            maxWidth:'100%',
            paddingLeft:0,
        },
        '&>p':{
            fontSize:14,
            color:'#2c2c2c',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            '&>span':{
                display:'inline-block'
            },
            '@media (min-width:1600px)':{
                fontSize:20
            }
        }
    },
    idT:{
        '& p':{
             color:'rgba(113, 113, 113, 1)',
              fontSize:14,
              '& b':{
                  color:'#2c2c2c'
              }
        },
        '&>p':{
            display:'flex',
            alignItems:'center',
            marginTop:3,
            marginBottom:3,
            '&>span':{
                amxWidth:'60%',
                flex:'0 0 60%',
                fontSize:14,
                color:'rgba(113, 113, 113, 1)',
                display:'inline-block',
            },
            '&>span.v':{
                color:'#2c2c2c',
                fontWeight:'bold',
                display:'inline-block',
                marginLeft:10
            }
        }
    },
    buySellForm:{
        '& p':{
            fontSize:13,
             color:'rgba(113, 113, 113, 1)',
             marginBottom:3,
             '@media (max-width:540px)':{
                 marginTop:20,
                 marginBottom:5
             }
        },
        '& input':{
            outline:'none',
            width:'calc(50% - 10px )',
            fontSize:13,
            color: '#171717',
            border:'1px solid #171717',
            padding:6,
            borderRadius:4,
            '@media (max-width:540px)':{
                 fontSize:18,
                 paddingTop:12,
                 paddingBottom:12
             }
        },
        '& button':{
            backgroundColor:'rgba(41, 56, 121, 1)',
            width:'calc(50% - 10px )',
            marginLeft:'20px',
            outline:'none',
            borderRadius:4,
            textAlign:'center',
            color:'#ffffff',
            paddingTop:6,
            paddingBottom:6,
            border:'none',
            fontSize:13,
            cursor:'pointer',
             '@media (max-width:540px)':{
                 fontSize:18,
                 paddingTop:12,
                 paddingBottom:12
             }
        }
    },
    mheading:{
        display:'flex',
        alignItems:'center',
        '& p':{
            fontSize:14,
            flex:'0 0 50%',
            maxWidth:'50%',
            '&:first-child .heading-text':{
                display:'block'
            },
            '&:last-child ':{
                textAlign:'right',
                '& .heading-text':{
                    display:'block',
                    textAlign:'right',
                    marginBottom:5
                }
            }
        }
    }
})
export default WalletTabs;