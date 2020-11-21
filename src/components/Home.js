
import React, { useState, useEffect, useMemo, Component } from 'react';
import { usePosts } from "../custom-hooks/";
import Moment from 'moment';
import { Wave } from "react-animated-text";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    //const [posts, isLoading] = usePosts();
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showColor, setShowColor] = useState("");
    const [findTag, setFindTag] = useState("");
    const initialCount = () => Number(window.localStorage.getItem('sitevisits') || 0);
    const [totalVisit, setTotalVisit] = useState(initialCount);
    const increment = () => setTotalVisit(totalVisit + 1);
    const [loadItems, setLoadItems] = useState(3);
    const currentDate = Moment().format("MMM DD YYYY");
    const dateTo = Moment().subtract(14, 'days').format('MMM DD YYYY');


    /* In the Home tab, system displays all the published blogs from contentful website. 
    /* Searching for the blogs in the search area is possible. Also on click on the tags
    /* should filter the blogs records in Home page. On click on Load more will display next 
    /* set of blogs if they are available.*/

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    /* Send a GET request to server and get the blog data from contentful website and display 
    /* in the Home page */
    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get('http://localhost:5000/service/blogpost');
                    setSearchResults(res.data.items);
                    console.log(res.data.items);
                    setIsLoading(false);
                } catch (e) {
                    console.log(e);
                }
            }
            fetchData();
        }, 1000)
    }, []);


    /* Type text related to blog post in the search field will filter the blog and display on Home page */
    const results = React.useMemo(
        () =>
            searchResults.filter(blog => {
                return blog.fields.title.toLowerCase().includes(searchTerm) || blog.fields.title.toUpperCase().includes(searchTerm) || blog.fields.shortDescription.toLowerCase().includes(searchTerm)
                    || blog.fields.shortDescription.toUpperCase().includes(searchTerm)
            }),
        [searchTerm, searchResults]
    );


    /* On click on each tag, system will filter the blog records on the Home page, similar to search */
    const getFilterTags = (event) => {
        const tagText = event.target.innerText;
        console.log("Print tag of a:" + tagText);
        const results = searchResults.filter(blog =>
            blog.fields.title.toLowerCase().includes(tagText) || blog.fields.title.toUpperCase().includes(tagText)
        );
        setSearchResults(results);
    }


    /* On click on each blog post, function will be invoked and set a random color to the tags*/
    const randomizedHex = (tags) => {
        setFindTag(tags);
        console.log("Print tag of a:" + tags);
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setShowColor(randomColor);
    }

    /* On click add a counter, counter gets incremented and update the counter value to localStorage*/
    useEffect(() => {
        localStorage.setItem('sitevisits', totalVisit)
    }, [totalVisit])


    /*On click on Load more button, system will display next set of 6 blogs on page if they are available. 
    /* By default system will display 6 blogs only */
    const showMoreBlogs = () => {
        setLoadItems((preValue) => preValue + 3);
    }

    const notify = () => toast.success("🦄 Loading your blogs !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined
    });

    const renderPosts = () => {

        return (
            <div onClick={increment} className="wrap">
                <div className="">
                    <span className="mainheading-line">VINOD MATHEW</span>
                    <div className="header-tagline">Automation Engineer</div>
                </div>
                { isLoading ? (
                    <div className="loader">
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                    </div>
                ) : (

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
                                                            <a onClick={getFilterTags} style={{ backgroundColor: `${showColor}` }} className="grouptechtags" key={tags}>{tags}</a>
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
                                    <img src="/images/leftsideimage.JPG"></img>
                                </div>
                                <div className="container align-center">
                                    <p>{totalVisit}</p>
                                </div>
                            </div>
                            <div className="column right" >
                                {!results.length && (<div> <div className="noSearchData"><Wave text="No results available...!" /></div> </div>)}
                                <div className="container">
                                    {
                                        results.slice(0, loadItems).map(({ sys: { id, createdAt, updatedAt }, fields: { title, image, shortDescription, description, tags, skillLevel, duration, slug } }) => (

                                            <div key={id} id="blogpostEach" className="column-center">
                                                {
                                                    Moment(createdAt).format('MMM DD YYYY') === currentDate || Moment(updatedAt).format('MMM DD YYYY') === currentDate || Moment(createdAt).format('MMM DD YYYY') <= currentDate && Moment(createdAt).format('MMM DD YYYY') >= dateTo ? (
                                                        <span className="newStatus">new</span>
                                                    ) : (
                                                            <span></span>
                                                        )
                                                }
                                                <article onClick={() => randomizedHex(tags)} key={id} className="blogmaintile">
                                                    <div className="blogback">
                                                        {/*<img className="blogImage" key={image.fields.image} src={image.fields.image} alt="myImage"></img>*/}
                                                    </div>
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
                                <button onClick={() => {
                                    notify()
                                    showMoreBlogs()
                                }}>Load more...</button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    };

    return (
        <div className="posts__container">
            <div className="posts">{renderPosts()}</div>
            <ToastContainer>
            </ToastContainer>
        </div>
    );
}