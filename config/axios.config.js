import axios from "axios";

const instance = axios.create({
  baseURL: "http://80.76.42.97:3000",
  headers: {
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidG9kb191c2VyIn0.00oETdVsYnWPnFTnzjWXdDsUxDBIdPu9U4F2HPaQm5U',
    'Content-type' : 'application/json',
    "Access-Control-Allow-Origin": "*"
  }
});

export default instance;