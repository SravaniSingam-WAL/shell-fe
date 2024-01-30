
import React from "react";
import env from "react-dotenv";

export const API_URL = 'http://localhost:3030'
export const OP_BASE_URL =  window.env.OP_APP_BASEURL
export const CLAS_BASE_URL =  window.env.CLAS_APP_BASEURL
export const RDMS_BASE_URL = window.env.RDMS_APP_BASEURL
export const FAA_BASE_URL =  window.env.FAA_APP_BASEURL

const applicationUrls = {
    OP: OP_BASE_URL,
    CLAS: CLAS_BASE_URL,
    RDMS: RDMS_BASE_URL,
    FAA: FAA_BASE_URL,
  };
 export const getBaseUrl =(applicationName) => {console.log(applicationUrls[applicationName],'d')
     return applicationUrls[applicationName]}