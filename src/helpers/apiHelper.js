
import axios from 'axios';

async function request(url) {
  console.log(url);
  try {
    let res = axios.get(url);
    return res;
  }
  catch (err) {
    console.log('err in apiHelper: ', err);
  }
}

export {request} ;