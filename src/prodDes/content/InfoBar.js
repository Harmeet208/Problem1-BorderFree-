import React from 'react'

function InfoBar(props) {
    console.log("props",props);
    const {count, setCount, setSumry} = props;
    return (
        <div className="info">
            <div>
                <h2>Smart Buy Accessories</h2>
                <h3 style={{fontSize:"24px"}}>Price : &#x20B9;1699  <del style={{fontSize:"19px",color:"gray"}}>1999</del> </h3>
                <ul>
                    <li className="subList">Say good-bye to cumbersome razors and expensive salons. </li>
                    <li className="subList">This trimmer from Flipkart SmartBuy offers a salon-style trim every time.</li> 
                    <li className="subList">It comes with stainless-steel, skin-friendly blades and comb tips, for the best shaving experience</li>
                </ul>
            </div>
            <button className="btn" onClick={()=>{
                setCount(count+1);
            }}>
                Add To Cart
            </button>
            <button className="btn1" onClick={()=>{
                setSumry(true);
            }}>
                Show Summary Page
            </button> <br />
            {count>0 ? <div style={{marginTop:"16px",fontSize:"18px"}}>You have added {count} item(s) in cart.</div> : null}
        </div>
    )
}

export default InfoBar
