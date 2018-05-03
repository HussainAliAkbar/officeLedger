import {request} from '../helpers/apiHelper';
import config from '../config';
import Router from "../Router";

const baseUrl = `${config.baseUrl}:${config.port}/api`;



function squareNumber(x) {
  return Promise.resolve('yayyyy');
}

async function getBusinesses() {
  try {
    let response = await request(`${baseUrl}/business`);
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
var pi = 3.14;
export {squareNumber, pi, getBusinesses} ;