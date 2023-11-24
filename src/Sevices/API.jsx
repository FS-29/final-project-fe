import axios from "axios";


const BASE_URL= 'https://655c3345ab37729791aa0ce7.mockapi.io';

const getPost=axios.get(BASE_URL+'/articles/');

export default{
    getPost
}