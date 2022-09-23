
**PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS UNIDADE PRAÇA DA LIBERDADE**

**Engenharia de Software - Laboratório de Experimentação de Software**

**Laboratório 02**

**Prof. Laerte**

**Alunos: Lucas Fellippe e Vinícius Marini**

## Introdução

Neste laboratório são estudadas as principais características de sistemas populares open-source da linguagem JAVA. Por meio da API V4 do github o grupo teve acesso a dados dos repositórios marcados com maior número de estrelas no site github.com e com esses dados foi possível fazer uma análise a respeito de suas tecnologias.

## Hipóteses iniciais

1. Os repositórios mais populares apresentam melhores características de qualidade pois recebem mais atualizações e tem mais usuários procurando melhorias;
2. Os repositórios mais antigos não necessariamente apresentam melhores características de qualidade pois por serem mais antigos, podem ter sido construído sob parametros de qualidade não tão apurados;
3. Os repositórios com mais atividades apresentam melhores características de qualidade pois recebem mais atualizações e tem mais usuários procurando melhorias;
4. Os repositórios de maiores tamanhos apresentam piores características de qualidade pois por serem maiores, são mais complexos e isso torna mais difícil corrigir problemas de qualidade.

## Metodologia

Para análise dos dados, foram coletadas informações via API V3 (GraphQl) do Github. Por meio de scripts foram retirados dados de cada repositório os dados básicos: name (nome do repositório), createdAt (data de criação), updatedAt(última atualização), pullRequests(nº de pull requests), releases(número de releases), primaryLanguage(linguagem principal), issuesclosed(issues fechadas), issuesopen(issues abertas), url, stargazerCount(quantidade de estrelas).

Após coletar os dados básicos dos repositórios. Foi utilizada a ferramenta CK (https://github.com/mauricioaniche/ck) para extrair métricas de classe e métodos. Desses dados foram usados (dit,lcom,loc,cbo).

## Resultados Obtidos

## Apresentação dos Resultados

## Discussão das hipóteses

**Link do repositório:** https://github.com/lucaspere/lab1
