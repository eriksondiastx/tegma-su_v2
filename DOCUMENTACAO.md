# Documentação Técnica e Funcional do Website Institucional
## TEGMA-SU, Lda. — Construção, Agroindústria & Comércio Internacional

---

### 1. Visão Geral do Projecto

O website institucional da **TEGMA-SU, Lda.** é uma plataforma digital corporativa de alta performance concebida para apresentar a solidez, capacidades operacionais e presença territorial do grupo em Angola e no exterior.

* **Razão Social:** TEGMA-SU, Lda.
* **Ano de Constituição:** 2013 (Luanda, Angola)
* **NIF:** 5417124976
* **Alvarás & Licenciamento:** Obras Públicas e Construção Civil (MINOPUH)
* **Sede:** Rua Amílcar Cabral, Luanda, República de Angola
* **Polo Agroindustrial:** Município de Cacuso, Província de Malanje, Angola
* **Idiomas Suportados:** Português (PT - Padrão) e Inglês (EN)

---

### 2. Arquitetura Tecnológica

A aplicação foi estruturada como uma Single Page Application (SPA) modular, rápida, responsiva e acessível:

| Tecnologia | Versão | Função no Projecto |
| :--- | :--- | :--- |
| **React** | `^19.0.1` | Biblioteca de interface reativa baseada em componentes funcionais e hooks |
| **TypeScript** | `^7.0.2` | Tipagem estática rigorosa para segurança em tempo de compilação |
| **Vite** | `^8.3.0` | Ferramenta de build ultrarrápida e servidor de desenvolvimento local |
| **Tailwind CSS** | `^4.3.3` | Framework de estilização utilitária com design system institucional |
| **Lucide React** | `^0.546.0` | Conjunto consistente de ícones vetoriais em formato SVG |
| **Motion** | `^12.23.24` | Suporte a animações fluidas e micro-interações visuais |

---

### 3. Estrutura de Ficheiros e Pastas

```text
├── index.html                   # Ponto de entrada HTML com metadados e fontes corporativas
├── metadata.json                # Metadados oficiais e capacidades da aplicação
├── package.json                 # Declaração de dependências e scripts de execução
├── tsconfig.json                # Configuração do compilador TypeScript
├── vite.config.ts               # Configurações do Vite e plugins do ecossistema
├── DOCUMENTACAO.md              # Documentação técnica e funcional do projecto
├── src/
│   ├── main.tsx                 # Ponto de entrada React (Client Hydration)
│   ├── App.tsx                  # Componente raiz, orquestrador de estado global e modais
│   ├── index.css                # Importação do Tailwind CSS e regras de animação globais
│   ├── assets/
│   │   └── images/              # Ativos gráficos e imagens temáticas otimizadas
│   ├── data/
│   │   ├── companyData.ts       # Dados institucionais, divisões, projectos e contactos
│   │   └── translations.ts      # Dicionário de internacionalização bilingue (PT / EN)
│   └── components/
│       ├── Header.tsx           # Barra de navegação fixa com seletor de idioma
│       ├── Hero.tsx             # Secção heroica com métricas e chamada para ação
│       ├── DivisionsSection.tsx # Apresentação das 4 divisões operacionais do grupo
│       ├── AgroPalancaSection.tsx # Destaque da Fábrica de Batatas Palanca (Cacuso)
│       ├── ProvincialProjects.tsx # Portfólio de obras públicas por província em Angola
│       ├── PartnersTestimonialsSection.tsx # Marquee de parceiros e carrossel de testemunhos
│       ├── InternationalCorridor.tsx # Eixos globais (Espanha, Dubai, América do Sul)
│       ├── ContactSection.tsx   # Informações de contacto, endereços e formulário direto
│       ├── Footer.tsx           # Rodapé corporativo com links e avisos legais
│       ├── QuoteSimulatorModal.tsx # Simulador de Cotação (RFQ) em 3 etapas
│       └── WhatsAppFloatingButton.tsx # Widget flutuante de atendimento comercial via WhatsApp
```

---

### 4. Módulos e Componentes da Interface

