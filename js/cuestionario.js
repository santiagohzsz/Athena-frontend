document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cuestionario-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const pais = document.getElementById("pais").value;
      const nivel = document.getElementById("nivel").value;
  
      // Guardar en localStorage (puedes luego mover esto a backend si tienes)
      localStorage.setItem("pais", pais);
      localStorage.setItem("nivelEducativo", nivel);
  
      // Redirigir al escritorio virtual
      window.location.href = "escritorio.js";
    });
  });
  