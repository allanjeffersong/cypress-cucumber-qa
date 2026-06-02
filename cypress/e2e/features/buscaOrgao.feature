# language: pt
Funcionalidade: Busca de órgãos públicos no Portal da Transparência

  Cenário: Usuário acessa detalhes do Ministério da Saúde
    Dado que o usuário acessa o Portal da Transparência
    Quando pesquisa pelo órgão "Ministério da Saúde"
    Então os resultados de despesas devem ser exibidos

  Cenário: Usuário acessa a página inicial com sucesso
    Dado que o usuário acessa o Portal da Transparência
    Então a página deve carregar com o título correto