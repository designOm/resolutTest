import React, { useEffect, useState } from 'react';
import TabPane from './TabPane';

const Tabs = (props) =>{
    const {children} = props;
    const [tabHeader, setTabHeader] = useState([]);
    const [childContent, setChildConent] = useState({});
    const [active, setActive] = useState("");


    useEffect(() =>{
        const headers = [];
        const childCnt = {};
        React.Children.forEach(children ,  element =>{
            if(!React.isValidElement(element)) return;
            const { name } = element.props
            headers.push(name);
            childCnt[name] = element.props.children;
        })

        setTabHeader(headers);
        setActive(headers[0])
        setChildConent({ ...childCnt })
    },[props,children]);
    
    const changeTab = (name) =>{
        setActive(name);
    }

    return(
        <div className="tab-container">
            <div className="tab-header">
                <ul className="tab-menuList">
                    {tabHeader.map((item,index)=>{
                        return(
                            <li
                                onClick={()=> changeTab(item)}
                                key={`${item}-${index}`}
                                className={item === active ? "tab-menuListItem active" : "tab-menuListItem"}
                            >{item}</li>
                        )
                    })}
                </ul>
            </div>
            
            <div className="tab-content">
               {
                   Object.keys(childContent).map((key,index) =>{
                       if(key === active){
                           return (
                               <div key={`Tabpane-${index}`} className="tab-pane">{childContent[key]}</div> 
                           )
                       }else{
                           return null
                       }
                   })
               }
            </div>
        </div>
    )
}

Tabs.propType = {
    children: function(props , propName , componentName){
        const prop = props[propName];

        let error = null;

        React.Children.forEach(prop,  function (child) {
            if(child.type !== TabPane){
                 error = new Error(
                "`" + componentName + "` children should be of type `TabPane`."
                );
            }
        })
        return error;
    }
}
export default Tabs;