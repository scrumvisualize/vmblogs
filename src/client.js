import * as contentful from 'contentful'
require('dotenv').config()

export const SPACE_ID = process.env.REACT_APP_SPACE_ID;
export const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;


const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const getBlogPosts = () => client.getEntries().then(response => response.items);

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'course'
    })
    .then(response => response.items)

export { getBlogPosts, getSinglePost }