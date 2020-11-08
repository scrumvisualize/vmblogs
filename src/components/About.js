
import React, { useState, useEffect} from 'react';

const About = () => {

    return (
    <div className="wrap">
        <div className="leftside_about">
            <h3>About me</h3>
            <p>I am an automation engineer with good knowledge of automation technologies. 
               I 💙 to code in React js and would like to explore different features of react.
               I was longing to create a blog site to share some of the things I have learned over the years.
            </p>
            <p>When you started to work on something new you will spend time in researching a lot of materials. 
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
              <div className="about_left_soccer">
                  <p>⚽</p>
                  <img></img>
              </div>
              <div className="about_right_soccer">
                  <p>I play soccer couple of days in a week. I feel motivated while during the game and this keeps my spirits high.</p>
              </div>
           </div>
           <div className="box2">
           <div className="about_left_soccer">
                  <p></p>
                  <img src="/images/download.PNG"></img>
              </div>
              <div className="about_right_soccer">
                  <p>One of the thing I enjoy a lot is building something using React</p>
                  
              </div>
           </div>
           <div className="box3">
           <div className="about_left_soccer">
                  <p></p>
                  <img src="/images/cypress.png"></img>
              </div>
              <div className="about_right_soccer">
                  <p>Now I am working in Cypress automation tool. This is my daily job.</p>
              </div>
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