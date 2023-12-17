import axios from "axios";
import Tweet from '../types/Tweet'

const baseUrl: string = "http://localhost:8000/api/tweets";


const list = async () => {
  let data: any = await axios(baseUrl)
    .then((response) => response.data)
    .catch((e) => console.error(`Deu ruim: ${e}`));
  return data;
};


const save = async (tweet:Tweet) => {
  let data: any = await axios.post(baseUrl, tweet, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.data)
    .catch((e) => console.error(`Deu ruim: ${e}`));
  return data;
}


export default {
  list,
  save
};
