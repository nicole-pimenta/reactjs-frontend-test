import axios from "axios";

const api = axios.create({
  baseURL: "https://nicemeeting.herokuapp.com",
});

export default api;
