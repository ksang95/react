import React from 'react';
import { SampleConsumer, useSample } from '../contexts/sample';

//HoC 사용x
/*
const Receives = () => {
    return(
        <SampleConsumer>
        {
            (sample)=>(

                <div>
                현재 설정된 값: {sample.state.value}
                </div>
            )
        }
        </SampleConsumer>
    )
}

export default Receives;
*/

const Receives = ({value})=>{
    return(
        <div>
            현재 설정된 값: {value}
        </div>
    );
};

export default useSample(Receives);