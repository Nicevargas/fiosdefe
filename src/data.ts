/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ArtisanStory, UpcyclingStep, TimelineMilestone } from "./types";

// Precise Google Usercontent images provided by the user, alongside premium Fallbacks
export const BRAND_IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4q6fxtegE6jqiDu_VahItjr9_9XKaiRRhMt0GSLooeaODFkJFhShHJLF17olckeulinbt9qLQfX-TnYJVUjUsf4xbxjOzXaFgQfcJfcyBfD8ZrHla-xqX23KhY9x7pmw1_VdiA-Y8o-Ef9jsjXX9JTwb6kcnkYCYtv0776tmiYQG1qp0jTO_9ohVdtekL1-ot6lrnWw5w5-zwJfwmcMhMMz_4m8ctEXLbA7zNYqFhiSaHwgcBvwcUTk27AQe_n9C6NxRl-tESrNc",
  favicon: "https://github.com/Nicevargas/fiosdefe/blob/main/src/assets/images/icone_sf.png?raw=true",
  denimBagHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8eogoN_XWCGh4e583W8Ij7wsljSqi8x5dJCUEupGL9lFKeE58CbthyMnBpD1uV4ARNH_VVr-F2zPT2LrXdVCgLA6zUTlgvMWCv-GJhwEYcI4FudGQ-ikVKy65RSHl_k3eKDF7mjsAHQSTOwEdTanLu6LgBk-KCCDv-wQvK6ht-nR27o5LOk_JhF13Xrzpox0AhtbJQyU6KMbhMFngDTwRrUKc4iVWLRbp44hDD-LXjfWsQAH5LxCluFlQPOgn2Og8IA9-1_tyXKw",
  socialIntegration: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJxiRXdgZJIuIU4nOisCXNtPu1UI0OxzcaKwYkikYaANoO8KYPHNXveUEPCqMOQAQ1XU6z_gCKKFTfmB94JIJ9aT2E2R4RT5MBUicUsxihrzDEjmFnxoUaWGBG00BR0SeGxJK0I-qs-lmvkwMpR14hWqRgFtwzLDfn96P7nzdl5iiJ3Z-47-c5i4Mh67ysz2SSkIkzY96ObHJ2hqcrBvxh-SvkznSWqLjcspCa9YlfjliqEbGyllo1g-CiyymiPmMyFOAIcqMZ_AA",
  fashionModelJeans: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiLAlcn7iFzRxA3nkkybjykbux3YO2o8no6ce44jWb8yLjtPgdEs3GAakzQfVZhlpW8L3SbyCCDiF5hDdWj6w4gNe0IMhkCxcgQRKdfKuDyXgMLMQZzxBcPZuT8rVX1Oxpjb-0_7ywiIOCwWATzmXEsQSiVu7vgJ_Uf3iYxDhnFfiMRNMMdQTd5m61FIJjqMjU2MkFCt8QlW3TJ2IjQBiQFe1a-13xBxkSutQoFaNrZBQPeRgmCnH4x_ScHl0Z4OVqdedYvCS2tXQ",
  tailoringSetup: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyXbViPSsbaG2mdSPgS4WgJZAJbp_v8V6YWA1tg0MNFVK0DXYoFURfIkK5wT0CDw5yM6p06ErRvj7TH-YF92hJUQIP2ne4AWCR9awWJpJlOip8Do08zBW6YPLhFP9Lh0Fvnn1vcCWzOEM_Nn6LJirg-JCarS7WzKTlifaOTeCVUUaqOO40i5CyNqU1j1RV2i3AJa1V412zDmIAoCrEsrwHwjIjbriWwLH-SRuUrlGNLdxy38n0aE0De8jGT_PNCozH5TWF0ngcMls",
  smilingArtisans: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFdKL3W2_rjlEr-828-PqrowQpzsHhIPD94aeV8ZGkwcbxg4hBs7UD-BBwWAmUEX9sPuGracs5OJHm4jBcVgxS48g1wq_Ri0vYs3dYPZAPh0DjKniV1jBgBdEMZUIL1UxdFYw-fr3kim57A6xDbwa4JN8eVV6g3guT47ChhwoKBPSVbFH2D6OguTeghVGIB5NNVLO8kSAed5elc03mniKsUd639hCTjPurBHbLRKFAYiH7f3Zt0ieLx1PKvas1U4Oxn6KJR_qwqpk",
  denimFabricStack: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQw1GWtz1ZOJJ8Am3gybKD7hueZer_uCtBQSL7rnOGfx-Osjn_8JAQbXubS7eQFgyZSaz78LHWvC5ttM6CfBrLmwZ1lrk16H3iv88UKDNgqHErqSfZ2TScyfi4zyQ673nsOKTNBQlAcZo49gU9i1-yjyAMEItqbZkfXRSkFUdWcUDAEP5kvBaG0SZucDPvcSEKCvuRg2FkogvHeHaa2v4gXf2AKh4ihtoosc2cyWwek_TxjSyeHE_9Yjr81ZHVgKYxOwv9oM34ZJ4",
  creativeStudioSketch: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8yOMCeWT1YJgndSBmZFl8nI_z9TjbEgOBevHuWPWObSWPQRj_PCZihn4Fgow7d_mY0Ql6eJw0Rk6qB9KBJ8pxTsAh0Xdjhe4d_Naq0Ki5SKec91jRMZvjeN_pswN1n7j25qIOwkdsnbzT9Iskcbv0cjhmYuhdNczH_cOUusAM5uUQnqE4LabFDMsPjv4MPBYY9PfA2npU1X1v0JpnSiLm8ai0iSzDdCl9IhJXZ6sOd0hRjsnjn83JAagcYBdIuZbwsW7ZC5bbOtw",
  patchworkJacket: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_b8484XoW0SqHUKD_8goywsf31Kd7iPUfBFtxOOfhop_THH605mxHYdvIiEYBRteOpyY3n_I0KS-vO9cJzV2TiubWqz1hbeBXIAcPXy8I2wbbzOtzpyjfVLyskqQoZIRoNRdV6FfzcZ0nYMykDVMqDMIacqVkHDb_Iqeu1C3xqP0y88-BCL-ar6LLJavFMiTk7koDtLCL6bL7hYastu5z0blqo6BuIilVtQ0cS7NTaLHPIFOnpZUdPy1ymhZli75L55FLuP5Fvhw",
  supportGroupSharing: "https://lh3.googleusercontent.com/aida-public/AB6AXuCec8kxhu_gFZWdi27_iqrWypz0lgsm9FD-6hY6nMGWHWUNyvoCkUhTmQiXcxrxbeCA2ps6wZmJHAEataPIwV2q2b_ng1jFWZEXm0tzeYcgk_2bTSawfxJuh5bkcgINzr7s0N5WFpAzGvH4FNOpIiVtKwn8FRin7DwYajmv2Efce5FstUc9O8V61R5aeW0QGL-t49gPnZ4sKs-3I5tCGcNvIk9dowJma_DVJwRqJwVEyGy9KR8rSRaOLqDjlv9epN6S1HJiebsyInw",
  workshopHandsOn: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk_dq2YjnkmqOroOCS62HUBI1lj4B1cxp3v1ExoefmifYR8vOIMt3a6l-Q49PIEs5-vkZBA-Xl-UVXjN00R6FDZAzGgsKisbGl90zyRCJwR2DUtuDFBzco_XHgdlQgQxjcOf4szNYZ7XrcQ0arQw_7PXsAmwzYfQOO01oF8qEtX1-RDxJdbFcHQqQtAVFh3xqcQ1CS0C0ugS05hVyOM9djvNfaqEukxQHUHYx4VtxQogvVQJle1RHKCcOxjUQv6rMs_V39UAR0BI4",
  handbagLayoutDetail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQo-7hgXXHnXLrHzBFoZHXAuHgMsu47VjIDogUNKmWCj3KQI6TTs5uqBvniIA1KVdUu1_DqJx6pIMcyYGRuP3Xmv3ktX7slTeZ3EBo7JTcO56VCH6aFAX6a8SJ2MhB6N1iHe1vNIpzMKioCwLaxGaXMGaGbNPdMMndumcvn_zNKaMctw4CE8lvCzBDe94JoYVAzQbBwm4TT7QonhlqRtCo0ojpmz3lD2F5fbYTRdw67qVRlyerlDjI44dJyo_YHld2J3kVMxx69Ck",
  creativeTeamMeeting: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfaHE_NbusgmxMuIMFjq1QeVTIBVVuPK4UVSIa7-EyDf_zLyw8X_MLHThDvbgKfxep6sjio9YlvJiOTX3hbDacyPkGHagjnZAsoJro2JStoKsnE7Ig03MhbEph_du4K8IaW-hPk3VK0OlVuj0mfDVkV4GHogfe-T4zIfgaAJS6mt9YDZfxFjpRdlTdIl4tz2dEjlGq3toNr-WT--fhYhoXUQYkx-N_96sJXjEUPMhc3EYCsz_vmi4KhyzsgWJxS0ec9jJmFLy8jvA",
  denimScissorsCloseUp: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4q6fxtegE6jqiDu_VahItjr9_9XKaiRRhMt0GSLooeaODFkJFhShHJLF17olckeulinbt9qLQfX-TnYJVUjUsf4xbxjOzXaFgQfcJfcyBfD8ZrHla-xqX23KhY9x7pmw1_VdiA-Y8o-Ef9jsjXX9JTwb6kcnkYCYtv0776tmiYQG1qp0jTO_9ohVdtekL1-ot6lrnWw5w5-zwJfwmcMhMMz_4m8ctEXLbA7zNYqFhiSaHwgcBvwcUTk27AQe_n9C6NxRl-tESrNc",
  modelsGroupCollection: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb1ZdQMJPQKGvT65YTCM01_94cf9tEnw1y_qfsPMlY2Rz3e5S_XPHLR5JLNPOIstSCCzDc4EXtzpG7YoI5_EDGkINM4AuyfzdDYZgqFRn7stB3Vlqz1ipo9jjRyT41BKJUOVN63_Tj2kzDAPfTdP6Occ9YM7czGOchEXjw_6fnuq1ZNhOYo5dYKd-v3BnpD5plUm67KHOt1pynt0QtX2tBuIXmreSuDWiyf61R7Zgi3GoOCS8cHixJZaX0J78pae80_kbuvqk7MX0",
  detailedStitchingLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKVuxV6McEr8rHrpUc6k2sY3oXDRaCojHvcl2bFQLYUi_MeR5lSlePGMesIHax6FTvvuLDDq6gbtNaexNTMyfCa70lYJbT8ZJRjM-jysNsE-G52N51IAxCkXAi9HT9KppyRVMu-o3AgDImr1SvkaYLCIm1Ka0t-oY3bMnirmw2MYdn-ePsQl97GQJ4TRiGiKgwTPVTkX64MrceYcLghTiIO4T5ZBes8qhx6hEkjp9oNZXP_-lrufT8M-RQ8CmHP4KG4_jwmGCyLds",
  ladiesHoldingProducts: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYYgeChnrIW89xPnkpxI59lVUnQoDJwSNGQzeTljs-OB0gmne_bmuEa3SkE1FlpVzFvAxcjxcm9ETtCGvyU9hVKaNMT3boVcmwoLdpIzduj3AsD6Jh26dxdZUMhWdU8WptStyvCLGWyg1MDhFyOtwMI0QWScriT_EmSPLgTSCC2L8QDbafRijM-M8E1zFQkDYCh0Iq9lS7VMl6__nTB6ZJ2hSkyq8kJ1acoCOgx0-WSyViM2N6gMwmQMBTjwmYE0Nor0I4QTym7dg",
  flatlayPremiumProducts: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwckMHuFezDP7vXvM41YJqJ-jWujryf6zQZmX_e1jT11p8CZmVecnl7NsQrh0XABklvbjAd8T47vHEZtOG1NXOxgcC0ApyvyIE69aXQxnQI_wB9_gGnKQaHM2EHVL_ABEdcJMB4XhIVqwbwRI3yMLQjmT8OhiOsZ8qM0JpOsFUjyJ-iAYZvyFtC8eHEqLRdmddrBK7o3ECDuTYKLbOFNpeX-sWiqSPxlzCMW7qGOZjadd4ehsmV86mkoFSLaYbSMBoEO5SuNbVsss"
};

