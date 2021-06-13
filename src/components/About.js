import React from 'react'


const About = (props) => {

    // setTimeout( () => {
    //     props.history.push('./contact')
    // }, 2000)


    return (
        <div 
            className="ui raised very padded text container segment" 
            style={{marginTop:'80px'}}
        >
            <h3 className="ui header">About</h3>    
            <p>About: You can now view 12_react_router_redux in the browser.</p>
        </div>    
    )
}

export default About;