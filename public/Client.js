// client.js
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : 'https://ecotape-web.vercel.app';

const endpoint = window.location.hostname === 'localhost'
  ? '/productos'
  : '/api/productos';

fetch(`${API_URL}${endpoint}`)
  .then(res => res.json())
  .then(data => {
    console.log("Respuesta del backend:", data);
    const p = document.querySelector("#mensaje");
    p.textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => console.error("Error al pedir al backend:", err));