export const PRODUCTS: Product[] = [
  {
    id: "prod_1",
    title: "Bolsa Retalhos Premium",
    description: "Bolsa tiracolo confeccionada com retalhos de jeans selecionados, forro de algodão reciclado e detalhes em couro vegetal de upcycling. Cada peça é numerada e única.",
    category: "bags",
    imageUrl: BRAND_IMAGES.denimBagHero,
    price: "R$ 189,00",
    impactMetrics: {
      waterSaved: 8500, // liters saved
      textileUpcycled: 450 // grams
    }
  },
  {
    id: "prod_2",
    title: "Jaqueta Jeans Deconstruída",
    description: "Jaqueta upcycled a partir de jeans de descarte pós-consumo, com intervenções artísticas de patchwork nas costas e mangas, gola estruturada e modelagem oversized.",
    category: "jackets",
    imageUrl: BRAND_IMAGES.patchworkJacket,
    price: "R$ 349,00",
    impactMetrics: {
      waterSaved: 11000,
      textileUpcycled: 950
    }
  },
  {
    id: "prod_3",
    title: "Necessaire Sustentável Fios de Fé",
    description: "Necessaire multiuso com fechamento em zíper reforçado, fabricada por nossas artesãs formandas com costura dupla e tecidos 100% reaproveitados da indústria nacional.",
    category: "accessories",
    imageUrl: BRAND_IMAGES.handbagLayoutDetail,
    price: "R$ 59,00",
    impactMetrics: {
      waterSaved: 3200,
      textileUpcycled: 180
    }
  },
  {
    id: "prod_4",
    title: "Mochila EcoStilo Denim Pro",
    description: "Mochila espaçosa com múltiplos compartimentos externos, reforçada para o dia a dia, costurada à mão em denim bruto recuperado de sobras de confecção premium.",
    category: "bags",
    imageUrl: BRAND_IMAGES.flatlayPremiumProducts,
    price: "R$ 259,00",
    impactMetrics: {
      waterSaved: 9800,
      textileUpcycled: 650
    }
  },
  {
    id: "prod_5",
    title: "Colete Patchwork Moderno",
    description: "Colete unissex estruturado com sobreposição de tons azuis de denim, bolsos frontais utilitários e fechamento em botões reaproveitados de latão antigo.",
    category: "jackets",
    imageUrl: BRAND_IMAGES.fashionModelJeans,
    price: "R$ 229,00",
    impactMetrics: {
      waterSaved: 7800,
      textileUpcycled: 500
    }
  }
];

