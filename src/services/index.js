import {  getAPI, postAPI, putAPI, deleteAPI} from '../helpers/apiHelper';
import config from '../config';

const baseUrl = `${config.baseUrl}:${config.port}/api`;

export {
  createBusiness,
  getBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  getClientsAssociatedToBusiness,
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
  addClientToBusiness,
  deleteClientFromBusiness,
  createTransaction,
  getAllBusinessTransactions,
  getTransactionById,
  settleTransaction,
  deleteTransaction
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


async function createClient(payload, params) {
  try {
    return await postAPI(`${baseUrl}/client`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getClients(params) {
  try {
    return await getAPI(`${baseUrl}/client`, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getClientById(clientId, params) {
  try {
    return await getAPI(`${baseUrl}/client/${clientId}`, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function updateClient(clientId, payload, params) {
  try {
    return await putAPI(`${baseUrl}/client/${clientId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function deleteClient(clientId, payload, params) {
  try {
    return await deleteAPI(`${baseUrl}/client/${clientId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}


async function addClientToBusiness(clientId, businessId, payload, params) {
  try {
    return await postAPI(`${baseUrl}/client/${clientId}/addToBusiness/${businessId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}


async function deleteClientFromBusiness(clientId, businessId, payload, params) {
  try {
    return await deleteAPI(`${baseUrl}/client/${clientId}/deleteFromBusiness/${businessId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function createTransaction(payload, params) {
  try {
    return await postAPI(`${baseUrl}/transaction`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getAllBusinessTransactions(businessId, params) {
  try {
    return await getAPI(`${baseUrl}/transaction/business/${businessId}`, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function getTransactionById(transactionId, params) {
  try {
    return await getAPI(`${baseUrl}/transaction/${transactionId}`, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function settleTransaction(transactionId, payload, params) {
  try {
    return await putAPI(`${baseUrl}/transaction/${transactionId}`, payload, params);
  }
  catch (e) {
    console.log(e);
  }
}

async function deleteTransaction(transactionId, payload, params) {
  try {
    return await deleteAPI(`${baseUrl}/transaction/${transactionId}`, payload, params);
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
