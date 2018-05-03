import {  getAPI, postAPI, putAPI, deleteAPI} from '../helpers/apiHelper';
import config from '../config';

const baseUrl = `${config.baseUrl}:${config.port}/api`;

export {
  createBusiness,
  getBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  getClientsAssociatedToBusiness
} ;


async function createBusiness(payload, params) {
  try {
    return await postAPI(`${baseUrl}/business`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getBusinesses(params) {
  try {
    return await getAPI(`${baseUrl}/business`, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getBusinessById(businessId, params) {
  try {
    return await getAPI(`${baseUrl}/business/${businessId}`, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function updateBusiness(businessId, payload, params) {
  try {
    return await putAPI(`${baseUrl}/business/${businessId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function deleteBusiness(businessId, payload, params) {
  try {
    return await deleteAPI(`${baseUrl}/business/${businessId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getClientsAssociatedToBusiness(businessId, params) {
  try {
    return await getAPI(`${baseUrl}/business/${businessId}/associatedClients`, params);
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
