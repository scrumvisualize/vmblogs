import React from "react";
import { Link, useParams } from "react-router-dom";
import MD from "react-markdown";
import { useSinglePost } from "../custom-hooks";
import Moment from 'moment';
import SyntaxHighLighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  const renderPost = () => {
    if (isLoading) return (<div> <p className="noSearchData">Loading...</p> </div>);

    return (
      <React.Fragment>
        <div className="wrap">
          <div className="singlePost main">
            <div className="post__intro">
              <h3 className="post__intro__title">{post.title}</h3>
              <small className="post__intro__date">{Moment(post.createdAt).format('MMM DD YYYY')}</small>
              <SyntaxHighLighter language="javascript" style={dracula}>{post.description}</SyntaxHighLighter>
              <img
                className="post__intro__img"
                src={post.image.fields.file.url}
                alt={post.title}
              />
              {/* {
                post.richText.content.map(({nodeType, value}) => (
                <p key={value}>{value}</p>
                ))
              } */}
            </div>
          </div>
        </div>
        <div className="post__body">
          <MD source={post.body} />
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="post">
      <Link className="post__back" to="/">
        {"< Back"}
      </Link>
      {renderPost()}
    </div>
  );
}
