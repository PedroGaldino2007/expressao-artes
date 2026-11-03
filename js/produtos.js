// ==========================================================
// CATÁLOGO — para adicionar, remover ou editar um produto,
// mexa só neste arquivo. Cada linha é um produto.
//
//   nome : título do card
//   tipo : "lisa", "pronta" ou "sob"  (veja TIPOS em config.js)
//   cor  : cor da camiseta desenhada (só aparece se não houver foto)
//   foto : caminho da foto real. Ex.: "assets/produtos/baby-look.jpg"
//          Deixe "" para usar o desenho da camiseta.
// ==========================================================

const PRODUTOS = [
  // --- Sem estampa ---
  { nome: "Camiseta unissex algodão", tipo: "lisa",   cor: "#1f4fb5", foto: "assets/produtos/teste1.jpg" },
  { nome: "Baby look algodão",        tipo: "lisa",   cor: "#8fb0ec", foto: "assets/produtos/teste1.jpg" },
  { nome: "Oversized algodão",        tipo: "lisa",   cor: "#13213f", foto: "assets/produtos/teste1.jpg" },
  { nome: "Regata unissex",           tipo: "lisa",   cor: "#dfe7f6", foto: "assets/produtos/teste1.jpg" },

  // --- Com estampa (prontas) ---  
  { nome: "Camiseta unissex estampada", tipo: "pronta", cor: "#1f4fb5", foto: "assets/produtos/teste2.jpg" },
  { nome: "Baby look estampada",        tipo: "pronta", cor: "#dfe7f6", foto: "assets/produtos/teste2.jpg" },
  { nome: "Dry fit estampada",          tipo: "pronta", cor: "#163a8a", foto: "assets/produtos/teste2.jpg" },
  { nome: "Infantil estampada",         tipo: "pronta", cor: "#8fb0ec", foto: "assets/produtos/teste2.jpg" },

  // --- Personalizadas sob encomenda ---
  { nome: "Camiseta personalizada", tipo: "sob", cor: "#dfe7f6", foto: "assets/produtos/teste3.jpg" },
  { nome: "Oversized personalizada", tipo: "sob", cor: "#1f4fb5", foto: "assets/produtos/teste3.jpg" },
  { nome: "Polo personalizada",      tipo: "sob", cor: "#163a8a", foto: "assets/produtos/teste3.jpg" },
  { nome: "Sublimação total",        tipo: "sob", cor: "#8fb0ec", foto: "assets/produtos/teste3.jpg" },
];
