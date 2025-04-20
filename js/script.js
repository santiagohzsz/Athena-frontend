document.addEventListener("DOMContentLoaded", function () {
  const openChatBtn = document.getElementById("open-chat");
  const closeChatBtn = document.getElementById("close-chat");
  const chatModal = document.getElementById("chat-modal");
  const chatBox = document.querySelector(".chat-box");
  const sendMsgBtn = document.getElementById("send-msg");
  const userMsgInput = document.getElementById("user-msg");
  const chatMessages = document.getElementById("chat-messages");
  const showcaseBtn = document.getElementById("send-btn");
  const showcaseInput = document.getElementById("user-input");
  const floatingChat = document.getElementById("floating-chat");

  // ✅ Mostrar modal del chat
  function openModalWithAnimation() {
    chatModal.classList.remove("hidden");
    setTimeout(() => chatBox.classList.add("active"), 50);
  }

  // ❌ Cerrar el chat
  function closeModalWithAnimation() {
    chatBox.classList.remove("active");
    setTimeout(() => chatModal.classList.add("hidden"), 300);
  }

  // ✉️ Enviar mensaje al chat
  async function sendMessage() {
    const message = userMsgInput.value.trim();
    if (message === "") return;

    // Mostrar mensaje del usuario
    const userDiv = document.createElement("div");
    userDiv.classList.add("message", "user");
    userDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    userMsgInput.value = "";

    // Spinner mientras responde
    const aiDiv = document.createElement("div");
    aiDiv.classList.add("message", "ai");
    aiDiv.innerHTML = `<p><i class="fas fa-spinner fa-spin"></i> Pensando...</p>`;
    chatMessages.appendChild(aiDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    console.log("Enviando a /api/generate:", message);

    try {
      const respuesta = await fetch('https://proyecto-athena.onrender.com/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: message,
          model: 'meta-llama/llama-4-maverick:free'
        })
      });

      const data = await respuesta.json();
      console.log("Respuesta de backend:", data);

      aiDiv.innerHTML = `<p>${data.response || "Error en la respuesta"}</p>`;
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      aiDiv.innerHTML = `<p>Error al conectar con el servidor.</p>`;
    }
  }

  // 🎯 Eventos principales
  if (openChatBtn) openChatBtn.addEventListener("click", openModalWithAnimation);
  if (closeChatBtn) closeChatBtn.addEventListener("click", closeModalWithAnimation);
  if (sendMsgBtn) sendMsgBtn.addEventListener("click", sendMessage);
  if (userMsgInput) {
    userMsgInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendMessage();
    });
  }

  // 📥 Desde el showcase
  if (showcaseBtn && showcaseInput) {
    showcaseBtn.addEventListener("click", () => {
      floatingChat?.classList.remove("hidden");
      openModalWithAnimation();

      const question = showcaseInput.value.trim();
      if (question !== "") {
        userMsgInput.value = question;
        sendMessage();
        showcaseInput.value = "";
      }
    });
  }
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById("login-btn");
  const loginModal = document.getElementById('login-modal');
  const closeModal = document.getElementById('close-modal');
  const registerBtn = document.getElementById('register-btn'); // Nuevo botón

  if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', function (e) {
      e.preventDefault();
      loginModal.classList.remove('hidden');
    });
  } else {
    console.error("Error: No se encontró el botón o el modal de inicio de sesión.");
  }

  if (closeModal && loginModal) {
    closeModal.addEventListener('click', function (e) {
      e.preventDefault();
      closeAuthModal();
    });
  } else {
    console.error("Error: No se encontró el botón de cerrar el modal.");
  }

  // Agrega el listener para el botón "Registrarse"
  // (Este listener no hace nada, ya que la lógica de registro está en auth.js)
  if (registerBtn) {
    registerBtn.addEventListener('click', function (e) {
      e.preventDefault();

      // No necesitas hacer nada aquí
    });
  } else {
    console.error("Error: No se encontró el botón de registrarse.");
  }
});

function switchToRegister() {
  document.querySelector(".login-form").classList.add("hidden");
  document.querySelector(".register-form").classList.remove("hidden");
}

function switchToLogin() {
  document.querySelector(".register-form").classList.add("hidden");
  document.querySelector(".login-form").classList.remove("hidden");
}

function closeAuthModal() {
  const loginModal = document.getElementById("login-modal");
  loginModal.classList.add("hidden");

  document.querySelector(".login-form").classList.remove("hidden");
  document.querySelector(".register-form").classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', function() {
      navLinks.classList.toggle('show'); // Agrega o elimina la clase 'show'
    });
  } else {
    console.error("No se encontró el botón del menú hamburguesa o los enlaces de navegación.");
  }
});