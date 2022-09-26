
**PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS UNIDADE PRAÇA DA LIBERDADE
Engenharia de Software - Laboratório de Experimentação de Software
Laboratório 02
Prof. Laerte
Alunos: Lucas Fellippe e Vinícius Marini**

## Introdução

Neste laboratório são estudadas as principais características de sistemas populares open-source da linguagem JAVA. Por meio da API V4 do github o grupo teve acesso a dados dos repositórios marcados com maior número de estrelas no site [github.com](http://github.com/) e com esses dados foi possível fazer uma análise a respeito de suas tecnologias.

## Hipóteses iniciais

1.  Os repositórios mais populares apresentam melhores características de qualidade pois recebem mais atualizações e tem mais usuários procurando melhorias;
    
2.  Os repositórios mais antigos não necessariamente apresentam melhores características de qualidade pois por serem mais antigos, podem ter sido construído sob parâmetros de qualidade não tão apurados;
    
3.  Os repositórios com mais atividades apresentam melhores características de qualidade pois recebem mais atualizações e tem mais usuários procurando melhorias;
    
4.  Os repositórios de maiores tamanhos apresentam piores características de qualidade pois por serem maiores, são mais complexos e isso torna mais difícil corrigir problemas de qualidade.
    

## Metodologia

Para análise dos dados, foram coletadas informações via API V3 (GraphQl) do Github. Por meio de scripts foram retirados dados de cada repositório os dados básicos: name (nome do repositório), createdAt (data de criação), updatedAt (última atualização), pullRequests (nº de pull requests), releases(número de releases), primaryLanguage (linguagem principal), issuesclosed (issues fechadas), issuesopen (issues abertas), url, stargazerCount (quantidade de estrelas).

Após coletar os dados básicos dos repositórios. Foi utilizada a ferramenta CK ([https://github.com/mauricioaniche/ck](https://github.com/mauricioaniche/ck)) para extrair métricas de classe e métodos. Desses dados foram coletados: dit, lcom(mediana), loc, cbo(mediana). E para gerar os gráficos, foi utilizado o Google Sheet, excluindo os outliers.

## Resultados Obtidos

Popularidade x Qualidade

![](https://lh5.googleusercontent.com/XXCM2st5fx7LxFzdj1rSUo2wPR0VK1QyPxMF-IpBSTCxpBpCVIOZNMKleU1EgGlyZOrNoKEuPGlmaarBz7Bzk3_Z3Unz-2OtUdT5pW_8vxX8bayg8Z_suRci3AzTzf1x18xryFKTZoYGY0SsBaU-5u5nRHW3sLOdqO4NoMRUCXkIcPNVrnhYf95JAw "Gráfico")![](https://lh6.googleusercontent.com/rG5N_j1Huhp6Y0Q-YsT-V8xOevnRxNZa7Xkf9mNLnX8LVQW2_QODUgVTUOfZkhN0OyReb6r3TtfcWIA9Xci6rsKi2fBcWriGKGdAvJMDpMFylvBOc7uNVPLE7gs1M5iAoXTiZc2DMtdamB9GLAXRIOzdRc1AqARV332i5JZ7M1Z4ur1Yzw2AQIWN7w "Gráfico")
![](https://lh6.googleusercontent.com/8pMxLLvUpWpwB1HLl3LoYyzH6btE6aGY1JcyUKAVnR7i3SPpiwhOfxu6Hx1GtxOTZRjrXhI0C2EPRjCYLJ0mPD0c6ibTeS3DfOGdJP6gJjN3zoP-4TLA8-BkcYyj9atO7pNT_LczhzCD0hUTWxMKhHgtJ4PEAnYiYBOxPCkFKuBi8A_sfdXn7N6obw "Gráfico")

Maturidade x Qualidade

![](https://lh3.googleusercontent.com/dstSnIhsybNqem-ELbg-9E83H9PRxmy3ugWM-7PLC0wX_DcYOoXqA5SOpxRuXAs4yuzv8NYf3nt3U-k3-QO0uiM86CBHYQqTE_0fZMQXpJ0PpLZlpWCLvVCC71eAou7uZXNjW3wZTMB3w85mZEol7sf1pYxN-HT3eSXLUZBleo2SGGvMVAzkU2I9jw)![](https://lh4.googleusercontent.com/UDTVnqk7ublDnbrtiPReeYjYyIPWy4b1W9CHmmFRkSuGtBtdKUr2radjL70qQYn718-0UGfGXJWBPIHaq5hFxocFFHmpYtD5kXCtabMLey1d-Hovc4lur9JQMbeIjEUKNtsOW36wdIne-Mdtl9_pXLFtykzf0VKhS_qt4RzQOkuKfe0rYFv9RJNiFg "Gráfico")
![](https://lh3.googleusercontent.com/6ednf5SaJ3umWTdmg_zSiwm2ZChmT8Mx6vjYT844wr0iR0VwUwjPTJv3ZGP_BQCr5E1WvTAg0TEwpCALYrHVv4YDo1n-1Vr368ZCjSQ03xYUITWMRHddXOPPMhtUCMACgmSQg74-wGnINBEyHesJiq9Xl9XUZzxhpTxTN7UO-5Awgqfiaq0lCLyUAg "Gráfico")

Atividade x Qualidade

![](https://lh6.googleusercontent.com/9A5MPgzQYnDsGlaV4O9YC0tVJ_e653YDqcP2jtUQltBsBv2CSQLPOikon1qMiMut7AIEUNs_KQJCWih0EGTOUF3ltu9In2u7eHjcUEl4k7E_MWmKS-Xy_tw1drhHCTGjUI5QiFv2etBKqSLFarIqym0KEIkyglvksiYgV0f9yAtpdk7xRp-hE4CJDA)
![](https://lh5.googleusercontent.com/WI3B_rZljyxhz0oUSkAeAAhlN0abj4OJ-5qN63ooUs7wxALfuNZwb8kZnqurvsS3k_7JuSTfPSSBNZPSLt0l39qj6zaCUVVlUS88QnEg_kRvNE9oN9QZsDDmtatoZOsnIbeHUhPcZ-1iGKNKiQzqDJQF98mmCDUrHnc2JQFaJwgAhQZe_2sYeLSYcw)
![](https://lh6.googleusercontent.com/Zoxk-b0TKV7sN_tHOYElAKtBk3D2pHo2OF4MgCHBHzAX_ayzXlBB1OBNigJtAyDj40jQMR4N7lIoTG4Zru5Wkd3JE3SKG07FTHj3dd0Am93P1zBBknrFjuONbRKCd1QSgdictmH_sJW43Lw55dZy2-UM-8rmIVn6U36gjjy0NYe0eysONEtgnWYIVQ)

Tamanho x Qualidade
![](https://lh3.googleusercontent.com/gTZb9vKcLO6oRqs1THrWYx9nkJmCnt7TmysVKjzZ66_Imq7u_wIzlXA_5Pm3PVwj9NawJ0M6-r4Dt4IGl9rxbp8q3I_EUThTHb1TDLOq1ZTurt457C9OxPGP3BviH4bWlpOpMWHVsmar0DocFeGTndgowFLMSfIFKv8Tou4xlkALVeIM5hqm_J7xPQ "Gráfico")
![](https://lh4.googleusercontent.com/cJcR5SnJookWoQjyG2S9Jg7_LAE7yvCKaSxXNwQwu44_dSwRw_aKvB2FGWFyndUXfXoevqvmZhpAoG0E08BIPs3cjbQy5GPfHxuL_aPiANyWdfEIEM36SztTFBUMd922uVfVgd67U_5MAy6lCVWyYqyMtYFK9Abu8Ae1mk9FWJohnxWVussDX5L4uw "Gráfico")
![](https://lh4.googleusercontent.com/uG7hKjR67Q8bqdZp0lJQXtHVeBWgkkEqBC6KkYL7pwRNSUBpjAtC4LSq_KRpuOY5UGONL73uqkPz6Mlzg2WA21kw5VIh3HSpRV8AhC4h8CUbN-xJVHsdZpJq30MfGLSsIAm6XiAYsV3idAJEvrGc54NfP_yOIuvb9BeInZfmoVJI76ETrPptutn8sA "Gráfico")
Planilha: https://docs.google.com/spreadsheets/d/1HWB-YWuUVitvHxPEyoEQV_Prq3hf0inkm0bo9yoG-QI/edit?usp=sharing

Apresentação dos Resultados

Após análise dos dados e excluindo os outliers é possível ver os resultados da pesquisa. Nesse sentido, segue a análise das hipóteses iniciais:

1.  Os repositórios mais populares apresentam melhores características de qualidade pois recebem mais atualizações e tem mais usuários procurando melhorias;
    

Após resultados: PREENCHER

2.  Os repositórios mais antigos não necessariamente apresentam melhores características de qualidade pois por serem mais antigos, podem ter sido construído sob parâmetros de qualidade não tão apurados;
    

Após resultados: PREENCHER

3.  Os repositórios com mais atividades apresentam melhores características de qualidade pois recebem mais atualizações e tem mais usuários procurando melhorias;
    

Após resultados: PREENCHER

4.  Os repositórios de maiores tamanhos apresentam piores características de qualidade pois por serem maiores, são mais complexos e isso torna mais difícil corrigir problemas de qualidade.
    

Após resultados: PREENCHER

Link do repositório:  [https://github.com/lucaspere/lab1](https://github.com/lucaspere/lab1)
