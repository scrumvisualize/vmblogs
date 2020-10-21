
import React, { useState, useEffect, useMemo, Component } from 'react';
import { usePosts } from "../custom-hooks/";
import Moment from 'moment';
import { Wave } from "react-animated-text";
import axios from "axios";
import html2canvas from 'html2canvas';

export default function Home() {

    //const [posts, isLoading] = usePosts();
    const [isLoading] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showColor, setShowColor] = useState("");
    const [findTag, setFindTag] = useState("");
    const initialCount = () => Number(window.localStorage.getItem('sitevisits') || 0);
    const [totalVisit, setTotalVisit] = useState(initialCount);
    const increment = () => setTotalVisit(totalVisit + 1);
    const [loadItems, setLoadItems] = useState(6);


    /* In the Home tab, system displays all the published blogs from contentful website. 
       We can search for the blogs in the search area provided. Also on click on the tags
       should filter the blogs records in Home page. */

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/service/blogpost');
                setSearchResults(res.data.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);


    const results = React.useMemo(
        () =>
            searchResults.filter(blog => {
                return blog.fields.title.toLowerCase().includes(searchTerm) || blog.fields.title.toUpperCase().includes(searchTerm) || blog.fields.shortDescription.toLowerCase().includes(searchTerm)
                    || blog.fields.shortDescription.toUpperCase().includes(searchTerm)
            }),
        [searchTerm, searchResults]
    );


    const getFilterTags = (event) => {
        const tagText = event.target.innerText;
        console.log("Print tag of a:" + tagText);
        const results = searchResults.filter(blog =>
            blog.fields.title.toLowerCase().includes(tagText) || blog.fields.title.toUpperCase().includes(tagText)
        );
        setSearchResults(results);
    }

    const randomizedHex = (tags) => {
        setFindTag(tags);
        console.log("Print tag of a:" + tags);
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setShowColor(randomColor);
    }


    useEffect(() => {
        localStorage.setItem('sitevisits', totalVisit)
    }, [totalVisit])


    const showMoreBlogs = () => {
        setLoadItems((preValue) => preValue + 6);
    }


    const renderPosts = () => {
        if (isLoading) return (<div className="loadingIcon"> <p className="noSearchData">Loading...</p> </div>);

        return (
            <div onClick={increment} className="wrap">
                <div className="post-head">
                    <div className="container align-center">
                        <h2>Vinod Mathew</h2>
                        <p>sharing my knowledge {totalVisit}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column left" >
                        <h3>Search</h3>
                        <label>
                            <div className="playerSearch_Home">
                                <div className="playerSearch_Icon">
                                    <input type="text" className="playerSearch_Home_Input" placeholder="search posts..." value={searchTerm} onChange={handleChange} />
                                </div>

                            </div>
                        </label>
                        <h3>Tags</h3>
                        <label>
                            {
                                searchResults.map(({ fields: { id, tags } }) => (
                                    <div key={id} className="techtags">
                                        {
                                            Array.isArray(tags) ? (
                                                tags.map((tag) => (
                                                    <a onClick={getFilterTags} className="grouptechtags" style={{ backgroundColor: `${showColor}` }, { marginRight: "10px" }} key={tag}>{tag}</a>
                                                ))
                                            ) : (
                                                    <a onClick={getFilterTags} style={{ backgroundColor: `${showColor}` }} className="grouptechtags">{tags}</a>
                                                )
                                        }
                                    </div>
                                ))
                            }
                        </label>
                        <div className="twitterlink">
                            <a href="">Follow me on twitter</a>
                        </div>
                        <div className="reactStunning">
                            🛠️ Built with react...!
                        </div>
                        <div>
                            <small className="copyright">© 2020 vinod mathew </small>
                        </div>

                        <div className="studyHomeImage">
                            <img src="/images/vm.jpg"></img>
                        </div>
                    </div>
                    <div className="column right" >
                        {!results.length && (<div> <div className="noSearchData"><Wave text="No results available...!" /></div> </div>)}
                        <div className="container">
                            {
                                results.slice(0, loadItems).map(({ sys: { id, createdAt }, fields: { title, image, shortDescription, description, tags, skillLevel, duration, slug } }) => (
                                    <div key={id} id="blogpostEach" className="column-center">
                                        <article onClick={() => randomizedHex(tags)} key={id} className="blogmaintile">
                                            {/*<img className="blogImage" key={image.fields.file.url} src={image.fields.file.url} alt="myImage"></img>*/}
                                            <div className="blogtitle">
                                                <span key={title}>{title}</span>
                                            </div>
                                            <section>
                                                <p className="blogdescription" key={shortDescription}>{shortDescription}</p>
                                                <span className="blogcreateddate" key={createdAt}>{Moment(createdAt).format('MMM DD YYYY')}</span>
                                                <span style={{ display: "none" }} key={tags}>{tags}</span>
                                            </section>
                                            <section>
                                                <p className="bloglongdescription" key={description}>{description}</p>
                                            </section>
                                            <section className="col1">
                                                {
                                                    <span className="difftags" key={skillLevel} >{skillLevel}</span>
                                                }
                                            </section>
                                            <span className="blogduration" key={duration} >{duration} min</span>
                                            <section className="col2">
                                                <a href={slug}>...more {'>'}{'>'}</a>
                                            </section>
                                        </article>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bloghistory">
                        <button onClick={showMoreBlogs}>Load more...</button>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="posts__container">
            <div className="posts">{renderPosts()}</div>
        </div>
    );
}