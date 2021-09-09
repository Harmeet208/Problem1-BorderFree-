function SumList({count, price}){
    let total = count*price;
    return(
        <>
            <p className="heading">Product Summary</p>
            <div className="sumCon">
                <img className="sImg" src="https://picsum.photos/id/36/200/200" alt="Product Image"/>
                <div className="subSum">You have {count} products in your cart</div>
                <div className="subSum">Total Cost : &#x20B9;{total}</div>
            </div>
        </>
    )
}

function Summary(props){
    //console.log("inn");
    const {count, price} = props;
    return(
        <>
            <SumList count={count} price={price} />
        </>
    )
}

export default Summary;