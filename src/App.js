import React from 'react';
import { createUseStyles } from 'react-jss';
import Routes from './routes/routes';
import AsideMenu from './components/AsideMenu';

let style = createUseStyles({
    resolutApp:{
       width: '100vw',
      height: '100vh',
      padding: '20px',
     backgroundColor:' #293879',
     overflowX: 'hidden',
     '@media (max-width:540px)':{
       padding:0,
       borderRadius:0
     }
    },
    Dashboard:{
        display:'flex',
        flexDirection:'row',
        height:'100%',
         '@media (max-width:540px)':{
           display:'block',
           height:'auto'
         }
    }
})
const App = (props) => {
  const styles = style();
  return(
    <div className={styles.resolutApp}>
       <div className={styles.Dashboard}>
            <AsideMenu />
            <Routes />
      </div>
    </div>
  )
}
export default App;