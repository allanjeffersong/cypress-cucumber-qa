# language: pt
Funcionalidade: Consulta de gastos no Portal da Transparência

  Cenário: Usuário realiza busca por órgão com sucesso
    Dado que o usuário acessa o Portal da Transparência
    Quando pesquisa pelo órgão "Ministério da Educação"
    Então os resultados de despesas devem ser exibidos

  Cenário: Usuário busca fornecedor por CNPJ válido
    Dado que o usuário acessa a busca de fornecedores
    Quando informa o CNPJ "00.394.460/0100-27"
    Então os dados do fornecedor devem ser apresentados