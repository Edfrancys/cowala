export const getIp = () => {
    const apiUrl:any = process.env.REACT_APP_API_GETIP;    
    return fetch(apiUrl)
        .then(response => response.json());
};