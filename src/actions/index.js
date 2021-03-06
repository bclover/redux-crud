import axios from 'axios';

export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';

const API_KEY = '?key=bclever1234';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`) // eslint-disable-line
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
}
