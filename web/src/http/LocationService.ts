import axios from "axios";

const ipApiUrl: string = "https://ipapi.co/json";

const location = async () => {
  let data: any = await axios(ipApiUrl)
    .then((response) => response.data)
    .catch((e) => console.error(`Deu ruim: ${e}`));
  return data;
};

export default { location };
