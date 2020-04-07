import axios from 'axios';

export function getPost(postId){
    return axios.get('/posts/' + postId);
}

export function getComments(postId){
    return axios.get(`/posts/${postId}/comments`);
}