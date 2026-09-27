const STORAGE_KEY = 'freecom_anunciantes';

const initialData = [
  {
    id: "dona-maria",
    nome: "Dona Maria",
    categoria: "Padaria Artesanal",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999991",
    foto: "imagens/maria.avif",
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
    foto: "imagens/paulo.webp",
    historia: "O produto do Seu Paulo é de altíssima qualidade, puro, com aquele gosto de roça que todo mundo procura. Mas o alcance dele sempre foi limitado: ou as pessoas passam na banquinha dele na beira da estrada, ou ele depende do boca a boca, de quem já o conhece. Enquanto isso, na cidade ao lado, tem gente comprando produto industrializado sem saber que o Seu Paulo tem o melhor produto colonial a poucos quilômetros dali.",
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
    foto: "imagens/ismael.jpg",
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
    foto: "imagens/juca.webp",
    historia: "Todos os dias Juca está na praça oferecendo pipocas doces e salgadas, com coberturas, cores e enfeites especiais.",
    estatisticas: { acessos: 620, cliquesWhatsapp: 140, favoritos: 110 },
    itens: [
      { nome: "Pipoca Salgada", preco: 8.00 },
      { nome: "Pipoca Doce Colorida", preco: 10.00 },
      { nome: "Pipoca Gourmet c/ Chocolate", preco: 15.00 }
    ]
  },
  {
    id: "jason-picadinho",
    nome: "Jason",
    categoria: "Alimentação",
    tipo: "produto",
    cidade: "Igrejinha",
    whatsapp: "5551999999999",
    foto: "imagens/jason.jpg",
    historia: "Existe muitas histórias mal contadas do nosso querido Jason, tudo calúnia; a verdade é que Jason faz o melhor picadinho do mundo.",
    estatisticas: { acessos: 620, cliquesWhatsapp: 140, favoritos: 110 },
    itens: [
      { nome: "Picadinho de Lingua", preco: 28.00 },
      { nome: "Picadinho de coração e fígado", preco: 30.00 },
      { nome: "Picadinho de mão e pés", preco: 25.00 }
    ]
  },
  {
    id: "jose-pintor",
    nome: "José Pintor",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999901",
    foto: "imagens/pintor.jfif",
    historia: "José trabalha com pintura residencial e comercial, ajudando a transformar ambientes com acabamento cuidadoso e atenção aos detalhes.",
    estatisticas: { acessos: 198, cliquesWhatsapp: 54, favoritos: 22 },
    itens: [
      { nome: "Pintura de Quarto", preco: 250.00 },
      { nome: "Pintura de Sala", preco: 350.00 },
      { nome: "Pintura de Fachada", preco: 800.00 }
    ]
  },
  {
    id: "vera-diarista",
    nome: "Vera Diarista",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999902",
    foto: "imagens/diarista.jpg",
    historia: "Vera oferece serviços de limpeza residencial com capricho, organização e confiança para deixar cada ambiente pronto para a rotina.",
    estatisticas: { acessos: 245, cliquesWhatsapp: 68, favoritos: 29 },
    itens: [
      { nome: "Limpeza Residencial", preco: 180.00 },
      { nome: "Limpeza Pós-Obra", preco: 350.00 },
      { nome: "Organização de Ambientes", preco: 150.00 }
    ]
  },
  {
    id: "simone-decoradora",
    nome: "Simone Decoradora",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999903",
    foto: "imagens/decoradora.jfif",
    historia: "Simone cria decorações personalizadas para festas e celebrações, cuidando dos detalhes para tornar cada ocasião especial.",
    estatisticas: { acessos: 310, cliquesWhatsapp: 82, favoritos: 37 },
    itens: [
      { nome: "Decoração de Aniversário", preco: 450.00 },
      { nome: "Decoração de Chá de Bebê", preco: 500.00 },
      { nome: "Kit Mesa Decorada", preco: 280.00 }
    ]
  },
  {
    id: "vitor-jardineiro",
    nome: "Vitor Jardineiro",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999904",
    foto: "imagens/jardineiro.jfif",
    historia: "Vitor cuida de jardins e áreas verdes com podas, manutenção e orientação para manter cada espaço bonito e saudável.",
    estatisticas: { acessos: 176, cliquesWhatsapp: 47, favoritos: 19 },
    itens: [
      { nome: "Manutenção de Jardim", preco: 120.00 },
      { nome: "Poda de Árvores", preco: 220.00 },
      { nome: "Plantio e Paisagismo", preco: 300.00 }
    ]
  },
  {
    id: "fabiano-mecanico",
    nome: "Fabiano Mecânico",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999905",
    foto: "imagens/mecanico.jfif",
    historia: "Fabiano oferece manutenção automotiva com diagnóstico cuidadoso e experiência para manter o carro seguro e em bom funcionamento.",
    estatisticas: { acessos: 289, cliquesWhatsapp: 76, favoritos: 34 },
    itens: [
      { nome: "Troca de Óleo", preco: 120.00 },
      { nome: "Revisão Preventiva", preco: 250.00 },
      { nome: "Diagnóstico do Motor", preco: 100.00 }
    ]
  },
  {
    id: "joao-seguranca-particular",
    nome: "João - Segurança Particular",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999906",
      foto: "imagens/seguranca.jfif",
    historia: "João oferece serviços de segurança particular com atenção, discrição e experiência para acompanhar pessoas e proteger eventos.",
    estatisticas: { acessos: 164, cliquesWhatsapp: 42, favoritos: 17 },
    itens: [
      { nome: "Acompanhamento de Segurança", preco: 300.00 },
      { nome: "Segurança para Eventos", preco: 500.00 },
      { nome: "Ronda Particular", preco: 250.00 }
    ]
  },
  {
    id: "naomi-professora-particular",
    nome: "Naomi - Professora Particular",
    categoria: "Serviços",
    tipo: "servico",
    cidade: "Igrejinha",
    whatsapp: "5551999999907",
    foto: "imagens/professora.png",
    historia: "Naomi oferece ensino particular com dedicação, paciência e metodologia eficaz para ajudar os alunos a alcançarem seus objetivos.",
    estatisticas: { acessos: 226, cliquesWhatsapp: 61, favoritos: 25 },
    itens: [
      { nome: "Aulas de Matemática", preco: 100.00 },
      { nome: "Aulas de Português", preco: 100.00 },
      { nome: "Letramento e alfabetização", preco: 150.00 }
    ]
  }
];

/**
 * Inicializa e sincroniza os dados no localStorage
 */
function initStorage() {
  const storedValue = localStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return;
  }

  try {
    const storedData = JSON.parse(storedValue);
    if (!Array.isArray(storedData)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return;
    }

    const missingItems = initialData.filter(defaultItem =>
      !storedData.some(item => item.id === defaultItem.id)
    );

    let updatedStoredData = false;
    storedData.forEach(storedItem => {
      const defaultItem = initialData.find(item => item.id === storedItem.id);
      const isLocalImage = typeof storedItem.foto === 'string' && storedItem.foto.startsWith('imagens/');

      if (defaultItem && isLocalImage && storedItem.foto !== defaultItem.foto) {
        storedItem.foto = defaultItem.foto;
        updatedStoredData = true;
      }
    });

    if (missingItems.length > 0 || updatedStoredData) {
      const mergedData = [...storedData, ...missingItems];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedData));
    }
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  }
}

/**
 * Retorna a lista completa de anunciantes atualizada
 */
function getAnunciantes() {
  initStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

/**
 * Persiste alterações no localStorage
 */
function saveAnunciantes(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
// Inicialização automática ao carregar o arquivo JS
initStorage();