# Simulação de Financiamento Imobiliário

Esta é uma pequena aplicação feita em **Javascript + Bootstrap** com a finalidade de realizar simulações de financiamentos imobiliários para que você possa ver qual é a melhor forma de pagamento para você adquirir um imóvel.

## Sistema de Amortização Constante (SAC)
A simulação utiliza o modelo de Sistema de Amortização Constante (SAC), que é o mais utilizado pelos bancos. Nesse sistema, o saldo devedor é dimiuído em valores de amortização iguais, fazendo que com o valor das prestações seja decrescente, já que os juros diminuem a cada prestação.

O cálculo para saber o valor da amortização é: VALOR DO IMÓVEL / PRAZO. Perceba que quanto maior o prazo de financiamento, menor será a amortização, e maior será o valor dos juros pago ao final do financiamento. Faça simulações neste sentido para comprovar.

## Aplicação
Os valores iniciais são baseados em valores pegues na página de [Simulação da Caixa Econômica Federal](http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso), em abril de 2019. Portanto, é bom verificar quais são as taxas de juros e os valores cobrados pelas seguradoras.

Caso exista alguma funcionalidade que você gostaria de ver, favor informar criando uma issue, ou mandando uma pull request.

## Antes de comprar...
Lembre-se que quando você for fazer um financiamento imobiliário, o banco cobrará algumas taxas para você para que ele possa conceder o financiamento. Eles normalmente cobram pela avaliação de um engenheiro, e para que você possa usar o saldo do FGTS. Portanto, antes de realizar o contrato de financiamento com banco, é bom que você verifique os valores destas taxas.

Além disso, faça as contas para ver quanto será pago com:
- Cartório
- ITBI
- Reforma do imóvel / Móveis
- Eletrodomésticos, eletrônicos, sofá, cama, lâmpadas, chuveiros, ....
- IPTU
- Condomínio
- Taxas extras do condomínio
- Água
- Gás

Enfim, coloque tudo na ponta do lápis para não passar sufoco lá na frente.

Caso esteja comprando um imóvel na planta, para receber daqui a 3 anos por exemplo, você calculou/pensou:

- O quanto você irá pagar de juros? (Caso você não pague a vista, o saldo devedor é reajustado mensalmente por algum índice, normalmente o INCC)
- O quanto este dinheiro renderia se estivesse aplicado?
- Imaginou que talvez a construtora possa atrasar a entrega em mais 2 anos?
- Imaginou que talvez a construtora venha a falência e não entregue a obra?
- Pensou que você estará pagando algo agora para usufruir só daqui a 3 anos?
- Pensou que o ditado popular 'Valor do imóvel sempre sobe!' possa ser mentira? E é!

## Referências
- [Simulação da Caixa Econômica Federal](http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso)
- [Sistema de Amortização Constante](http://fazaconta.com/financiamentos-tabela-sac.htm)
- [Índices financeiros que reajustam contratos de imóveis](http://www.revistaqualimovel.com.br/noticias/veja-quais-os-indices-financeiros-que-reajustam-contratos-de-imoveis)