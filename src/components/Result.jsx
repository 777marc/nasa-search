import React from 'react'

function Result(props) {

    let title = '';
    console.log('xxx', props.result)    
    // if(props.results.data) {
    //     title = props.results.data.length > 0 ? props.data[0].result.title : 'no title';
    // }

    return (
        <>
            <div>{title}</div>
            <div>
                {/* <image scr={} /> */}
            </div>
            <p>----------------------------------</p>
        </>
    )
}

export default Result;
