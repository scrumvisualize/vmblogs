
import React, { useState, useEffect} from 'react';

const About = () => {

    return (
    <div className="wrap">
        <div className="leftside_about">
            <h3>About me</h3>
            <p>I am an automation engineer with good knowledge of automation technologies. 
             I love structure and order and I also stand for quality. 
             I love spending time on fixing little details and optimizing web apps.</p>
        </div>
        <div className="rightside_about">
           <img src="images/Book.png"></img>
        </div>
        <div className="container">
           <div className="box1">
                <p>Something to add here</p>
           </div>
           <div className="box2">
                <p>Something to add here</p>
           </div>
           <div className="box3">
                <p>Something to add here</p>
           </div>
        </div>
    </div>
    )

}

export default About;