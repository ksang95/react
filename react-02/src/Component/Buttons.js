import React from "react";

const pairs = ['BTCUSD', 'ETHUSD', 'XRPUSD'];

let log = function(a){
    console.log(a);
}
const Buttons = ({ onChangePair }) => { //Buttons를 jsx 요소로 리턴.
    const buttonList = pairs.map(
        pair => (<button key={pair} onClick={() => {onChangePair(pair); log(1);}}>{pair}</button>)
    );

    return (
        <div className="Buttons">
            {
                buttonList
            }
        </div>
    );
}

export default Buttons;