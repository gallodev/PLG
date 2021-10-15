import axios from 'axios';

export const getBaseURL = (baseResource ?: string) => {  
    
    const { HEROKU_API } = process.env;
    const getUrl = HEROKU_API || 'localhost:3333';
    const apiPath = (baseResource) ? `/api/${baseResource}`:'/api';    
    const url = `http://${getUrl}${apiPath}`;  
  
    return url;
};
  

export const useRequests = () => {
    return axios.create({ baseURL: getBaseURL('rocket') });   
};