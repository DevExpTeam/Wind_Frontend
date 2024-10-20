import axios from 'axios';
const http = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:8010',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
