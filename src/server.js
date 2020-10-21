const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
const path = require('path');
const cors = require("cors");
const { get } = require('http');


const app = express()
const port = 5000
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*This service will get the blog contents from contentful site and display in Home page*/

app.get('/service/blogpost', async (req, res) => {
  try {
    const blogposts = await axios({
      url: 'https://cdn.contentful.com/spaces/pow48a9gxkua/entries?access_token=WSH1UgLbP7Pyonn7Fuf84-LiEO40kV1zZr_g5S9I4QQ&limit=1000&skip=0',
      method: "GET"
    });
    res.status(200).send(blogposts.data);
  } catch (e) {
    res.status(500).json({ fail: e.message });
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})