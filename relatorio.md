
** PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS

  

UNIDADE PRAÇA DA LIBERDADE**

  

**Engenharia de Software

  

Laboratório de Experimentação de Software

  

Laboratório 01

  

Prof. Laerte**

  
  

Alunos: Lucas Fellippe e Vinícius Marini

  
  

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

  

Após coletadas via Graphql, as informações foram processados em um script na linguagem Javascript e salvas em um documento CSV. Posteriormente, com as informações em CSV, foram gerados gráficos das principais informações buscadas.

  

## Resultados Obtidos

  

Com o processamento dos dados, foi possível obter resultados das hipóteses iniciais.

  

1. Após coleta e processamento de dados, no dia 24/08/2022, a média de idade dos 1000 repositórios analisados foi 6,53 anos e a mediana 7. O mais antigo tem 14 anos e o mais recente 0;

2. Os valores de média, mediana, máximo e mínimo do dia 24/08/2022 foram respectivamente 2.184,19, 423,00, 101.510,00, 0,00.

3. Os valores de média, mediana, máximo e mínimo do dia 24/08/2022 foram respectivamente 67,70, 18, 2.352,0.

4. Os valores de média, mediana, máximo e mínimo do dia 24/08/2022 foram respectivamente 0,04, 0,00, 3,00, 0,00.

5. Contagem das linguagens mais populares no dia 24/08/2022: JavaScript = 227, Python = 111, Java = 68, C# = 12, Shell = 23, C = 31, Ruby = 18.

6. A média dos percentuais de issues fechadas, no dia 24/08/2022, foi de 75,96% e a mediana 85,06%.

  
  

## Apresentação dos Resultados

  

1.  Sistemas populares são maduros/antigos?
    

  

