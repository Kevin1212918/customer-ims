const SERVER_HOST = process.env.REACT_APP_SERVER_HOST || 'localhost';
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || '5433';
export const SERVER_API_URL = `http://${SERVER_HOST}:${SERVER_PORT}/api`;