// frontend/src/services/api.js

import axios from 'axios';

const baseURL = 'http://localhost:3000/api/matchrooms';

const api = axios.create({
  baseURL,
});

export default api;