#### 4.1. Barra Superior (`Header.tsx`)
* Menu superior fixo com efeito de desfoque de fundo (`backdrop-blur`).
* Logótipo corporativo com monograma institucional.
* Navegação rápida para as secções da página (`#divisoes`, `#agro-palanca`, `#projectos`, `#parceiros`, `#eixo-global`, `#contactos`).
* Seletor de idioma instantâneo (alterna entre **PT** e **EN** sem recarregar a página).
* Botão de conversão direta **"Solicitar Cotação"** que ativa o modal de RFQ.
* Menu hambúrguer adaptado para dispositivos móveis e ecrãs tácteis.

#### 4.2. Secção Heroica (`Hero.tsx`)
* Apresentação da proposta de valor: Engenharia civil, agroindústria e abastecimento para reconstruir Angola.
* Indicadores-chave de impacto (*Key Performance Indicators*):
  * **+13 Anos** de mercado e atividade em Angola (desde 2013).
  * **5 Províncias** com intervenções ativas (Luanda, Malanje, Benguela, Lundas).
  * **1.200 t/ano** de capacidade fabril de processamento de tubérculos.
  * **5 Hubs Globais** de cooperação internacional.

#### 4.3. Divisões de Negócio (`DivisionsSection.tsx`)
Apresenta os 4 pilares estratégicos da empresa com fichas técnicas detalhadas:
1. **Engenharia Civil & Infraestruturas Viárias:** Vias urbanas, terraplenagem, pavimentação asfáltica e drenagem pluvial.
2. **Agroindústria & Processamento Alimentar:** A Fábrica Palanca em Cacuso, incentivo à agricultura familiar e fomento local.
3. **Comércio Técnico & Suprimentos Industriais:** Importação e fornecimento de máquinas pesadas, peças de reposição e geradores.
4. **Financiamento Estruturado & Eixo Global:** Linhas de crédito de comércio exterior, garantias bancárias e importação de bens de capital.

#### 4.4. Vitrine Agroindustrial Palanca (`AgroPalancaSection.tsx`)
* Foco na unidade fabril inaugurada em **21 de Fevereiro de 2020** no Polo Agroindustrial de Cacuso (Malanje).
* Detalhamento das linhas de produtos: Batata Tradicional, Batata Ondulada, Chips de Mandioca e Linha Gourmet (voltada à exportação).
* Enfatiza o programa de compras diretas aos camponeses locais e os padrões sanitários de controlo alimentar baseados no sistema **HACCP**.

#### 4.5. Portfólio Provincial de Obras (`ProvincialProjects.tsx`)
* Sistema interativo de filtragem por província (**Luanda**, **Malanje**, **Benguela**, **Lunda-Sul**, **Lunda-Norte**) e por setor de intervenção.
* Cartões de projeto com indicação de cliente (Governos Provinciais e Ministérios), extensão executada, ano de intervenção e estado (*Concluído* ou *Em Execução*).

#### 4.6. Parceiros & Testemunhos Institucionais (`PartnersTestimonialsSection.tsx`)
* **Marquee Contínuo:** Faixa horizontal infinita com logótipos e selos institucionais de governos provinciais (GPL, GPM, GPB), ministérios (MINOPUH), parceiros fabris de Espanha (*TecnoAgro Ibérica*), cooperação agronómica da Argentina e Uruguai (*Agrícola del Plata*) e parceiros de trade de Dubai (*Gulf Global Trade*).
* **Carrossel Interativo:** Depoimentos reais e declarações oficiais de dirigentes com métricas de entrega, selo de verificação e paginação suave com pausa ao passar o cursor do rato (*pause on hover*).

#### 4.7. Corredor Internacional (`InternationalCorridor.tsx`)
* Demonstração das rotas comerciais e técnicas da TEGMA-SU com polos estratégicos:
  * **Espanha / Portugal (União Europeia):** Maquinaria industrial e embalamento automatizado.
  * **Argentina & Uruguai (América do Sul):** Genética agronómica e sementes certificadas de batata.
  * **Dubai / Emirados Árabes Unidos (Médio Oriente):** Estruturação financeira, cartas de crédito e bens de capital.

#### 4.8. Contactos Oficiais (`ContactSection.tsx`)
* Endereços físicos da Sede e Filiais em Luanda e no Polo de Cacuso.
* Telefones diretos e horários de expediente oficial em Angola (Segunda a Sexta-feira: 08h00 às 17h30).
* Formulário de contacto institucional com encaminhamento para e-mail ou WhatsApp oficial.

