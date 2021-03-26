### react-juros-compostos

#### Objetivo
Criar uma aplicação com React para realizar cálculo de valorização/depreciação, com base em um capital inicial, taxa de juros mensal e quantidade de parcelas mensal, utilizando o conceito de juros compostos.

#### Outras considerações
1. O projeto foi criado com o pacote create-react-app
2. A implementação da manipulação do estado da aplicação foi feita com React Hooks
3. Optou-se por limitar o valor do capital inicial de até R$ 100.000, taxa de juros entre -12% e 12% ao mês e parcelas de 1 a 36
4. A aplicação foi quebrada em quatro componentes: <App />, <Form /> (com os 3 inputs), <Installments /> e <Installment />
