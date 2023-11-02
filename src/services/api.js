import axios from 'axios';

const BASE_URL = 'https://api.plugg.to';
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

export default api;


// function isEnvVariableDefined(variableName) {
//   return process.env[variableName] !== undefined;
// }

// async function getAccessToken() {
//   let accessTokenObject = JSON.parse(sessionStorage.getItem('token-data'));
//   const now = new Date();

//   if (isEnvVariableDefined('VUE_APP_TEMPORARY_ACCESS_TOKEN')) {
//     // Se a variável de ambiente estiver definida, use-a como token de acesso
//     accessTokenObject = {
//       access_token: process.env.VUE_APP_TEMPORARY_ACCESS_TOKEN, // Use a variável de ambiente
//       expires_at: now.getTime() + 3600 * 1000, // Configure o tempo de expiração como desejado
//     };
//   } else if (!accessTokenObject || now > accessTokenObject.expires_at - 10) {
//     try {
//       console.log('Solicitando um novo token de acesso...');
//       // Fazer a solicitação usando axios para obter o token
//       const response = await axios.post('https://api.plugg.to/oauth/token', {
//         client_id: 'c01d538ce9e6d6c02b4f3b580aa0832f',
//         client_secret: '7bc19808b104873bc1a527233ca7202f',
//         username: '1670944186857',
//         password: 'bHVjYXNwcmV2aWF0b0BsaXZlLmNvbTAuNjUwNzc2MzgwNzQzMTQ1NzE2NzA9NDQxODY4NTc=',
//         grant_type: 'password',
//       });

//       accessTokenObject = response.data;

//       // Salvar o token na sessão
//       sessionStorage.setItem('token-data', JSON.stringify(accessTokenObject));

//       console.log('Token de acesso obtido com sucesso.');
//     } catch (error) {
//       console.error('Erro ao obter o token de acesso:', error);
//       throw error;
//     }
//   } else {
//     console.log('Usando token de acesso existente.');
//   }

//   return accessTokenObject.access_token;
// }

// export function apiClient(authenticated = false) {
//   const headers = {
//     "Content-Type": "application/x-www-form-urlencoded",
//     'Accept': 'application/json',
//   };

//   if (authenticated) {
//     const accessToken = getAccessToken();
//     if (!accessToken) {
//       console.error("Não é possível autenticar. Token de acesso não encontrado.");
//       throw new Error("Can't authenticate");
//     }
//     headers['Authorization'] = 'Bearer ' + accessToken;
//   }

//   return axios.create({
//     headers: headers,
//     baseURL: 'https://api.plugg.to',
//   });
// }
