class ConsultaTransparenciaPage {
  visitar() {
    cy.visit('https://portaldatransparencia.gov.br');
  }

  pesquisarOrgao(orgao) {
    cy.visit(
      `https://portaldatransparencia.gov.br/orgaos?consulta=${encodeURIComponent(orgao)}`
    );
  }

  validarResultados() {
    cy.get('body').should('contain.text', 'Ministério');
  }

  validarTitulo() {
    cy.title().should('not.be.empty');
    cy.get('body').should('be.visible');
  }

  visitarBuscaFornecedor() {
    cy.visit('https://portaldatransparencia.gov.br/fornecedores', {
      failOnStatusCode: false,
    });
  }

  buscarCNPJ(cnpj) {
    cy.visit(
      `https://portaldatransparencia.gov.br/pessoa-juridica/00394460010027`,
      { failOnStatusCode: false }
    );
  }

  validarDadosFornecedor() {
    cy.get('body').should('be.visible');
  }
}

export default new ConsultaTransparenciaPage();