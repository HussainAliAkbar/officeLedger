import {  getAPI, postAPI, putAPI, deleteAPI} from '../helpers/apiHelper';
import config from '../config';

const baseUrl = `${config.baseUrl}:${config.port}/api`;

export {
  getBusinesses
} ;


async function createBusiness(payload, params) {
  try {

    let response = await getAPI(`${baseUrl}/business`, params);
    return response;
  }
  catch (e) {
    console.log(e);
  }
}

async function getBusinesses() {
  try {
    let params = {pageSize: 10, skip: 10};
    let response = await getAPI(`${baseUrl}/business`, params || {});
    return response;
  }
  catch (e) {
    console.log(e);
  }
}

//
// //exporting a function
// export function squareNumber(x) {
//   return x * x;
// }

//exporting a variable
// var pi = 3.14;
//
// function squareNumber(x) {
//   return Promise.resolve('yayyyy');
// }
// export {squareNumber, pi, };
