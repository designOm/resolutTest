import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const transections = [
    {
        id:1,
        date:'9 March 2020',
        remarks:'20922 Avalon Drive (Jon Hea..)',
        type:'credit',
        fundType:'Divident',
        amount:10.00
    },
     {
        id:2,
        date:'9 March 2020',
        remarks:'20922 Avalon Drive (Jon Hea..)',
        type:'debit',
        fundType:'Purchase',
        amount:1000.00
    },
    {
        id:3,
        date:'9 March 2020',
        remarks:'Freedom Coin',
        type:'credit',
        fundType:'Deposit',
        amount:10.00
    },
     {
        id:4,
        date:'9 March 2020',
        remarks:'Freedom Coin',
        type:'debit',
        fundType:'Whidrawl',
        amount:500.00
    },
      {
        id:5,
        date:'9 March 2020',
        remarks:'Profit Wolfpack (Alpha Name)',
        type:'debit',
        fundType:'Purchase',
        amount:500.00
    },
     {
        id:6,
        date:'9 March 2020',
        remarks:'Profit Wolfpack (Alpha Name)',
        type:'debit',
        fundType:'Contribute',
        amount:400.00
    },
]

const RecentTransections = (props) =>{
    const styles = style();
    return(
        <div className={styles.RecentTransections}>
             <div className={styles.heading}>
                <h4>Recent Transactions</h4>
            </div>
            {
                window.innerWidth < 540 ?
                <div>
                    {transections.map((item,index) =>{
                        return(
                            <div key={`transection-${index + 1}`} className={styles.dataItem}>
                                <p><span className="lable">Date</span>:<span className="v">{item.date}</span></p>
                                <p><span className="lable">Transaction</span>:<span className="v"> {item.remarks}--<span className="flag">{item.fundType}</span></span></p>
                                <p><span className="lable">Amount</span>:<span className="v">
                                        {
                                            item.type === 'credit'?
                                            <span className={styles.greenMark}><b>${item.amount}</b></span>:
                                            <span><b>-${item.amount}</b></span>
                                        }
                                    </span></p>
                            </div>
                        )
                    })}
                </div>
            :
            <div className={styles.dataTableArea}>
                <table className={styles.dataTable}>
                    <colgroup></colgroup>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transection</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                         {transections.map((item , index)=>{
                            return(
                                <tr key={`transection-${index + 1}`}>
                                    <td>{item.date}</td>
                                    <td>
                                        {item.remarks}--<span>{item.fundType}</span>
                                    </td>
                                    <td>
                                        {
                                            item.type === 'credit'?
                                            <span className={styles.greenMark}><b>${item.amount}</b></span>:
                                            <span><b>-${item.amount}</b></span>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            }
             <div className={styles.viewMore}>
                <Link to="/" title="View More" >View More</Link>
            </div>
        </div>
    )
}

const style = createUseStyles({
    RecentTransections:{
        
    },
    heading:{
        '& h4':{
            fontSize:18,
            fontWeight:'600',
            marginBottom:10,
            color:'#2c2c2c',
            '@media (min-width:1600px)':{
                fontSize:20
            },
            
        }
    },
    dataTableArea:{
        width:'100%',
        oferFlow:'auto'
    },
    dataTable:{
        width:'100%',
        color:'#717171',
        fontSize: 14,
        borderCollapse: 'collapse',
        '@media (min-width:1600px)':{
            fontSize:18
        },
        '& thead':{
            '& tr':{
                borderBottom:'2px solid rgba(41, 56, 121, .12)',
            },
            '& th':{
                 borderBottom:'2px solid rgba(41, 56, 121, .12)',
                 paddingBottom:10
            },
            paddingBottom:20,
             color:'#717171',
             '& tr th:not(:nth-child(3))':{
                 textAlign:'left',
             },
             '& tr th:nth-child(3)':{
                 textAlign:'center'
             }
        },
        '& tbody':{
            '& tr td':{
                padding:'3.5px 0',
                '@media (min-width:1600px)':{
                    padding:'8px 0',
                }
            },
            '& tr td:nth-child(2) span':{
                fontWeight:'bold',
                fontStyle:'italic'
            },
             '& tr td:nth-child(3)':{
                 textAlign:'center',
                 fontWeight:'bold'
             }
        }
    },
    greenMark:{
        color:'green'
    },
     viewMore:{
        textAlign:'right',
       '@media (max-width:540px)':{
           textAlign:'center'
       },
        '& a':{
            textDecoration:'none',
            fontSize:14,
            color:'rgba(41, 56, 121, 1)',
            fontWeight:600,
            '@media (min-width:1600px)':{
                fontSize:18
            },
             '@media (max-width:540px)':{
                padding:'15px 0',
                display:'inline-block'
            },
        }
    },
    dataItem:{
        boxShadow:'0px 3px 6px rgba(41, 56, 121, 0.12)',
        marginTop:15,
        border:'0.5px solid rgba(225, 225, 225, 1)',
        marginBottom:15,
        padding:10,
        borderRadius:6,
        '& p':{
            color:'rgba(112, 112, 112, 1)',
            fontSize:13,
            marginTop:5,
            marginBottom:5,
            alignItems:'cente',
            display:'flex',
            '& .lable':{
                display:'inline-block',
                maxWidth: '40%',
                flex:'0 0 40%',
                textAlign:'left',
                fontWeight:600
            },
            '& .v':{
                flexBasis:0,
                flexGrow:1,
                maxWidth:'100%',
                textAlign:'left',
                paddingLeft:10,
                '& .flag':{
                    fontWeight:'bold',
                    color:'#2c2c2c',
                    fontStyle:'italic'
                }
            }
        }
    }
});

export default RecentTransections;