export const ARTISANS: ArtisanStory[] = [
  {
    id: "art_1",
    name: "Maria das Dores",
    role: "Líder de Costura e Acabamento",
    bio: "Após anos em situação de vulnerabilidade extrema e desemprego, encontrou na oficina do EcoStilo uma nova profissão. Hoje, além de criar as bolsas mais vendidas, lidera e ensina o ofício para novas turmas.",
    quote: "A costura me deu mais que sustento. Ela me deu de volta o meu nome, minha dignidade e a certeza de que posso tecer meu próprio destino.",
    imageUrl: BRAND_IMAGES.smilingArtisans,
    productsCreated: ["prod_1", "prod_4"]
  },
  {
    id: "art_2",
    name: "Francisca de Assis",
    role: "Artesã especialista em Patchwork",
    bio: "Apaixonada por cores e formas, Francisca especializou-se em combinar retalhos de jeans de diferentes gramaturas e lavagens, criando as incríveis estampas geométricas da marca.",
    quote: "Cada pedaço de jeans rasgado que as pessoas jogam fora é para mim uma tela em branco. Unir esses pedaços é como curar feridas da alma.",
    imageUrl: BRAND_IMAGES.ladiesHoldingProducts,
    productsCreated: ["prod_2", "prod_5"]
  }
];

