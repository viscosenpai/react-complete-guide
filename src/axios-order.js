import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-visco-9b5ee.firebaseio.com/",
});

export default instance;
