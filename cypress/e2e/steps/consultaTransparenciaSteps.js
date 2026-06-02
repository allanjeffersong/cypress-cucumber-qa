import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import page from '../../pages/consultaTransparencia.page';

Given('que o usuário acessa o Portal da Transparência', () => {
  page.visitar();
});

When('pesquisa pelo órgão {string}', (orgao) => {
  page.pesquisarOrgao(orgao);
});

Then('os resultados de despesas devem ser exibidos', () => {
  page.validarResultados();
});

Given('que o usuário acessa a busca de fornecedores', () => {
  page.visitarBuscaFornecedor();
});

When('informa o CNPJ {string}', (cnpj) => {
  page.buscarCNPJ(cnpj);
});

Then('os dados do fornecedor devem ser apresentados', () => {
  page.validarDadosFornecedor();
});