// ═══════════════════════════════════════════════════
// AMIGOS DETALHES — config-site.js
// Este arquivo é gerado pelo Painel Admin
// ═══════════════════════════════════════════════════
window.SITE_CONFIG = {
  businessName: "Amigos Detalhes",
  tagline: "Estética Automotiva",
  phone: "",
  phoneDisplay: "",
  instagram: "",
  location: "Atendimento móvel — Fortaleza-CE e região",
  footerCopy: "© 2025 Amigos Detalhes. Todos os direitos reservados.",

  heroBadge: "Estética Automotiva Premium",
  heroTitle: "SEU CARRO MERECE O <span>MELHOR</span>",
  heroSub: "Lavagem, polimento, proteção cerâmica e muito mais — com precisão e cuidado.",
  stat1: "1.000+", stat1Label: "Carros Atendidos",
  stat2: "5★",    stat2Label: "Avaliação Média",
  stat3: "5+",    stat3Label: "Anos de Experiência",

  cores: {
    gold:        "#C9A84C",
    goldLight:   "#E8C96A",
    bgPrimary:   "#0A0A0A",
    bgDark:      "#111111",
    bgCard:      "#1A1A1A",
    textPrimary: "#F5F0E8",
    textGrey:    "#888888",
    accentPromo: "#f97316"
  },

  carSizes: [
    { key:"P", label:"Pequeno", desc:"Hatch / Sedan compacto",  example:"Gol, HB20, Onix, Polo" },
    { key:"M", label:"Médio",   desc:"Sedan / SUV compacto",    example:"Corolla, Compass, T-Cross" },
    { key:"G", label:"Grande",  desc:"SUV / Picape / Van",      example:"Hilux, SW4, Duster, Ducato" }
  ],

  services: [
    {
      categoria:"Lavagem", icone:"💧",
      servicos:[
        { nome:"Lavagem Simples",      desc:"Lavagem externa com shampoo, enxágue e secagem.",                  type:"tabela",  precos:{P:"R$ 40",M:"R$ 50",G:"R$ 65"},  destaque:false },
        { nome:"Lavagem Completa",     desc:"Lavagem externa + aspiração, painel e vidros internos.",           type:"tabela",  precos:{P:"R$ 70",M:"R$ 90",G:"R$ 110"}, destaque:false },
        { nome:"Lavagem a Seco",       desc:"Limpeza sem água com produtos específicos.",                       type:"tabela",  precos:{P:"R$ 60",M:"R$ 75",G:"R$ 95"},  destaque:false },
        { nome:"Higienização Completa",desc:"Limpeza profunda: bancos, tapetes, teto, porta-malas e plásticos.",type:"tabela",  precos:{P:"R$ 150",M:"R$ 180",G:"R$ 220"},destaque:true  }
      ]
    },
    {
      categoria:"Polimento", icone:"✨",
      servicos:[
        { nome:"Polimento Simples", desc:"Remove riscos leves e oxidação superficial.",                type:"tabela", precos:{P:"R$ 180",M:"R$ 220",G:"R$ 280"}, destaque:false },
        { nome:"Polimento Duplo",   desc:"Correção em 2 etapas. Remove riscos médios e water spot.",   type:"tabela", precos:{P:"R$ 280",M:"R$ 350",G:"R$ 430"}, destaque:true  },
        { nome:"Polimento Triplo",  desc:"Correção profunda em 3 etapas para carros pretos.",          type:"tabela", precos:{P:"R$ 400",M:"R$ 500",G:"R$ 620"}, destaque:false },
        { nome:"Espelhamento",      desc:"Polimento + refino + lustro. Acabamento espelhado premium.", type:"tabela", precos:{P:"R$ 550",M:"R$ 700",G:"R$ 880"}, destaque:false }
      ]
    },
    {
      categoria:"Proteção", icone:"🛡️",
      servicos:[
        { nome:"Cristalização",           desc:"Cera de carnaúba ou silicone. Duração de 3 a 6 meses.", type:"tabela", precos:{P:"R$ 120",M:"R$ 150",G:"R$ 190"}, destaque:false },
        { nome:"Vitrificação",            desc:"Vidro líquido. Brilho intenso. Duração de 1 a 2 anos.", type:"tabela", precos:{P:"R$ 350",M:"R$ 430",G:"R$ 550"}, destaque:true  },
        { nome:"Coating Cerâmico Básico", desc:"Proteção cerâmica profissional. Dura de 1 a 2 anos.",  type:"tabela", precos:{P:"R$ 600",M:"R$ 750",G:"R$ 950"}, destaque:false },
        { nome:"Coating Cerâmico Premium",desc:"Alta durabilidade. Proteção de 3 a 5 anos garantida.", type:"tabela", precos:{P:"R$ 1.200",M:"R$ 1.500",G:"R$ 1.900"}, destaque:false }
      ]
    },
    {
      categoria:"Complementos", icone:"⚙️",
      servicos:[
        { nome:"Limpeza de Motor",           desc:"Limpeza e desengordurante do compartimento do motor.", type:"fixo",    preco:"R$ 100", destaque:false },
        { nome:"Restauração de Faróis",      desc:"Remove amarelado e opacidade dos faróis.",             type:"fixo",    preco:"R$ 90",  destaque:false },
        { nome:"Higienização de Ar-Cond.",   desc:"Elimina fungos, bactérias e odores do ar-condicionado.",type:"fixo",   preco:"R$ 80",  destaque:false },
        { nome:"Tratamento Aquapel (Vidros)",desc:"Repelente de água. Melhora visibilidade na chuva.",    type:"fixo",    preco:"R$ 80",  destaque:false },
        { nome:"Insulfilm",                  desc:"Aplicação de película solar. Consulte modelos.",       type:"consulta",                destaque:false }
      ]
    }
  ],

  pacotes: [
    {
      nome:"Pacote Bronze", tier:"Entrada", destaque:false,
      descricao:"Ideal para manutenção mensal do veículo.",
      itens:["Lavagem Completa","Aspiração interna","Limpeza de vidros","Pneus pretinho"],
      precos:{P:"R$ 80",M:"R$ 100",G:"R$ 130"},
      nota:"*Indicado para manutenção periódica"
    },
    {
      nome:"Pacote Prata", tier:"Mais Popular", destaque:true,
      descricao:"O equilíbrio perfeito entre limpeza e proteção.",
      itens:["Tudo do Bronze","Polimento Simples","Cristalização","Limpeza de plásticos"],
      precos:{P:"R$ 220",M:"R$ 280",G:"R$ 360"},
      nota:"*Recomendado para carros coloridos"
    },
    {
      nome:"Pacote Ouro", tier:"Premium", destaque:false,
      descricao:"Tratamento completo para quem quer o máximo.",
      itens:["Tudo do Prata","Polimento Duplo","Vitrificação","Tratamento Aquapel","Higienização interna"],
      precos:{P:"R$ 550",M:"R$ 700",G:"R$ 900"},
      nota:"*Indicado para carros pretos e pinturas especiais"
    }
  ],

  promocoes: [],

  gallery: [
    {url:"", caption:"Polimento Duplo — VW Golf Preto"},
    {url:"", caption:"Coating Cerâmico — BMW X1"},
    {url:"", caption:"Higienização — Toyota Corolla"},
    {url:"", caption:"Espelhamento — Ford Mustang"},
    {url:"", caption:"Lavagem + Cristalização — Jeep"},
    {url:"", caption:"Restauração de Faróis — Fiat Toro"}
  ],

  bookingTitle: "AGENDE SEU<br>SERVIÇO",
  bookingDesc:  "Preencha o formulário e confirmaremos pelo WhatsApp em minutos.",
  feat1Title: "Atendimento Móvel",    feat1Desc: "Vamos até você — em casa ou no trabalho.",
  feat2Title: "Confirmação Rápida",   feat2Desc: "Confirmação pelo WhatsApp em minutos.",
  feat3Title: "Produtos Premium",     feat3Desc: "Usamos apenas produtos profissionais.",

  contactTitle: "VAMOS DEIXAR SEU CARRO <span>IMPECÁVEL</span>"
};
