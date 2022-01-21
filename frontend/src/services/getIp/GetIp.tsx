export const getIp = () => {
    const apiUrl = process.env.REACT_APP_API_GETIP || 'not file env';    
    return fetch(apiUrl)
        .then(response => response.json());
};