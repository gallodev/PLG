import axios from 'axios';

export const getBaseURL = (baseResource ?: string) => {  
    
    const { REACT_APP_HEROKU_API } = process.env;
    console.log(REACT_APP_HEROKU_API)
    const getUrl = REACT_APP_HEROKU_API || 'http://localhost:3333';
    const apiPath = (baseResource) ? `/api/${baseResource}`:'/api';    
    const url = `${getUrl}${apiPath}`;  
  
    return url;
};
  

export const useRequests = () => {
    return axios.create({ baseURL: getBaseURL('rocket') });   
};