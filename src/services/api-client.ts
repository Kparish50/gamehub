import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'f8d69ff34a7e492d80701c1fe25db55c',
  },
});
