// js/data.js

const initialData = [
  {
    id: "dona-maria",
    nome: "Dona Maria",
    categoria: "Padaria Artesanal",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999991",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
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
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
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
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
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
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    historia: "Todos os dias Juca está na praça oferecendo pipocas doces e salgadas, com coberturas, cores e enfeites especiais.",
    estatisticas: { acessos: 620, cliquesWhatsapp: 140, favoritos: 110 },
    itens: [
      { nome: "Pipoca Salgada", preco: 8.00 },
      { nome: "Pipoca Doce Colorida", preco: 10.00 },
      { nome: "Pipoca Gourmet c/ Chocolate", preco: 15.00 }
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