![](https://lh4.googleusercontent.com/Y1FEsL7_UpV-UIqralz1zO4ds5PqUkuyvgvbyg-dwuaeTTM0b0cY0npfxnKM82ihuQ4B4pIzx5esNBtNdwXzFcuBV2-NjJjcowuUKWEbAcw_MBBWd7U27ZiWYTiqfZkoc4VJ0oLRAZSd0Uf2uAl2ytM)

*   O sistema mais antigo tem 14 anos de existência e o mais novo tem nem 1 ano. A mediana dos valores é de 7 anos.
    

2.  Sistemas populares recebem muita contribuição externa?
    

![](https://lh6.googleusercontent.com/8mgRYA-idVosPv63sQeYi2xaiQIsI_tnetpDcNaT_LPLv9T0_Ry-FfTmf3TL92q__Nkb2kVL6dD7AacecGBIQt-eAruEtsTSywrSBJafmbUy0Hmpn6vVrRvt6qwSVzf5CVQV2mDGcQiSj6jassVEJTA)
    
*  O maior número de contribuição em um sistema é de 101.517, o mínimo é de 0. A mediana dos valores é de 434.
    

  
  

3.  Sistemas populares lançam releases com frequência?
    

![](https://lh4.googleusercontent.com/BH7x5LwhXLdQ1XAMumjvnGGwVj6sjKgtGPT5JboYPGmxUkuOZ6GLrbebHlmt2HAYF827oCe5OUpc_9e-iWd5koLmF0OvKNtQz4bE5zQ0mUe96Vb7L8kfYpSz6LMFDwMrzaibM1UGJH2JnZmQrRLxuZU)
    
* O maior número de releases de um sistema é de 2352, o mínimo é de 0. A mediana dos valores é de 19.
    

  

4.  Sistemas populares lançam releases com frequência?
    

![](https://lh4.googleusercontent.com/L2Y1IqJD17Xfctte1Zq42mueJtbyvPgc4KBd3Soc01Z6Vt0O4ksLSHhMrG_oNjm0fIyJqVKCi0Nv9mev4t6aOFzurSG8Q3Pi18d-pMbSVvv-qeQB8ygnB837ZFXlsX7CeW-twIyeIaNaXelMgFJo684)
    
* O valor mínimo é de 1 dia, assim como a mediana. O maior valor de dias sem atualização é de 4 dias.


5.  Sistemas populares são escritos nas linguagens mais populares?
    

![](https://lh3.googleusercontent.com/KR1PlW8dhTo4ZoeTLjIoMQh2MCEHiUTl-HAuhazru7onP4Lv8KtGuoZqjIyNqd6SwHQRgN4vmiMpQwnP28LreGYWWZms9VyGeao67Zoj7aQt0MOVXJnQ9TgpGyOIUPkxarZEDIS_5gGIrJVLnN4I0yk)
    
* Javascript é a linguagem que mais aparece, com 23%. Seguido com Python 11%, Java 7%, C 3%, Ruby 2% e C# 1%. A categoria Outros se refere ao somatório de outras linguagens que é de 51%.
    

  

6.  Sistemas populares possuem um alto percentual de issues fechadas?
    
 ![](https://lh6.googleusercontent.com/wENqyyWD4JPxV5i2JgRmgOhZxYKLkq-D-eKcwjlIVmUzEAtxpyYwDd1xIzG3HqhacQZPqcfcJtyccmN5ku4Qpj7yiPbzptB9tDhjwZ1SVZYCHM3nvVQTIQwsCzBR5HSfmmOOB9gx1gGKlKJ8dt2wr50)
    
*  O maior percentual é de 100%, o menor é de 0%. A mediana dos percentuais é de 33,87%.
 

**Link dos resultados:** https://docs.google.com/spreadsheets/d/1vfV5Z0bgLPvZEYPO9iGQB933sjlRAf1Af8NeJCCzf8U/edit?usp=sharing

  

## Discussão das hipóteses

  

Após processamento e coleta de dados e com os resultados obtidos, avaliamos as hipóteses iniciais.

  

1. “Os sistemas populares não são necessariamente os mais maduros, pois Linguagens “da moda”, criadas recentemente atraem muitos usuários”. Tendo em vista os resultados encontrados, media (6,53), mediana (7) e moda (8), sendo que o mais antigo tem 14 anos e o mais recente 0, nossa hipótese inicial se confirmou.

  

2. “Acreditamos que os sistemas mais populares têm maior número de contribuição pelo fato de estarem em alta entre os desenvolvedores.” Os dados não foram conclusivos, tendo em vista a grande variação entre os repositórios.

  

3. “Os Sistemas populares lançam releases com frequência pois por terem grande número de usuários, caso exista algum bug ou melhoria, a comunidade encontrará.” Os dados não foram conclusivos, tendo em vista a grande variação entre os repositórios.

  

4. “Sistemas populares são atualizados com frequência pois por terem grande número de usuários, caso exista algum bug ou melhoria, a comunidade encontrará.” Sim, essa hipótese se confirma, os repositórios tiveram um tempo de atualização de no máximo 4 dias no período analisado.

  

5. “Sistemas populares são sim escritos nas linguagens mais populares pelo fato de que na maioria dos casos, essas são linguagens “melhores” para o desenvolvimento.” Não necessariamente, o percentual das linguagens populares não superou o restante e teve python e javascript como principais linguagens.

  

6. “Sistemas populares não possuem um alto percentual de issues fechadas, pois possuem muitas issues, logo o percentual pode ser baixo apesar do número de issues fechadas ser alta.” Os sistemas poupulares possuem alto percentual de issues fechadas, logo nossa hipótese estava incorreta.

  

7. “Sistemas escritos em linguagens mais populares recebem mais contribuição externa, lançam mais releases e são atualizados com mais frequência. Pois possuem uma forte comunidade que está sempre buscando melhorias.”  Os dados não foram conclusivos, tendo em vista a grande variação entre os repositórios. 

  
  

**Link do repositório:** https://github.com/lucaspere/lab1
