import React from 'react';
import propType from 'prop-types'
import { createUseStyles } from 'react-jss';


const TabPane = (props) => {
    const styles = style();
    return <div className={styles.TabPane}>{props.children}</div>
};

TabPane.propType ={
    name: propType.string
};
const style = createUseStyles({
    TabPane:{}
});
export  default TabPane;