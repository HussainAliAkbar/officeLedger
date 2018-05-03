import axios from 'axios';

async function getAPI(url, params = {}) {
  console.log(url);
  try {
    let res = axios.get(url, { params: params});
    return res;
  }
  catch (err) {
    console.log('err in apiHelper: ', err);
  }
}

async function postAPI(url, payload = {}, params = {}) {
  console.log(url);
  try {
    let res = axios.post(url, payload, {params: params});
    return res;
  }
  catch (err) {
    console.log('err in apiHelper: ', err);
  }
}

async function putAPI(url, payload = {}, params = {}) {
  console.log(url);
  try {
    let res = axios.put(url, payload, {params: params});
    return res;
  }
  catch (err) {
    console.log('err in apiHelper: ', err);
  }
}

async function deleteAPI(url, payload = {}, params = {}) {
  console.log(url);
  try {
    let res = axios.delete(url, {params: params, data: payload});
    return res;
  }
  catch (err) {
    console.log('err in apiHelper: ', err);
  }
}

export {
  getAPI,
  postAPI,
  putAPI,
  deleteAPI
} ;