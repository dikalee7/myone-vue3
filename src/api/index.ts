import axios from 'axios';

function registerUser() {
  const url = 'http://localhost:3000/signup';
  axios.post(url);
}

export { registerUser };
