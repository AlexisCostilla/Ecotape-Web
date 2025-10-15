// client.js (frontend)
// Detecta automáticamente si estás en local o en producción
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : 'https://vercel.com/alexis-projects-8bfb0683/ecotape-web'; // ← Cambia por tu URL de Vercel

fetch(`${API_URL}/api/productos`)
  .then(res => res.json())
  .then(data => {
    console.log("Respuesta del backend:", data);
    const p = document.querySelector("#mensaje");
    p.textContent = JSON.stringify(data, null, 2); // formato más legible
  })
  .catch(err => console.error("Error al pedir al backend:", err));