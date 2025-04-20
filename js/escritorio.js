
document.addEventListener('DOMContentLoaded', function() {
  // Obtiene el nombre del usuario actual y lo muestra en la página
  const userNameElement = document.getElementById('user-name');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // El usuario ha iniciado sesión
      const displayName = user.displayName;

      if (displayName) {
        // Muestra el nombre del usuario
        userNameElement.textContent = displayName;
      } else {
        // El usuario no tiene un nombre de perfil
        userNameElement.textContent = "Usuario"; // O un valor por defecto
      }
    } else {
      // El usuario no ha iniciado sesión
      // Redirige al usuario a la página de inicio de sesión
      window.location.href = 'index.html'; // Ajusta la ruta si es necesario
    }
  });

  // Agrega la funcionalidad para resaltar el enlace activo en la barra lateral
  const links = document.querySelectorAll(".sidebar li");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});



// Referencias a elementos del DOM
const minimizeBtn = document.getElementById("minimize-chat-btn");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const userMsgImput = document.getElementById("chat-imput");

minimizeBtn.addEventListener("click", () => {
  const isHidden = chatMessages.classList.contains("hidden");

  chatMessages.classList.toggle("hidden");
  chatForm.classList.toggle("hidden");

  minimizeBtn.innerHTML = isHidden ? "&#x2013;" : "+";
});

// ✉️ Enviar mensaje al chat
async function sendMessage(e) {
  e.preventDefault();

  const userMsgInput = document.getElementById("chat-input");
  const message = userMsgInput.value.trim();

  if (!message) return;

  // Mostrar mensaje del usuario
  const chatBox = document.getElementById("chat-messages");
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  userMsgInput.value = ""; // Limpiar input
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
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    aiDiv.innerHTML = `<p>⚠️ Error al conectar con el servidor.</p>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Enviar al presionar Enter o botón
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMessage(e); // ✅ ahora sí se pasa el evento correctamente
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleChatBtn = document.getElementById("chat-btn");
  const chatContainer = document.getElementById("chat-innovis");

  toggleChatBtn.addEventListener("click", () => {
    chatContainer.classList.toggle("hidden");
  });
});

// Movimiento del chat
const chat = document.getElementById("chat-innovis");
const header = document.getElementById("chat-header");
let offsetX = 0, offsetY = 0, isDragging = false;

header.addEventListener("mousedown", function(e) {
  isDragging = true;
  offsetX = e.clientX - chat.getBoundingClientRect().left;
  offsetY = e.clientY - chat.getBoundingClientRect().top;
});

document.addEventListener("mouseup", () => isDragging = false);

document.addEventListener("mousemove", function(e) {
  if (!isDragging) return;
  chat.style.left = e.clientX - offsetX + "px";
  chat.style.top = e.clientY - offsetY + "px";
  chat.style.right = "auto";
  chat.style.bottom = "auto";
});

document.addEventListener('DOMContentLoaded', () => {
  const calendarContainer = document.getElementById('calendar-container');
  const calendarGrid = document.getElementById('calendar-grid');
  const monthYearDisplay = document.getElementById('month-year');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const eventForm = document.getElementById('event-form');
  const eventList = document.getElementById('event-list');
  let currentDate = new Date();
  let selectedDate = null;
  let events = {};

  // 📅 Renderizar el calendario
  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarGrid.innerHTML = '';
    monthYearDisplay.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div class="empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const thisDate = `${year}-${month + 1}-${day}`;
      const today = new Date();
      const isToday = today.toDateString() === new Date(year, month, day).toDateString();

      const div = document.createElement('div');
      div.textContent = day;
      div.dataset.date = thisDate;
      if (isToday) div.classList.add('today');

      if (events[thisDate]) {
        const dot = document.createElement('span');
        dot.textContent = '•';
        dot.style.color = '#007aff';
        dot.style.position = 'absolute';
        dot.style.bottom = '8px';
        dot.style.right = '10px';
        div.appendChild(dot);
      }

      div.addEventListener('click', () => {
        selectedDate = thisDate;
        showEvents(thisDate);
      });

      calendarGrid.appendChild(div);
    }
  }

  // ⬅️ ➡️ Cambiar de mes
  prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  // 📝 Mostrar eventos
  function showEvents(date) {
    eventList.innerHTML = '';
    const dayEvents = events[date] || [];
    dayEvents.forEach(e => {
      const li = document.createElement('li');
      li.textContent = `${e.title} - ${e.description}`;
      eventList.appendChild(li);
    });
  }

  // ➕ Añadir evento
  eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = eventForm.title.value;
    const description = eventForm.description.value;
    if (!selectedDate) return alert("Selecciona un día en el calendario");

    if (!events[selectedDate]) events[selectedDate] = [];
    events[selectedDate].push({ title, description });

    eventForm.reset();
    showEvents(selectedDate);
    renderCalendar(currentDate); // volver a mostrar puntos
  });

  renderCalendar(currentDate);
});

// 🟦 Mostrar/Ocultar calendario como el chat
const calendarBtn = document.getElementById('calendar-btn');
const calendarSection = document.getElementById('calendar-container');
const mainPanel = document.getElementById('main-panel');
const chatInnovis = document.getElementById('chat-innovis');

calendarBtn.addEventListener('click', () => {
  const isHidden = calendarSection.classList.contains('hidden');

  if (isHidden) {
    // Mostrar calendario y ocultar lo demás
    mainPanel.classList.add('hidden');
    chatInnovis.classList.add('hidden');
    calendarSection.classList.remove('hidden');
  } else {
    // Volver al panel principal
    calendarSection.classList.add('hidden');
    mainPanel.classList.remove('hidden');
  }
});

