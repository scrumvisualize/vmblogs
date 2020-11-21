
import React, { useState, useEffect} from 'react';
import VideoPlayer from './VideoPlayer';


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
                    
              </div>
              <div className="about_right_soccer">
                  <p>I feel motivated while playing soccer. This is one of thing I enjoy the most and 
                    always keeps my spirits high.</p>
              </div>
           </div>
           <div className="box2">
           <div className="about_left_soccer">
                  <p></p>
                  <img src="/images/download.PNG"></img>
              </div>
              <div className="about_right_soccer">
                  <p>Building something in React that makes me happy. I keep on fiddling with new features in React</p>
                  
              </div>
           </div>
           <div className="box3">
           <div className="about_left_soccer">
                  <p></p>
                  <img src="/images/cypress.png"></img>
              </div>
              <div className="about_right_soccer">
                  <p>Automation is one of the key area in the testing life cycle. The new tool Cypress keeps me busy while working on that.</p>
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
        <div className="container">
           <div className="row">
               <form name="blogsubscriber" className="blogsubscriber"> 
                    <input type="text" name="subscribe" className="subscribe email" required></input>
                    <button className="subscribe button">Subscribe</button>
               </form>
           </div>
           <div className="blogvideo">
                    
            </div>
        </div>

        <div className="container">
            <div className="row">
                <VideoPlayer/>
            </div>
        </div>
    </div>
    )

}

export default About;