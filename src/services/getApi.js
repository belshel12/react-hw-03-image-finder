import axios from "axios";

async function getApi(query, page) {
  const BASE_URL = " https://pixabay.com/api/";
  const KEY = "32980017-bfe9b13623cd5fda61d70a35c";

  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
}

export default getApi;
