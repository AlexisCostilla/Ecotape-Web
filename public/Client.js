// client.js (frontend)
fetch("http://localhost:3000/productos") 
  .then(res => res.json())
  .then(data => {
    console.log("Respuesta del backend:", data);

    const p = document.querySelector("#mensaje");
    p.textContent = JSON.stringify(data);
  })
  .catch(err => console.error("Error al pedir al backend:", err));
