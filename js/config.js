// ==========================================================
// CONFIGURAÇÕES DA LOJA — o que muda com mais frequência
// ==========================================================

const CONFIG = {
  // Número do WhatsApp: 55 + DDD + número, só dígitos. Ex.: "5561999998888"
  whatsapp: "5561994658588",

  // Início da mensagem enviada quando o cliente clica em "Pedir orçamento"
  mensagemOrcamento: "Olá! Vi o site da Expressão Artes e quero um orçamento: ",

  // Quantos produtos aparecem por página do catálogo
  produtosPorPagina: 12,
};

// Tipos de produto: chave usada em produtos.js → texto exibido no site.
// "todos" é o filtro que mostra tudo; não use "todos" em nenhum produto.
const TIPOS = {
  todos: "Todos",
  lisa: "Sem estampa",
  pronta: "Com estampa",
  sob: "Personalizada sob encomenda",
};
