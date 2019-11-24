// @flow
import axios from 'axios';

const instance = axios.create({
  baseURL: 'server',
});

export default instance;
