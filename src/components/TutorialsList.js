import React, { useState, useEffect } from 'react';
import { getBlogPosts } from '../client';
import Moment from 'moment';


const TutorialsList = () => {

  const promise = getBlogPosts();
  const [searchResults, setSearchResults] = useState([]);
  const [blogArticles, setBlogArticles] = useState([]);


  useEffect(() => {
    promise.then(blogPosts => {
      setBlogArticles(blogPosts)
    })
  }, [])


  let serialnoarr = [];
  let count = 0;
  for (var i = 0; i <= blogArticles.length; ++i) {
    count = count + 1;
    serialnoarr.push(count);
    console.log(blogArticles.length);
  }

  return (
    <div className="wrap">
      <h3>All tutorials:</h3>
      {
        blogArticles.map(({ sys: { id, createdAt }, fields: { title, images, description, createddate, tags, index, slug } }) => (
          <div key={id} className="blogtreeview">
            <a href={slug}>
              <div id="main-content"><p key={title}>{title}</p></div>
              <div id="sidebar-left"><p key={createdAt}>{Moment(createdAt).format('MMM DD YYYY')}</p></div>
              <div id="sidebar-right"><p key={tags}>{(index ? ', ' : '') + tags}</p></div>
            </a>
          </div>
        ))
      }
    </div>
  )
}
export default TutorialsList;