// ==========================================================
// LÓGICA DO SITE
// Depende de CONFIG e TIPOS (config.js) e PRODUTOS (produtos.js).
// Ordem do arquivo: WhatsApp → camiseta → cards → filtros → início
// ==========================================================

// ---------- WhatsApp ----------

// Monta o link wa.me com a mensagem já preenchida.
function linkWhatsapp(mensagem) {
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensagem);
}

// Todo <a class="wa" data-msg="..."> vira link de WhatsApp.
// Chamada de novo sempre que os cards são redesenhados.
function ativarLinksWhatsapp() {
  document.querySelectorAll("a.wa").forEach(function (link) {
    link.href = linkWhatsapp(link.dataset.msg);
    link.target = "_blank";
    link.rel = "noopener";
  });
}

// ---------- Desenho da camiseta (usado enquanto não há foto real) ----------

function desenharCamiseta(cor, tipo) {
  // Em cores claras, o desenho interno usa azul; nas escuras, usa branco.
  var corClara = /^#(df|8f)/.test(cor);
  var corDesenho = corClara ? "#1f4fb5" : "#ffffff";
  var estampa = "";

  if (tipo === "pronta") {            // círculo com estrela
    estampa =
      '<circle cx="100" cy="100" r="22" fill="' + corDesenho + '"/>' +
      '<path d="M100 78l9 17 19 3-14 13 4 19-18-9-18 9 4-19-14-13 19-3z" ' +
      'fill="' + (corClara ? "#fff" : "#8fb0ec") + '" opacity=".9"/>';
  } else if (tipo === "sob") {        // quadro tracejado "sua arte"
    estampa =
      '<rect x="72" y="76" width="56" height="50" rx="4" fill="none" ' +
      'stroke="' + corDesenho + '" stroke-width="3" stroke-dasharray="7 5"/>' +
      '<text x="100" y="106" text-anchor="middle" font-size="12" font-weight="600" ' +
      'fill="' + corDesenho + '" font-family="Poppins,sans-serif">sua arte</text>';
  }

  return (
    '<svg viewBox="0 0 200 200" role="img" aria-label="Ilustração de camiseta">' +
    '<path d="M70 20 40 32 8 70l28 22 16-12v100h96V80l16 12 28-22-32-38-30-12q-30 24-60 0Z" ' +
    'fill="' + cor + '" stroke="#1f4fb5" stroke-opacity=".35" stroke-width="2" stroke-linejoin="round"/>' +
    estampa + "</svg>"
  );
}

// ---------- Cards do catálogo ----------

function criarCard(produto) {
  var mensagem = CONFIG.mensagemOrcamento + produto.nome + " (" + TIPOS[produto.tipo].toLowerCase() + ").";
  var temFoto = produto.foto !== "";
  var imagem = temFoto
    ? '<img src="' + produto.foto + '" alt="' + produto.nome + '">'
    : desenharCamiseta(produto.cor, produto.tipo);

  return (
    '<article class="card">' +
      '<div class="card-imagem' + (temFoto ? " card-foto" : "") + '">' + imagem + "</div>" +
      '<div class="card-info">' +
        "<h3>" + produto.nome + "</h3>" +
        '<span class="card-tipo">' + TIPOS[produto.tipo] + "</span>" +
        '<span class="card-preco">Consulte valores</span>' +
        '<a class="botao botao-pequeno wa" href="#" data-msg="' + mensagem + '">Pedir orçamento</a>' +
      "</div>" +
    "</article>"
  );
}

// Redesenha a grade mostrando só os produtos do tipo escolhido.
function mostrarProdutos(filtro) {
  var html = "";
  PRODUTOS.forEach(function (produto) {
    if (filtro === "todos" || produto.tipo === filtro) {
      html += criarCard(produto);
    }
  });
  document.getElementById("grade-produtos").innerHTML = html;
  ativarLinksWhatsapp();
}

// ---------- Botões de filtro ----------

function criarFiltros() {
  var area = document.getElementById("filtros");

  Object.keys(TIPOS).forEach(function (chave) {
    var botao = document.createElement("button");
    botao.className = "filtro";
    botao.textContent = TIPOS[chave];
    botao.setAttribute("aria-pressed", chave === "todos");

    botao.onclick = function () {
      area.querySelectorAll(".filtro").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      botao.setAttribute("aria-pressed", "true");
      mostrarProdutos(chave);
    };

    area.appendChild(botao);
  });
}

// ---------- Início ----------

function iniciar() {
  document.getElementById("hero-arte").innerHTML = '<img src="assets/hero.jpg" alt="Camisetas Expressão Artes">';
  criarFiltros();
  mostrarProdutos("todos");
  ativarLinksWhatsapp();
}

iniciar();