#### 4.9. Simulador de Cotação e RFQ (`QuoteSimulatorModal.tsx`)
* Fluxo em 3 etapas para solicitação de proposta técnica:
  1. Seleção da divisão corporativa de interesse.
  2. Escolha da província e especificação do escopo técnico do projeto.
  3. Preenchimento dos dados institucionais (entidade pública ou empresa privada).
* Emissão automática de número de **Protocolo Corporativo** com funcionalidade para cópia direta para a área de transferência.

#### 4.10. Botão Flutuante de WhatsApp (`WhatsAppFloatingButton.tsx`)
* Fixado no canto inferior direito (`bottom-5 right-5 sm:bottom-6 sm:right-6`).
* Indicador de status verde-esmeralda (*Online agora · Luanda, Angola*).
* Gaveta de atendimento rápido (*Quick Chat Drawer*) com seleção de tópicos predefinidos (Obras Públicas, Batatas Palanca, Maquinaria, Audiências).
* Encaminhamento direto para o número oficial de WhatsApp da empresa: **`+244 936 683 344`**.

---

### 5. Dados e Internacionalização (i18n)

* **Ficheiro de Dados:** `/src/data/companyData.ts`
  * Contém as entidades tipadas em TypeScript para divisões (`COMPANY_DIVISIONS`), projetos provinciais (`PROVINCIAL_PROJECTS`), contactos oficiais (`COMPANY_CONTACTS`), parceiros (`PARTNERS_LIST`) e testemunhos (`TESTIMONIALS_LIST`).
* **Ficheiro de Traduções:** `/src/data/translations.ts`
  * Contém a estrutura de dicionário unificada para o idioma Português (`pt`) e Inglês (`en`).

---

### 6. Identidade Visual e Cores Oficiais

O design segue rigorosamente os manuais de integridade institucional da TEGMA-SU:

| Elemento | Código HEX | Utilização na Interface |
| :--- | :--- | :--- |
| **Vermelho TEGMA** | `#EF4B37` | Cor primária, botões de ação principal (CTA), realces e links |
| **Laranja/Âmbar TEGMA** | `#FA9B0E` | Cor secundária, marcas da linha Palanca e estrelas de avaliação |
| **Verde WhatsApp** | `#25D366` | Botão flutuante de atendimento comercial e selos de status online |
| **Ardósia Escura** | `#0F172A` (`slate-900`) | Tipografia de títulos principais, cabeçalhos e fundo do rodapé |
| **Ardósia Neutra** | `#475569` (`slate-600`) | Textos descritivos e parágrafos de leitura |
| **Fundo Neutro** | `#F8FAFC` (`slate-50`) | Fundos de cartões e secções alternadas para leitura confortável |

---

### 7. Guia de Instalação e Execução

#### Requisitos de Ambiente:
* **Node.js:** Versão 18.0 ou superior
* **NPM:** Versão 9.0 ou superior (ou gestor compatível)

#### Comandos de Linha de Terminal:

```bash
# 1. Instalar as dependências do projecto
npm install

# 2. Iniciar o servidor de desenvolvimento local (porta 3000)
npm run dev

# 3. Validar tipagem e regras do linter TypeScript
npm run lint

# 4. Gerar build otimizado de produção
npm run build

# 5. Pré-visualizar o build localmente
npm run preview
```

---

### 8. Manutenção e Atualização de Conteúdo

#### Como Adicionar um Novo Projeto Provincial:
1. Abra o ficheiro `/src/data/companyData.ts`.
2. Localize a constante `PROVINCIAL_PROJECTS`.
3. Adicione um novo objeto com os campos: `id`, `title`, `category`, `province`, `year`, `client`, `scope`, `metrics`, `status` e `details`.

#### Como Atualizar os Contactos Institucionais:
1. Abra o ficheiro `/src/data/companyData.ts`.
2. Localize a constante `COMPANY_CONTACTS`.
3. Atualize os números de telefone, endereços de correio eletrónico ou horários de atendimento. Os dados serão refletidos automaticamente em todas as secções do website.

---

### 9. Direitos de Autor e Propriedade Intelectual

© 2013 – 2026 **TEGMA-SU, Lda.** Todos os direitos reservados.
Construção Civil, Obras Públicas, Agroindústria e Comércio Geral em Angola.
Documentação técnica elaborada para suporte de engenharia e gestão de conteúdos.