export const UPCYCLING_STEPS: UpcyclingStep[] = [
  {
    number: 1,
    title: "Coleta & Resgate",
    description: "Resgatamos calças, camisas e sobras de tecidos jeans em postos de coleta, confecções parceiras e doações da comunidade local, evitando que terminem em aterros sanitários.",
    iconName: "Archive",
    imageUrl: BRAND_IMAGES.denimFabricStack
  },
  {
    number: 2,
    title: "Triagem & Higienização",
    description: "Todo material passa por um processo rigoroso de lavagem ecológica, sem produtos químicos agressivos, seguida de uma triagem detalhada onde separamos lavagens, zíperes e botões.",
    iconName: "Sparkles",
    imageUrl: BRAND_IMAGES.tailoringSetup
  },
  {
    number: 3,
    title: "Desconstrução Criativa",
    description: "Cada peça de roupa é cuidadosamente descosturada e estendida. Nosso time de design planeja o corte aproveitando cada centímetro quadrado do tecido, incluindo bolsos e costuras originais.",
    iconName: "Scissors",
    imageUrl: BRAND_IMAGES.denimScissorsCloseUp
  },
  {
    number: 4,
    title: "Modelagem & Patchwork",
    description: "Unimos retalhos em painéis artísticos equilibrados por cores e texturas. O patchwork é estruturado com técnicas que garantem extrema durabilidade e leveza ao produto final.",
    iconName: "Layers",
    imageUrl: BRAND_IMAGES.creativeStudioSketch
  },
  {
    number: 5,
    title: "Costura de Fé & Acabamento",
    description: "As artesãs dão vida às bolsas e jaquetas em máquinas industriais, aplicando forros resistentes, costuras reforçadas e zíperes premium. Cada peça concluída recebe a assinatura de quem a costurou.",
    iconName: "Heart",
    imageUrl: BRAND_IMAGES.creativeTeamMeeting
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2023",
    title: "O Primeiro Fio",
    description: "Início do projeto social em uma pequena sala de paróquia, reunindo 5 mulheres vulneráveis e 2 máquinas de costura doadas para produzir as primeiras necessaires de retalhos."
  },
  {
    year: "2024",
    title: "Expansão & Parcerias",
    description: "Lançamento da marca EcoStilo e parceria com grandes confecções de jeans para receber doações de sobras de produção. Formatura da primeira turma de costureiras profissionais."
  },
  {
    year: "2025",
    title: "O Selo de Impacto",
    description: "Consolidação de um ecossistema completo: oficinas de costura avançada, atendimento psicológico semanal para as famílias e economia circular que já desviou mais de 5 toneladas de jeans de aterros."
  },
  {
    year: "2026",
    title: "EcoStilo & Fios de Fé Hoje",
    description: "Mais de 120 mulheres capacitadas, loja própria online integrada e uma marca nacional que prova que a moda pode ser verdadeiramente sustentável, justa e repleta de esperança."
  }
];

export const VALUES = [
  {
    title: "Moda Regenerativa",
    description: "Nossos produtos reduzem a pegada hídrica e evitam a extração de novos recursos, promovendo a circularidade real.",
    icon: "Recycle"
  },
  {
    title: "Dignidade Feminina",
    description: "Garantimos remuneração justa, capacitação de alto nível e apoio emocional contínuo para mulheres reconquistarem sua autonomia.",
    icon: "HeartHandshake"
  },
  {
    title: "Fé & Perseverança",
    description: "Acreditamos que todo recomeço é possível. Cada fio costurado carrega a esperança de um futuro mais luminoso.",
    icon: "Sparkles"
  },
  {
    title: "Design de Origem",
    description: "Não fazemos apenas upcycling, criamos peças de alta costura com design exclusivo, identidade forte e história própria.",
    icon: "Palette"
  }
];
