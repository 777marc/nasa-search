import React from 'react'

function Result(props) {

    let title = '';
    let imgLinks = [];
    if (props.result.data) {
        let { data } = props.result;
        title = data.length > 0 ? data[0].title : 'no title';
    }

    if (props.result.links) {
        let { links } = props.result;
        imgLinks = links;
    }

    return (
        <>
            <div>{title}</div>
            <div>
                {   
                    imgLinks.map( (link, index) => {
                        if (link.render === 'image') {
                            return <img key={index} width="150px" src={link.href} alt={title}/>
                        }
                    })
                }
                
            </div>
            <p>----------------------------------</p>
        </>
    )
}

export default Result;
