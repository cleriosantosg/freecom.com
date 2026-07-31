// js/data.js

const initialData = [
  {
    id: "dona-maria",
    nome: "Dona Maria",
    categoria: "Padaria Artesanal",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999991",
    foto: "imagens/Maria.avif",
    historia: "Dona Maria produz cucas seguindo receitas familiares aprendidas com sua avó. Sua produção começou pequena e cresceu através das encomendas da comunidade.",
    estatisticas: { acessos: 342, cliquesWhatsapp: 89, favoritos: 45 },
    itens: [
      { nome: "Cuca de Uva", preco: 35.00 },
      { nome: "Cuca de Banana", preco: 30.00 },
      { nome: "Cuca de Chocolate", preco: 38.00 },
      { nome: "Pães Caseiros", preco: 15.00 },
      { nome: "Roscas Artesanais", preco: 18.00 }
    ]
  },
  {
    id: "seu-paulo",
    nome: "Seu Paulo",
    categoria: "Produtos Coloniais",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999992",
    foto: "imagens/Paulo.webp",
    historia: "Seu Paulo trabalha valorizando agricultores locais, oferecendo produtos frescos e tradicionais da região.",
    estatisticas: { acessos: 512, cliquesWhatsapp: 120, favoritos: 78 },
    itens: [
      { nome: "Queijo Colonial", preco: 28.00 },
      { nome: "Linguiça Colonial", preco: 32.00 },
      { nome: "Mel Orgânico (500g)", preco: 25.00 },
      { nome: "Rapadura Caseira", preco: 10.00 },
      { nome: "Cachaça Artesanal", preco: 45.00 }
    ]
  },
  {
    id: "ismael-barbearia",
    nome: "Ismael — Barbearia",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999993",
    foto: "imagens/Ismael.jpg",
    historia: "Ismael possui mais de dez anos de experiência como barbeiro, oferecendo cortes modernos e atendimento personalizado.",
    estatisticas: { acessos: 280, cliquesWhatsapp: 95, favoritos: 31 },
    itens: [
      { nome: "Corte Masculino", preco: 40.00 },
      { nome: "Barba Completa", preco: 30.00 },
      { nome: "Degradê + Barba", preco: 60.00 },
      { nome: "Corte Infantil", preco: 35.00 }
    ]
  },
  {
    id: "juca-pipocas",
    nome: "Juca da Carrocinha",
    categoria: "Alimentação",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999994",
    foto: "imagens/Juca.webp",
    historia: "Todos os dias Juca está na praça oferecendo pipocas doces e salgadas, com coberturas, cores e enfeites especiais.",
    estatisticas: { acessos: 620, cliquesWhatsapp: 140, favoritos: 110 },
    itens: [
      { nome: "Pipoca Salgada", preco: 8.00 },
      { nome: "Pipoca Doce Colorida", preco: 10.00 },
      { nome: "Pipoca Gourmet c/ Chocolate", preco: 15.00 }
      {
    id: "jason-picadinho",
    nome: "Jason",
    categoria: "Alimentação",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999999",
    foto: "imagens/Jason.jpg",
    historia: "Existe muitas histórias mal contadas do nosso querido Jason, tudo calúnia; a verdade é que Jason faz o melhor picadinho do mundo.",
    estatisticas: { acessos: 620, cliquesWhatsapp: 140, favoritos: 110 },
    itens: [
      { nome: "Picadinho de Lingua", preco: 28.00 },
      { nome: "Picadinho de coração e fígado", preco: 30.00 },
      { nome: "Picadinho de mão e pés", preco: 25.00 }
    ]
  }
];

// Inicializar dados no localStorage
function initStorage() {
  if (!localStorage.getItem('freecom_anunciantes')) {
    localStorage.setItem('freecom_anunciantes', JSON.stringify(initialData));
  }
}

function getAnunciantes() {
  initStorage();
  return JSON.parse(localStorage.getItem('freecom_anunciantes'));
}

function saveAnunciantes(data) {
  localStorage.setItem('freecom_anunciantes', JSON.stringify(data));
}
