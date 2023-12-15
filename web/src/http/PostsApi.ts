import axios from "axios";
import Post from "../types/Post";

const baseUrl: string = "http://localhost:8000/api/posts";


const getAllPosts = async () => {
  let data: any = await axios(baseUrl)
    .then((response) => response.data)
    .catch((e) => console.error(`Deu ruim: ${e}`));
  return data;
};


const savePost = async (post:Post) => {
  let data: any = await axios.post(baseUrl, post, {
      headers: {
        'Content-Type': 'application-json'
      }
    })
    .then((response) => response.data)
    .catch((e) => console.error(`Deu ruim: ${e}`));
  return data;
}


export default {
  getAllPosts,
  savePost
};
