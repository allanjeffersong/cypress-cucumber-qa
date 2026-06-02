# Projeto VA02 — BDD com Cypress + Cucumber + Gherkin

## Descrição
Automação de testes E2E no Portal da Transparência do Governo Federal
utilizando Cypress 15, Cucumber e Gherkin com padrão BDD (Behavior Driven Development).

## Tecnologias
- Cypress 15
- Cucumber (@badeball/cypress-cucumber-preprocessor)
- Gherkin (cenários em português)
- Page Objects
- Fixtures

## Estrutura
cypress/
├── e2e/
│   ├── features/
│   │   ├── consultaTransparencia.feature
│   │   └── buscaOrgao.feature
│   └── steps/
│       ├── consultaTransparenciaSteps.js
│       └── buscaOrgaoSteps.js
├── fixtures/
│   └── dadosTeste.json
├── pages/
│   └── consultaTransparencia.page.js
└── support/
    ├── commands.js
    └── e2e.js

## Como instalar e rodar
```bash
npm install
npx cypress open
```

## Site testado
Portal da Transparência Federal
https://portaldatransparencia.gov.br

## Cenários cobertos
- Busca de órgão público por nome (Ministério da Educação)
- Consulta de fornecedor por CNPJ
- Busca de detalhes do Ministério da Saúde
- Validação de carregamento da página inicial

## Observação técnica
O Portal da Transparência gera um erro interno de JavaScript
(`uncaught exception: await is only valid in async functions`)
que não está relacionado aos cenários testados.
O arquivo `cypress/support/e2e.js` foi configurado para ignorar
esse erro externo, garantindo que apenas falhas reais nos testes
causem quebra na execução.