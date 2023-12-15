import axios from "axios";

const baseUrl: string = "http://localhost:8000/api/posts";

const getAllPosts = async () => {
  let data: any = await axios(baseUrl)
    .then((response) => response.data)
    .catch((e) => console.error(`Deu ruim: ${e}`));
  return data;
};

export default {
    getAllPosts
};
