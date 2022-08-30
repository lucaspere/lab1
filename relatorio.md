
**PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS UNIDADE PRAÇA DA LIBERDADE**

  

  

**Engenharia de Software - Laboratório de Experimentação de Software**

  

  

**Laboratório 01**

  

  

**Prof. Laerte**

  

  

**Alunos: Lucas Fellippe e Vinícius Marini**

  

  

## Introdução

  

  

Neste laboratório são estudadas as principais características de sistemas populares open-source. Por meio da API V4 do github o grupo teve acesso a dados dos repositórios marcados com maior número de estrelas no site github.com e com esses dados foi possível fazer uma análise a respeito de suas tecnologias.

  

  

## Hipóteses iniciais

  

  

1. Os sistemas populares não são necessariamente os mais maduros, pois Linguagens “da moda”, criadas recentemente atraem muitos usuários.

  

2. Acreditamos que os sistemas mais populares têm maior número de contribuição pelo fato de estarem em alta entre os desenvolvedores.

  

3. Os Sistemas populares lançam releases com frequência pois por terem grande número de usuários, caso exista algum bug ou melhoria, a comunidade encontrará.

  

4. Sistemas populares são atualizados com frequência pois por terem grande número de usuários, caso exista algum bug ou melhoria, a comunidade encontrará.

  

5. Sistemas populares são sim escritos nas linguagens mais populares pelo fato de que na maioria dos casos, essas são linguagens “melhores” para o desenvolvimento.

  

6. Sistemas populares não possuem um alto percentual de issues fechadas, pois possuem muitas issues, logo o percentual pode ser baixo apesar do número de issues fechadas ser alta.

  

7. Sistemas escritos em linguagens mais populares recebem mais contribuição externa, lançam mais releases e são atualizados com mais frequência. Pois possuem uma forte comunidade que está sempre buscando melhorias.

  

  

## Metodologia

  

  

Depois de delimitado o tema e as hipóteses inicias, fora iniciada a etapa de coleta e processamento de dados. Os dados abordados são provenientes da API V4 do Github. Nesse contexto, foram coletados os dados dos repositórios mais populares na plataforma Github, tendo em vista o número de estrelas (marcação feita na página do repositório).

  

  

Após coletadas via Graphql, as informações foram processados em um script na linguagem Javascript e salvas em um documento CSV. Posteriormente, com as informações em CSV, foram gerados gráficos das principais informações buscadas via Google Sheets.

  

  

## Resultados Obtidos

  

  

Com o processamento dos dados, foi possível obter resultados das hipóteses iniciais.

  

  

1. Após coleta e processamento de dados, no dia 30/08/2022, a média de idade dos 1000 repositórios analisados foi 6,66 anos e a mediana 7. O mais antigo tem 14 anos e o mais recente 0;

  

2. Os valores de média, mediana, máximo e mínimo das pull requests do dia 30/08/2022 foram respectivamente (2.218,34),(434,50), (101.538,00), (0).

  

3. Os valores de média, mediana, máximo e mínimo de releases do dia 30/08/2022 foram respectivamente (69,13), (20), (2384), (0).

  

4. Os valores de média, mediana, máximo e mínimo de dias sem atualizações do dia 30/08/2022 foram respectivamente (0,07), (0), (4,00), (0).

  

5. Contagem das linguagens mais populares no dia 30/08/2022: JavaScript = 227, Python = 111, Java = 68, C# = 12, Shell = 23, C = 31, Ruby = 18.

  

6. A média dos percentuais de issues fechadas, no dia 30/08/2022, foi de 76,51% e a mediana 85,39%.

  

## Apresentação dos Resultados

  

  

1. Sistemas populares são maduros/antigos?

  

  

