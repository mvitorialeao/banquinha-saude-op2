const days = [
  {week: 1, date: "14/09", weekday: "Segunda-feira", title: "Abertura das Banquinhas", bias: "1/4", medicine: "2/4"},
  {week: 1, date: "16/09", weekday: "Quarta-feira", title: "Consolidação da Escuta Ativa", bias: "1/4", medicine: "1/4"},
  {week: 1, date: "18/09", weekday: "Sexta-feira", title: "Sexta da Saúde Popular", bias: "2/4", medicine: "1/4"},
  {week: 2, date: "21/09", weekday: "Segunda-feira", title: "Saúde no Centro", bias: "2/4", medicine: "2/4"},
  {week: 2, date: "23/09", weekday: "Quarta-feira", title: "Dia do Diálogo", bias: "1/4", medicine: "2/4"},
  {week: 2, date: "25/09", weekday: "Sexta-feira", title: "Saúde e SUS", bias: "2/4", medicine: "2/4"},
  {week: 3, date: "28/09", weekday: "Segunda-feira", title: "Reta Final", bias: "2/4", medicine: "1/4"},
  {week: 3, date: "30/09", weekday: "Quarta-feira", title: "Última Semana", bias: "1/4", medicine: "2/4"},
  {week: 3, date: "02/10", weekday: "Sexta-feira", title: "Encerramento da Mobilização", bias: "3/4", medicine: "2/4"}
];

const calendarGrid = document.getElementById("calendarGrid");
const tabs = document.querySelectorAll(".tab");

function renderCalendar(filter = "all") {
  const filtered = filter === "all" ? days : days.filter(day => String(day.week) === filter);

  calendarGrid.innerHTML = filtered.map(day => `
    <article class="day-card">
      <div class="day-top">
        <span>Semana ${day.week} · ${day.weekday}</span>
        <span class="date-chip">${day.date}</span>
      </div>
      <h4>${day.title}</h4>
      <span style="font-size:13px;color:#888">11h30 às 14h00</span>
      <div class="slot"><span>● Bias</span><b>${day.bias} <em>voluntários</em></b></div>
      <div class="slot"><span>● Medicina</span><b>${day.medicine} <em>voluntários</em></b></div>
      <button class="day-button" onclick="selectDay('${day.date}')">Participar deste dia →</button>
    </article>
  `).join("");
}

function selectDay(date) {
  document.querySelector("#participar").scrollIntoView({behavior:"smooth"});
  setTimeout(() => {
    alert(`Você selecionou o dia ${date}. Substitua este alerta pelo formulário de cadastro.`);
  }, 500);
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderCalendar(tab.dataset.week);
  });
});

const scheduleGrid = document.getElementById("scheduleGrid");
scheduleGrid.innerHTML = days.map(day => `
  <article class="schedule-card">
    <span class="date">${day.date} · ${day.weekday}</span>
    <h3>${day.title}</h3>
    <div class="schedule-row"><span>Bias</span><b>${day.bias}</b></div>
    <div class="schedule-row"><span>Medicina</span><b>${day.medicine}</b></div>
  </article>
`).join("");

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderCalendar();
