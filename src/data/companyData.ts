/**
 * TEGMA-SU, Lda - Dados Corporativos Oficiais
 * Informações oficiais e documentais da empresa angolana (fundada em 2013 em Luanda)
 */

export interface BusinessDivision {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  capabilities: string[];
  imageKey?: string;
  stat: { value: string; label: string };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'infra' | 'agro' | 'machinery' | 'consulting';
  province: 'Luanda' | 'Malanje' | 'Benguela' | 'Lunda-Sul' | 'Lunda-Norte' | 'Internacional';
  year: string;
  client: string;
  scope: string;
  metrics: string;
  status: 'Concluído' | 'Em Execução' | 'Em Expansão';
  details: string[];
}

export interface PalancaProduct {
  id: string;
  name: string;
  category: 'Batatas Fritas' | 'Tubérculos' | 'Gourmet Export';
  description: string;
  features: string[];
  format: string;
  targetMarket: string;
}

export interface PartnerEntity {
  id: string;
  name: string;
  category: 'governo' | 'industrial' | 'agro' | 'finance' | 'distribuicao';
  categoryLabel: {
    pt: string;
    en: string;
  };
  countryOrProvince: string;
  initials: string;
  tagline: {
    pt: string;
    en: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: {
    pt: string;
    en: string;
  };
  author: string;
  role: {
    pt: string;
    en: string;
  };
  organization: string;
  location: string;
  sector: {
    pt: string;
    en: string;
  };
  category: 'all' | 'infra' | 'agro' | 'global';
  year: string;
  metricsBadge?: string;
}

export const COMPANY_DIVISIONS: BusinessDivision[] = [
  {
    id: 'infraestrutura',
    number: '01',
    title: 'Engenharia Civil & Infraestruturas Viárias',
    shortDesc: 'Reabilitação e construção de vias urbanas, terraplenagem e obras de arte para governos provinciais e instituições públicas.',
    fullDesc: 'Desde 2013, a TEGMA-SU atua no cerne do desenvolvimento rodoviário de Angola. Com um parque de máquinas pesadas moderno e equipas de topografia e engenharia experientes, executamos projetos complexos de pavimentação asfáltica, drenagem pluvial e requalificação urbana nas províncias de Luanda, Benguela, Malanje e Lundas.',
    highlights: [
      'Estudos topográficos e projetos executivos de engenharia',
      'Terraplenagem, compactação de solos e sub-bases rodoviárias',
      'Pavimentação em betão betuminoso e calçadas urbanas',
      'Fiscalização rigorosa de conformidade técnica e ensaios laboratoriais'
    ],
    capabilities: [
      'Construção de vias primárias e secundárias',
      'Drenagem macro e micro-urbana',
      'Reabilitação de pontões e obras de arte',
      'Consultoria técnica e fiscalização independente'
    ],
    stat: { value: '+180 km', label: 'Vias urbanas e rurais intervencionadas' }
  },
  {
    id: 'agroindustria',
    number: '02',
    title: 'Agroindústria & Batatas Palanca (Cacuso)',
    shortDesc: 'Transformação agroindustrial nacional na província de Malanje, produção de batata frita, derivados de mandioca e linha gourmet de exportação.',
    fullDesc: 'A fábrica das Batatas Fritas Palanca, situada no município de Cacuso em Malanje e inaugurada em Fevereiro de 2020 pela visão de António Duarte, representa o compromisso da TEGMA-SU com a autossuficiência alimentar de Angola. Operamos com tecnologia de ponta para lavagem, corte e fritura contínua, integrando pequenos e médios agricultores da região.',
    highlights: [
      'Unidade fabril industrial instalada em Cacuso, Malanje',
      'Incentivo e compra garantida à agricultura familiar de Malanje',
      'Linha de expansão para mandioca frita e banana congelada',
      'Lançamento internacional em Lisboa e expansão para Portugal, Brasil e África Austral'
    ],
    capabilities: [
      'Processamento contínuo de batata nacional',
      'Embalamento em atmosfera modificada',
      'Controlo de qualidade alimentar HACCP',
      'Logística refrigerada e cadeia de distribuição nacional'
    ],
    stat: { value: '1.200 t/ano', label: 'Capacidade instalada de processamento' }
  },
  {
    id: 'comercio-maquinas',
    number: '03',
    title: 'Comércio Técnico & Suprimentos Industriais',
    shortDesc: 'Fornecimento de maquinaria pesada, equipamentos clínicos hospitalares e soluções corporativas de tecnologia da informação.',
    fullDesc: 'A divisão comercial e de suprimentos da TEGMA-SU atende as demandas críticas dos setores produtivo e de saúde em Angola. Garantimos a importação, desalfandegamento e distribuição de escavadoras, motoniveladoras, medicamentos certificados e infraestrutura informática com suporte pós-venda especializado.',
    highlights: [
      'Fornecimento de frotas industriais e peças genuínas',
      'Suprimentos farmacêuticos para hospitais, clínicas e centros de saúde',
      'Infraestrutura de TI (estações de trabalho, servidores e impressoras de alto volume)',
      'Contratos de assistência técnica e manutenção preventiva'
    ],
    capabilities: [
      'Importação e desalfandegamento especializado',
      'Equipamentos de rastreio e diagnóstico hospitalar',
      'Maquinaria pesada para mineração e construção',
      'Suprimentos de consumíveis industriais e TI'
    ],
    stat: { value: '+45', label: 'Instituições públicas e privadas abastecidas' }
  },
  {
    id: 'financiamento-global',
    number: '04',
    title: 'Montagem de Linhas de Financiamento & Relações Globais',
    shortDesc: 'Estruturação de financiamento externo e parcerias comerciais internacionais com Espanha, Argentina, Uruguai e Dubai.',
    fullDesc: 'A TEGMA-SU conecta Angola aos principais centros fornecedores e praças financeiras globais. Criamos pontes bilaterais com empresas espanholas, sul-americanas e árabes para montagem de linhas de crédito estruturadas, viabilizando grandes empreendimentos de infraestrutura e agronegócio com mitigação de risco cambial.',
    highlights: [
      'Alianças consolidadas com parceiros em Espanha e na América do Sul',
      'Presença operacional e contactos estratégicos nos Emirados Árabes Unidos (Dubai)',
      'Estruturação de garantias bancárias e linhas de crédito para importação de tecnologia',
      'Conformidade rigorosa com normas de compliance bancário e comércio internacional'
    ],
    capabilities: [
      'Engenharia financeira para obras públicas',
      'Mediação de Joint-Ventures industriais',
      'Gestão de cartas de crédito e seguros de transporte',
      'Representação de marcas industriais estrangeiras'
    ],
    stat: { value: '4 Países', label: 'Eixos de parcerias globais ativas' }
  }
];

export const PALANCA_PRODUCTS: PalancaProduct[] = [
  {
    id: 'palanca-tradicional',
    name: 'Batatas Fritas Palanca Clássica',
    category: 'Batatas Fritas',
    description: 'Batata selecionada de produtores de Malanje, fatiada finamente e frita em óleo vegetal refinado com teor controlado de sal marinho.',
    features: ['100% Batata Angolana', 'Crocância Duradoura', 'Sem Conservantes Artificiais'],
    format: 'Embalagens de 40g, 100g e 250g',
    targetMarket: 'Mercado nacional, hipermercados, cantinas e retalho'
  },
  {
    id: 'palanca-ondulada',
    name: 'Palanca Ondulada Sabores',
    category: 'Batatas Fritas',
    description: 'Corte ondulado com textura reforçada, ideal para petiscos e aperitivos. Disponível nos sabores Salgado, Churrasco e Queijo & Ervas.',
    features: ['Corte Grosso Extra Crocante', 'Temperos Selecionados', 'Atmosfera Protetora'],
    format: 'Embalagens de 80g e 150g',
    targetMarket: 'Canais de conveniência, eventos e hotelaria'
  },
  {
    id: 'palanca-mandioca',
    name: 'Mandioca Frita Palanca (Cacuso)',
    category: 'Tubérculos',
    description: 'Valorização da raiz tradicional angolana. Mandioca colhida e processada em palitos crocantes e finos, com sabor autêntico de terra fértil.',
    features: ['Rico em Energia Natural', 'Zero Gorduras Trans', 'Apoio à Agricultura Familiar'],
    format: 'Embalagens de 100g e Congelado para Restauração',
    targetMarket: 'Restaurantes, mercado interno e mercados da diáspora'
  },
  {
    id: 'palanca-gourmet',
    name: 'Linha Gourmet Palanca (Export)',
    category: 'Gourmet Export',
    description: 'Apresentada em Lisboa, concebida para atender consumidores exigentes na Europa e África do Sul com matérias-primas nobres e azeite de qualidade.',
    features: ['Certificação Europeia de Exportação', 'Design Premium', 'Lançamento em Lisboa 2025/2026'],
    format: 'Embalagem Metalizada Selada 120g',
    targetMarket: 'Exportação para Portugal, Brasil, África do Sul e EAU'
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Reabilitação da Malha Viária Urbana e Acessos',
    category: 'infra',
    province: 'Luanda',
    year: '2023 - 2025',
    client: 'Governo Provincial de Luanda / Ministério das Obras Públicas',
    scope: 'Requalificação de vias estruturantes com substituição de sub-base, aplicação de camada de asfalto betuminoso, passeios em calçada e lancis.',
    metrics: '34 km pavimentados · 280 postos de trabalho mobilizados',
    status: 'Concluído',
    details: [
      'Drenagem de águas pluviais para eliminação de pontos críticos de alagamento',
      'Sinalização horizontal termoplástica e vertical reflectora',
      'Iluminação pública integrada em postes de eficiência energética'
    ]
  },
  {
    id: 'proj-2',
    title: 'Complexo Fabril Palanca & Infraestrutura de Cacuso',
    category: 'agro',
    province: 'Malanje',
    year: '2020 - 2026',
    client: 'TEGMA-SU & Ministério da Indústria e Comércio',
    scope: 'Construção, montagem tecnológica e operação da fábrica industrial de processamento de batata, armazéns climatizados e linha de mandioca.',
    metrics: 'Área coberta 4.500m² · 1.200 toneladas de processamento/ano',
    status: 'Em Expansão',
    details: [
      'Inaugurada em 21 de Fevereiro de 2020 pelo empresário António Duarte',
      'Integração de mais de 80 produtores de batata locais de Malanje',
      'Nova linha de congelados e tubérculos tradicionais em instalação'
    ]
  },
  {
    id: 'proj-3',
    title: 'Pavimentação e Drenagem de Vias de Circulação',
    category: 'infra',
    province: 'Benguela',
    year: '2022 - 2024',
    client: 'Governo Provincial de Benguela',
    scope: 'Obras de terraplenagem, nivelamento e assentamento asfáltico em eixos de ligação inter-bairros e vias de escoamento logístico portuário.',
    metrics: '22 km intervencionados · 14 passagens hidráulicas construídas',
    status: 'Concluído',
    details: [
      'Resistência reforçada para tráfego pesado de carga logística',
      'Controlo laboratorial de solos e ensaios Marshall em todos os lotes',
      'Conclusão antes do prazo contratual inicial'
    ]
  },
  {
    id: 'proj-4',
    title: 'Reabilitação de Vias Urbanas e Acessos Mineiros',
    category: 'infra',
    province: 'Lunda-Sul',
    year: '2021 - 2023',
    client: 'Administração Municipal e Entidades Privadas',
    scope: 'Estabilização de plataformas em solos lateríticos, regularização de traçado e aplicação de revestimento asfáltico resistente a monções.',
    metrics: '18 km de vias críticas estabilizadas',
    status: 'Concluído',
    details: [
      'Mobilização de maquinaria pesada em terreno remoto',
      'Capacitação e contratação de mão-de-obra local da província',
      'Garantia de transitabilidade durante as estações chuvosas'
    ]
  },
  {
    id: 'proj-5',
    title: 'Obras de Arte e Terraplenagem em Eixos Estruturantes',
    category: 'infra',
    province: 'Lunda-Norte',
    year: '2022 - 2024',
    client: 'Governo Provincial da Lunda-Norte',
    scope: 'Construção de aquedutos de betão armado, valas de escoamento e alargamento de vias secundárias para escoamento agrícola e comercial.',
    metrics: '12 km reabilitados · 6 aquedutos de betão',
    status: 'Concluído',
    details: [
      'Combate preventivo à erosão e ravinas nas bermas rodoviárias',
      'Melhoria do tempo de ligação entre comunas rurais e centros urbanos',
      'Intervenção com apoio de consultoria de engenharia e ensaios'
    ]
  },
  {
    id: 'proj-6',
    title: 'Fornecimento de Frota de Maquinaria Pesada & Equipamentos',
    category: 'machinery',
    province: 'Luanda',
    year: '2024 - 2026',
    client: 'Consórcios de Construção & Operadores Logísticos',
    scope: 'Importação, entrega técnica e comissionamento de motoniveladoras, retroescavadoras e cilindros compactadores com garantia pós-venda.',
    metrics: '+28 Unidades de maquinaria pesada entregues',
    status: 'Em Execução',
    details: [
      'Importação direta através dos canais internacionais da TEGMA-SU',
      'Formação técnica de operadores de máquina em Luanda',
      'Fornecimento de stock inicial de peças e filtros de substituição rápida'
    ]
  }
];

export const COMPANY_CONTACTS = {
  name: 'TEGMA-SU, Lda',
  headquarters: 'Rua Amílcar Cabral, Luanda, Angola',
  branch: 'Rua da Liberdade, Luanda, Angola',
  factory: 'Município de Cacuso, Província de Malanje, Angola',
  phones: [
    { number: '+244 222 331 058', type: 'Fixo Sede' },
    { number: '+244 222 331 077', type: 'Fixo Geral' },
    { number: '+244 936 683 344', type: 'Móvel & WhatsApp' },
    { number: '+244 928 638 068', type: 'Apoio Comercial' }
  ],
  emails: [
    { address: 'contactos@tegma-su.co.ao', label: 'Geral & Institucional' },
    { address: 'comercial@tegma-su.co.ao', label: 'Propostas & Cotações' }
  ],
  workingHours: 'Segunda a Sexta-feira: 08h00 - 17h30 (Horário de Angola)'
};

export const PARTNERS_LIST: PartnerEntity[] = [
  {
    id: 'gov-luanda',
    name: 'Governo Provincial de Luanda',
    category: 'governo',
    categoryLabel: { pt: 'Administração Pública', en: 'Public Administration' },
    countryOrProvince: 'Luanda, Angola',
    initials: 'GPL',
    tagline: { pt: 'Vias urbanas, asfalto e drenagem', en: 'Urban roads, asphalt & drainage' }
  },
  {
    id: 'gov-malanje',
    name: 'Governo Provincial de Malanje',
    category: 'governo',
    categoryLabel: { pt: 'Administração Pública', en: 'Public Administration' },
    countryOrProvince: 'Malanje, Angola',
    initials: 'GPM',
    tagline: { pt: 'Pólo Agroindustrial de Cacuso', en: 'Cacuso Agro-Industrial Hub' }
  },
  {
    id: 'gov-benguela',
    name: 'Governo Provincial de Benguela',
    category: 'governo',
    categoryLabel: { pt: 'Administração Pública', en: 'Public Administration' },
    countryOrProvince: 'Benguela, Angola',
    initials: 'GPB',
    tagline: { pt: 'Infraestruturas e reabilitação viária', en: 'Infrastructure & road rehabilitation' }
  },
  {
    id: 'minopuh',
    name: 'MINOPUH - Ministério das Obras Públicas',
    category: 'governo',
    categoryLabel: { pt: 'Órgão Central', en: 'Central Ministry' },
    countryOrProvince: 'República de Angola',
    initials: 'MIN',
    tagline: { pt: 'Normas técnicas e alvarás rodoviários', en: 'Technical standards & licensing' }
  },
  {
    id: 'tecnoagro-esp',
    name: 'TecnoAgro Ibérica Industrial',
    category: 'industrial',
    categoryLabel: { pt: 'Parceiro Tecnológico', en: 'Technology Partner' },
    countryOrProvince: 'Espanha (UE)',
    initials: 'TAI',
    tagline: { pt: 'Linhas fabris automatizadas e corte contínuo', en: 'Automated processing & slicing lines' }
  },
  {
    id: 'agricola-plata',
    name: 'Agrícola del Plata & Genética',
    category: 'agro',
    categoryLabel: { pt: 'Cooperação Agronómica', en: 'Agronomic Cooperation' },
    countryOrProvince: 'Argentina & Uruguai',
    initials: 'ADP',
    tagline: { pt: 'Sementes certificadas e apoio ao cultivo', en: 'Certified seed stocks & crop tech' }
  },
  {
    id: 'gulf-trade',
    name: 'Gulf Global Trade & Finance',
    category: 'finance',
    categoryLabel: { pt: 'Trade & Financiamento', en: 'Trade & Financing' },
    countryOrProvince: 'Dubai, Emirados Árabes Unidos',
    initials: 'GGT',
    tagline: { pt: 'Linhas de crédito e importação pesada', en: 'Credit facilities & heavy machinery trade' }
  },
  {
    id: 'coop-cacuso',
    name: 'Cooperativas Agrícolas de Cacuso',
    category: 'agro',
    categoryLabel: { pt: 'Agricultura Familiar', en: 'Family Farming' },
    countryOrProvince: 'Cacuso, Malanje',
    initials: 'CAC',
    tagline: { pt: 'Fornecimento direto de tubérculos frescos', en: 'Direct harvest potato supply' }
  },
  {
    id: 'distrib-angola',
    name: 'Rede Nacional de Distribuição e Retalho',
    category: 'distribuicao',
    categoryLabel: { pt: 'Canais Comerciais', en: 'Commercial Channels' },
    countryOrProvince: 'Angola',
    initials: 'RND',
    tagline: { pt: 'Escoamento das Batatas Palanca', en: 'Nationwide Palanca distribution' }
  },
  {
    id: 'lunda-sul',
    name: 'Governo Provincial da Lunda-Sul',
    category: 'governo',
    categoryLabel: { pt: 'Administração Pública', en: 'Public Administration' },
    countryOrProvince: 'Saurimo, Lunda-Sul',
    initials: 'GPLS',
    tagline: { pt: 'Terraplenagem e acessos rodoviários', en: 'Earthworks & road arteries' }
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Eng. Manuel Kiala',
    role: {
      pt: 'Diretor Provincial de Infraestruturas e Serviços Técnicos',
      en: 'Provincial Director of Infrastructure & Technical Services'
    },
    organization: 'Governo Provincial de Luanda',
    location: 'Luanda, Angola',
    category: 'infra',
    sector: {
      pt: 'Obras Públicas & Vias Urbanas',
      en: 'Public Works & Urban Roads'
    },
    year: '2024',
    metricsBadge: '18km Asfaltados',
    quote: {
      pt: 'A intervenção da TEGMA-SU nas vias estruturantes de Luanda destacou-se pelo cumprimento rigoroso de prazos e pela qualidade da camada betuminosa. A mobilização de maquinaria própria e a capacidade de resposta em zonas urbanas densas garantiram uma obra exemplar sem desvios orçamentais.',
      en: 'TEGMA-SU’s intervention on Luanda’s primary road network stood out for its strict adherence to schedule and superior bituminous quality. Their deployment of an owned heavy fleet and agile responsiveness in dense urban zones delivered an exemplary project on budget.'
    }
  },
  {
    id: 'test-2',
    author: 'Dra. Teresa Muanza',
    role: {
      pt: 'Assessora de Fomento Agroindustrial & Produção Local',
      en: 'Senior Advisor for Agro-Industrial Development & Local Production'
    },
    organization: 'Gabinete de Desenvolvimento Económico de Malanje',
    location: 'Cacuso, Malanje',
    category: 'agro',
    sector: {
      pt: 'Pólo Agroindustrial de Cacuso',
      en: 'Cacuso Agro-Industrial Hub'
    },
    year: '2025',
    metricsBadge: '1.200 t/ano Processadas',
    quote: {
      pt: 'A Fábrica de Batatas Palanca revolucionou a realidade socioeconómica de Cacuso. A TEGMA-SU estruturou uma cadeia com garantias de compra direta a centenas de agricultores locais, substituindo importações de snacks e elevando a província de Malanje a polo agroindustrial de relevo nacional.',
      en: 'The Palanca Potato Chips facility transformed Cacuso’s socioeconomic landscape. TEGMA-SU structured an inclusive supply chain guaranteeing direct purchase from hundreds of local smallholders, substituting snack imports and elevating Malanje into a strategic agro-industrial center.'
    }
  },
  {
    id: 'test-3',
    author: 'Francisco Gómez Villalba',
    role: {
      pt: 'Diretor de Engenharia Fabril & Exportação de Bens de Capital',
      en: 'Director of Industrial Engineering & Capital Goods Export'
    },
    organization: 'IberTech Industrial Systems (Espanha)',
    location: 'Madrid / Valência, Espanha',
    category: 'global',
    sector: {
      pt: 'Automação & Maquinaria Europeia',
      en: 'Automation & European Processing Machinery'
    },
    year: '2024',
    metricsBadge: 'Padrão HACCP Europeu',
    quote: {
      pt: 'A parceria com a TEGMA-SU na conceção, importação e instalação das linhas automatizadas de corte e fritura em Angola demonstra um rigor técnico comparável aos mais elevados padrões industriais europeus. É uma organização angolana sólida, ética e com visão global de futuro.',
      en: 'Our alliance with TEGMA-SU for engineering, importing, and commissioning automated processing and frying lines in Angola reflects technical discipline on par with Europe’s highest industrial standards. A solid, ethical Angolan enterprise with a clear global perspective.'
    }
  },
  {
    id: 'test-4',
    author: 'Dr. Álvaro Bento',
    role: {
      pt: 'Diretor de Compras & Abastecimento de Grande Consumo',
      en: 'Director of Procurement & Fast-Moving Consumer Goods Supply'
    },
    organization: 'Consórcio Nacional de Retalho e Supermercados',
    location: 'Âmbito Nacional, Angola',
    category: 'agro',
    sector: {
      pt: 'Distribuição Comercial & Soberania Alimentar',
      en: 'Retail Distribution & Food Sovereignty'
    },
    year: '2025',
    metricsBadge: 'Fornecimento Contínuo',
    quote: {
      pt: 'As Batatas Fritas Palanca ganharam a preferência do consumidor angolano pelo sabor e crocância autênticos. Para as nossas redes de retalho, a TEGMA-SU destaca-se pela regularidade nos abastecimentos e padrões sanitários impecáveis, sendo um fornecedor de confiança máxima.',
      en: 'Palanca Potato Chips immediately earned the trust of Angolan consumers thanks to authentic flavor and crisp texture. For our retail networks, TEGMA-SU excels in regular deliveries and impeccable food safety standards, acting as an indispensable partner.'
    }
  },
  {
    id: 'test-5',
    author: 'Eng. Carlos Mendonça',
    role: {
      pt: 'Coordenador Técnico de Vias Urbanas e Drenagem',
      en: 'Chief Technical Coordinator of Urban Works & Drainage'
    },
    organization: 'Governo Provincial de Benguela',
    location: 'Benguela, Angola',
    category: 'infra',
    sector: {
      pt: 'Terraplenagem & Requalificação Viária',
      en: 'Earthworks & Urban Road Rehabilitation'
    },
    year: '2023',
    metricsBadge: 'Conformidade 100%',
    quote: {
      pt: 'O profissionalismo dos quadros de engenharia da TEGMA-SU na reabilitação viária em Benguela foi determinante para mitigar o impacto de cheias com soluções robustas de drenagem pluvial. Uma empresa angolana com equipamento de ponta e profundo respeito pela segurança e durabilidade da obra.',
      en: 'The professionalism of TEGMA-SU engineering teams during road rehab in Benguela proved decisive in mitigating flood impacts with durable stormwater drainage. An Angolan contractor with modern machinery and profound dedication to construction longevity.'
    }
  },
  {
    id: 'test-6',
    author: 'Tariq Al-Mansoor',
    role: {
      pt: 'Vice-Presidente de Estruturação Comercial & Trade Finance',
      en: 'Vice President of Structured Trade & Commercial Financing'
    },
    organization: 'Gulf Global Trade & Logistics',
    location: 'Dubai, EAU',
    category: 'global',
    sector: {
      pt: 'Facilitação de Comércio Exterior & Maquinaria',
      en: 'Cross-Border Trade & Machinery Financing'
    },
    year: '2024',
    metricsBadge: 'Articulação Bilateral',
    quote: {
      pt: 'A TEGMA-SU possui uma governança financeira e conformidade documental que facilitam com agilidade as garantias de importação e linhas de crédito estruturadas entre o Médio Oriente e o mercado angolano. É a nossa ponte corporativa de referência na África Subsaariana.',
      en: 'TEGMA-SU exhibits rigorous financial governance and documentation compliance, facilitating swift trade guarantees and structured credit facilities between the Middle East and Angola. Our benchmark corporate gateway into Sub-Saharan Africa.'
    }
  }
];