![](https://lh6.googleusercontent.com/ftuu1rOZWvyr1fZ6YKpjm1hqt4F1q9SJuhhuyv5okX7O1PoRvEw8yTEHnLnuHJO5I-Ko3F8jcj4iJ7fLZQMKDf1lA-L2VcCCqCZCOSXkmavXIwrdV6_5I0GDW2TdpGazIV1fVHMf4fkoBkXKtAYlFTU)

  

2. Sistemas populares recebem muita contribuição externa?

![](https://lh6.googleusercontent.com/KrCYO70J4nt81pnARlU5x-G63WzaLRIgr75i1dKlU8svcL3rQCTrpmt1YoJdGMD13BeoJ8gsZ5modXc3U8WOiw5puU8028Isg86QSIwYXxrUgLXI-3EtKYp8eUKMfuhVd49U1Ki-uxMc51VfdmzoqnI)

  

3. Sistemas populares lançam releases com frequência?

![](https://lh5.googleusercontent.com/Uz5eZKFJ-Tmg_4KaUvffzjI5Pq-WIkHpXHweyJMPIS-4a0O1cB3sx_-yNO9_I77JXxOOcww71nPWljrv8vm9jq-0XlUNXT8tadZ6KkIjY_N-EBhP2GihQmNQNLykzEzRC7uZ0vY3QAjU1WWH0fT2dIA)

4. Sistemas populares são atualizados com frequência?

![](https://lh4.googleusercontent.com/G5lA2wgXW1lMvieoUFfkfeeNgLtv4ZJxGs8TC9U3546du_ImqIDIs_JiN7vZkAWjMdgUfbUADPey6vpNnm5wlOmuTo2icXlwBGKIkKk4OfcTYl_oZuE6Ka9OUYAG4f0kSCE-Deqn1wzec6G4RXoClXc)

  

5. Sistemas populares são escritos nas linguagens mais populares?

![](https://lh4.googleusercontent.com/ahdDBZXx_aNljdwRIr7BBplcI10lSHhP-bw8n9UYnxjBf1yepwogg24LrPI6_SyMOmxXGQ9YWCYXH7xoInsHACxPLr8aL1rIHYXKFyYtrLKtLuWADKayYSVWG5NOSQqn96rAYHiI0_Y2LlSC2WwWA4E)

  

6. Sistemas populares possuem um alto percentual de issues fechadas?

  

![](https://lh6.googleusercontent.com/BMsjWywh84MqWffbabC2bPErjr9Vb760NJptApD4Dw5vl2uyyPE_fvndOWftJJDwyooLXA31KlwidSRyd8nKu3XkEa2cMitIXw_i3LtsR5dBSJbLSMHQZtwacnZXAHLc60YGNRWpNuT1kzPWuAQbLNr5BwETaPoT1ndK1tpWZJrilKnWHuB5exqdHg)

  

**Link dos resultados:** https://docs.google.com/spreadsheets/d/1rvEqq_hc0SyoBJw0Se2WahGf3-ix-UISfy3YlfdhYPY/edit?usp=sharing

  

  

## Discussão das hipóteses

  

  

Após processamento e coleta de dados e com os resultados obtidos, avaliamos as hipóteses iniciais.

  

  

1. “Os sistemas populares não são necessariamente os mais maduros, pois Linguagens “da moda”, criadas recentemente atraem muitos usuários”. Tendo em vista os resultados encontrados, nossa hipótese inicial se confirmou.

  

  

2. “Acreditamos que os sistemas mais populares têm maior número de contribuição pelo fato de estarem em alta entre os desenvolvedores.” Essa hipótese se confirmou. 

  

  

3. “Os Sistemas populares lançam releases com frequência pois por terem grande número de usuários, caso exista algum bug ou melhoria, a comunidade encontrará.” Tendo em vista o numero da mediana e média comparados ao máximo, nossa hipótese não se confirmou. 

  

  

4. “Sistemas populares são atualizados com frequência pois por terem grande número de usuários, caso exista algum bug ou melhoria, a comunidade encontrará.” Sim, essa hipótese se confirma, os repositórios tiveram um tempo de atualização de no máximo 3 dias no período analisado.

  

  

5. “Sistemas populares são sim escritos nas linguagens mais populares pelo fato de que na maioria dos casos, essas são linguagens “melhores” para o desenvolvimento.” Não necessariamente, o percentual das linguagens populares não superou o restante e teve python e javascript como principais linguagens.

  

  

6. “Sistemas populares não possuem um alto percentual de issues fechadas, pois possuem muitas issues, logo o percentual pode ser baixo apesar do número de issues fechadas ser alta.” Os sistemas populares possuem alto percentual de issues fechadas, logo nossa hipótese estava incorreta.

  

  

7. “Sistemas escritos em linguagens mais populares recebem mais contribuição externa, lançam mais releases e são atualizados com mais frequência. Pois possuem uma forte comunidade que está sempre buscando melhorias.” Os dados não foram conclusivos, tendo em vista a grande variação entre os repositórios.

  

  

**Link do repositório:** https://github.com/lucaspere/lab1
