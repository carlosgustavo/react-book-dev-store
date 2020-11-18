import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/carlosgustavo/api-react-book-dev-store",
});

export default api;
