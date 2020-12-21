import React from 'react';
import { createUseStyles } from 'react-jss';
import AlertBox from '../components/AlertBox';
import AvialableAssets from '../components/AvialableAssets';
import RecentTransections from '../components/RecentTransections';
import Header from '../components/Header';
import resolutLogo from '../assets/resolut.png';
import WalletTabs from '../components/WalletTabs';


const Wallet = (props) => {
    const styles = style();
    return(
        <>
            <div className="PageContent">
               <Header /> 
               <div className={styles.GridBox}>
                   <div className={styles.GridItemTab}>
                        <WalletTabs />
                   </div>
                   <div className={styles.GridItemAvialableAssets}>
                       <AvialableAssets />
                   </div>
                   <div className={styles.GridItemRecentTransection}>
                       <RecentTransections />
                   </div>
               </div>
               <div className={styles.footerPanel}>
                   <img className={styles.resolutLogo} src={resolutLogo} alt="ResolutLogo" />
               </div>
            </div>
            <AlertBox 
            message='Your account is not yet activated to sell Freedom Coins™. Please specify your PayPal payment address to activate your account.'
            isAnyLinkBtn={true}
            btnTitle="Click Here"
            btnLink="/"
            />
        </>
    )
}

const style = createUseStyles({
    GridBox:{
        display:'grid',
        gridTemplateColumns:'auto 500px',
        gridTemplateRows:'auto 250px',
        columnGap:'35px',
        '@media (min-width:1600px)':{
            gridTemplateColumns:'auto 610px',
            gridTemplateRows:'auto 345px',
            columnGap:60,
        },
        '@media (max-width:540px)':{
            display:'block'
        }
    },
    GridItemTab:{
        gridColumn:'1 / 2',
        gridRow:'1 / span 1',
       // background:'blue'
    },
    GridItemAvialableAssets:{
        gridColumn:'2 / 3',
        gridRow:'1 / 3',
        borderRadius:10,
        padding:{
            top:15
        },
        '@media (min-width:1600px)':{
            padding:{
                top:45
            }
        }
    },
    GridItemRecentTransection:{
        gridColumn:'1 / 2',
        gridRow:'2 / span 1',
        '@media(min-width:992px) and (max-width:1199px)':{
            marginTop:25,
        },
         '@media (min-width:1600px)':{
             paddingTop:25
         }
    },
    footerPanel:{
        display:'flex',
        marginTop:10
    },
    resolutLogo:{
        marginLeft:'auto',
        height:50
    },
    '@media(min-width:992px) and (max-width:1199px)':{
        GridBox:{
            display:'block'
        }
    }
});

export default Wallet;