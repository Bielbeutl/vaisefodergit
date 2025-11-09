const odsData = [
  { id: 1, title: "Erradicação da Pobreza", desc: "Acabar com a pobreza em todas as suas formas, em todos os lugares.", color: "#e5243b" },
  { id: 2, title: "Fome Zero e Agricultura Sustentável", desc: "Acabar com a fome e promover a agricultura sustentável.", color: "#dda63a" },
  { id: 3, title: "Saúde e Bem-Estar", desc: "Garantir uma vida saudável e promover o bem-estar para todos.", color: "#4c9f38" },
  { id: 4, title: "Educação de Qualidade", desc: "Garantir educação inclusiva e de qualidade para todos.", color: "#c5192d" },
  { id: 5, title: "Igualdade de Gênero", desc: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.", color: "#ff3a21" },
  { id: 6, title: "Água Potável e Saneamento", desc: "Garantir disponibilidade e gestão sustentável da água.", color: "#26bde2" },
  { id: 7, title: "Energia Limpa e Acessível", desc: "Garantir acesso à energia acessível e sustentável.", color: "#fcc30b" },
  { id: 8, title: "Trabalho Decente e Crescimento Econômico", desc: "Promover crescimento econômico sustentado e trabalho decente.", color: "#a21942" },
  { id: 9, title: "Indústria, Inovação e Infraestrutura", desc: "Construir infraestrutura resiliente e promover inovação.", color: "#fd6925" },
  { id: 10, title: "Redução das Desigualdades", desc: "Reduzir a desigualdade dentro e entre os países.", color: "#dd1367" },
  { id: 11, title: "Cidades e Comunidades Sustentáveis", desc: "Tornar as cidades inclusivas e sustentáveis.", color: "#fd9d24" },
  { id: 12, title: "Consumo e Produção Responsáveis", desc: "Assegurar padrões de produção e consumo sustentáveis.", color: "#bf8b2e" },
  { id: 13, title: "Ação Contra a Mudança Global do Clima", desc: "Tomar medidas urgentes contra a mudança climática.", color: "#3f7e44" },
  { id: 14, title: "Vida na Água", desc: "Conservar e usar de forma sustentável os oceanos e recursos marinhos.", color: "#0a97d9" },
  { id: 15, title: "Vida Terrestre", desc: "Proteger e restaurar os ecossistemas terrestres.", color: "#56c02b" },
  { id: 16, title: "Paz, Justiça e Instituições Eficazes", desc: "Promover sociedades pacíficas e instituições eficazes.", color: "#00689d" },
  { id: 17, title: "Parcerias e Meios de Implementação", desc: "Reforçar os meios de implementação e revitalizar parcerias globais.", color: "#19486a" },
];

const container = document.getElementById("ods-container");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close");

function renderODS(list) {
  container.innerHTML = "";
  list.forEach(ods => {
    const card = document.createElement("div");
    card.classList.add("ods-card");
    card.style.background = ods.color;
    card.innerHTML = `
      <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${ods.id}.jpg" alt="ODS ${ods.id}">
      <h3>ODS ${ods.id}</h3>
      <p>${ods.title}</p>
    `;
    card.addEventListener("click", () => showModal(ods));
    container.appendChild(card);
  });
}

function showModal(ods) {
  modalTitle.textContent = `${ods.id}. ${ods.title}`;
  modalDesc.textContent = ods.desc;
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = odsData.filter(ods => ods.title.toLowerCase().includes(term) || ods.desc.toLowerCase().includes(term));
  renderODS(filtered);
});

renderODS(odsData);
