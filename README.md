# Projeto Car Shop!

<h3> Trata-se da construção de uma API com `CRUD` para gerenciar uma concessionária de veículos! </h3>

<br/>

## Descricao do Projeto

Projeto desenvolvido no bloco 30 - Modulo 3 - Desenvolvimento em BackEnd na turma 17 - Trybe. Conteudos aplicados: Typescript, POO, SOLID, Arquitetura MSC, MongoDB e ODM Mongoose.

<br/>

## Desenvolvimento

- Desenvolver uma API com `CRUD`, feita em arquitetura MSC e seguindo os princípios de POO, de forma que ela possa crescer e pasasr por mudanças.

- Aplicar testes unitários - `TDD` para cobertura de todas as camadas da arquitetura.

- Aplicar os pilares de POO, utilizar o ODM Mongoose e conexão com banco de dados MongoDB.

<br/>

## Habilidades desenvolvidas

- Exercitar o conhecimento dos pilares da Programação Orientada a Objetos: 
    > Herança, Abstração, Encapsulamento e Polimorfismo;
- Exercitar a utilização de Composição;
- Exercitar a criação e utilização de Interfaces;
- Implementar, em TypeScript: Classes, Instâncias, Atributos, Métodos e Objetos;
- Aplicar os conhecimentos de MongoDB, Typescript e POO para criar uma API com `CRUD`;
- Aplicar testes unitários nas camadas para atingir a cobertura de 80%.

<br/>

## Tecnologias utilizadas

- Typescript;
- Docker;
- Node.js;
- Express;
- Typescript;
- MongoDB;
- Testes unitários com mocha, chai e sinon;
- Eslint;
- Zod;
- POO.

<br/>

## Colaboradores

Projeto realizado individualmente.

<br/>

## Status

Finalizado.

<br/>

## Desempenho

100% nos requisitos totais.

<br/>

# Requisitos

## Requisitos Obrigatórios

### 01 - Crie a interface `IModel` genérica

---

### 02 - Crie a interface `IVehicle` genérica

Crie a interface `IVehicle`, que será usada para criarmos nossos tipos de carro, moto e caminhão.
Ela deverá ter todos os atributos comuns de todos os veículos que listaremos aqui. São eles:

 | Atributo | Descrição |
 | :-------: | :-------- |
 | `model`   | Marca e/ou modelo do veículo. Deve ser uma string com, pelo menos, 3 caracteres |
 | `year`    | Ano de fabricação do veículo. Deve ser maior ou igual a 1900, porém menor ou igual a 2022 |
 | `color`   | Cor principal do veículo. Deve ser uma string com, pelo menos, 3 caracteres |
 | `status`  | Status que define se um veículo pode ou não ser comprado. Deve receber valores booleanos e deve ser opcional |
 | `buyValue` | Valor de compra do veículo. Deve receber apenas números inteiros |

---

### 03 - Crie a interface `ICar` a partir da interface `IVehicle`

Crie a interface `ICar`, de modo que ela possua todos os atributos da interface `IVehicle` e, também, os atributos:

 | Atributo  | Descrição |
 | :--------: | :-------- |
 | `doorsQty` | Quantidade de portas de um carro. Deve ser maior ou igual a 2 e menor ou igual a 4 |
 | `seatsQty` | Quantidade de assentos disponíveis no carro. Deve ser maior ou igual a 2 e menor ou igual a 7 |

---
 
### 04 - Crie uma rota para o endpoint `/cars` onde seja possível cadastrar um novo carro

---

### 05 - Escreva testes para cobrir 15% da camada de Model

---

### 06 - Escreva testes para cobrir 15% da camada de Service

---

### 07 - Escreva testes para cobrir 15% da camada de Controller

---

### 08 - Crie uma rota para o endpoint `/cars` onde seja possível listar todos os carros registrados

---

### 09 - Crie uma rota para o endpoint `/cars/id` onde seja possível listar um único carro através do seu id

---

### 10 - Escreva testes para cobrir 30% da camada de Model

---

### 11 - Escreva testes para cobrir 30% da camada de Service

---

### 12 - Escreva testes para cobrir 30% da camada de Controller

---

### 13 - Crie uma rota para o endpoint `/cars/id`, onde é possível atualizar o registro de um carro através do seu id

---

### 14 - Escreva testes para cobrir 60% da camada de Model

---

### 15 - Escreva testes para cobrir 60% da camada de Service

---

### 16 - Escreva testes para cobrir 60% da camada de Controller

---

### 17 - Crie uma rota para o endpoint `/cars/id` para excluir os registros de um carro

---

## Requisitos Bônus

### 18 - Crie a interface `IMotorcycle` a partir da Interface `IVehicle`

Crie a interface `IMotorcycle`, de modo que ela possua todos os atributos da interface `IVehicle` e, também, os atributos:

 | Atributos        | Descrição |
 | :--------------: | :-------- |
 | `category`       | Categoria da moto. Deve poder ser **apenas** `Street`, `Custom` ou `Trail` |
 | `engineCapacity` | A capacidade do motor. Deve ser um valor inteiro positivo menor ou igual a 2500 |

---

### 19 - Crie uma rota para o endpoint `/motorcycles` onde seja possível cadastrar uma nova moto

---

### 20 - Crie uma rota para o endpoint `/motorcycles` onde seja possível listar todas as motos registradas

---

### 21 - Crie uma rota para o endpoint `/motorcycles/id` onde seja possível listar uma única moto através do seu id

---

### 22 - Crie uma rota para o endpoint `/motorcycles/id` onde é possível atualizar o registro de uma moto através do seu id

---

### 23 - Crie uma rota para o endpoint `/motorcycles/id` para excluir os registros de uma moto

---

### 24 - Escreva testes para cobrir 90% da camada de Model

---

### 25 - Escreva testes para cobrir 90% da camada de Service

---

### 26 - Escreva testes para cobrir 90% da camada de Controller

---

## Requisitos não avaliativos

### 27 - Escreva testes para cobrir 100% da camada de Model

---

### 28 - Escreva testes para cobrir 100% da camada de service

---

### 29 - Escreva testes para cobrir 100% da camada de controller

---
