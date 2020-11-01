
import React, { useState, useEffect} from 'react';

const About = () => {

    return (
    <div className="wrap">
        <div className="leftside_about">
            <h3>About me</h3>
            <p>I am an automation engineer with good knowledge of automation technologies. 
               I 💙❤️ to code in React js and would like to explore different features of react.
               I was longing to create a blog site to share some of the things i learned over the years.
            </p>
            <p>I am an automation engineer with good knowledge of automation technologies. 
               I love to code in React js and would like to explore different features of react.
               I was longing to create a blog site to share some of the things i learned over the years.
            </p>
            <p>I am an automation engineer with good knowledge of automation technologies. 
               I love to code in React js and would like to explore different features of react.
               I was longing to create a blog site to share some of the things i learned over the years.
            </p>
        </div>
        <div className="rightside_about">
           <img src="images/Book.png"></img>
        </div>
        <div className="container">
           <div className="box1">
                <p>⚽</p>
           </div>
           <div className="box2">
                <p>Something to add here</p>
           </div>
           <div className="box3">
                <p>Something to add here</p>
           </div>
        </div>
        <div className="container">
           <div className="row">
               <div className="middlesection image">
                    <img src="/images/leftsideimage.JPG"></img>
               </div>
           </div>
        </div>
    </div>
    )

}

export default About;