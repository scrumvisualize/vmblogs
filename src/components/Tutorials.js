
import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
var moment = require("moment");

const Tutorials = () => {

    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@scrumvisualize`)
            .then(res => res.json())
            .then(response => {
                setMediumData(response.items);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const finalData = mediumData.slice(0, 6);

    return (
        <div id="blog" className="container mt-3">
            <h3 className="ui horizontal header divider mt-5">
                <p>Medium Blogs</p>
            </h3>
            {isLoading && <p className="noSearchData">Fetching data from Medium...!</p>}
            <Row>
                {finalData.map(article => (
                    <Col md="3" className="mb-3" key={article.guid}>
                        <div>
                            <Card>
                                <CardImg top width="100%" src={article.thumbnail} alt="img" />
                                <CardBody>
                                    <CardTitle>
                                        <a href={article.link}>{article.title}</a>
                                    </CardTitle>
                                    <CardSubtitle>
                                        Published:{" "}
                                        {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
export default Tutorials;