# flash-exercise (React + GraphQL + Apollo)
Exercício apresentado pela Flash Benefícios, com o objetivo de avaliar meus conhecimentos sobre lógica de programação, uso de API Rest e de banco de dados

As intruções de uso para a versão **(Express + React)** estão descritas na branch: [main branch](https://github.com/dgmolina/flash-exercise) 

## Instruções de uso

### 1. Copie o código fonte do projeto para uma pasta local, com o commando:<br>
`git clone --branch graphql https://github.com/dgmolina/flash-exercise.git`

### 2. Acesse a nova pasta criada:<br>
`cd flash-exercise`

### 3. Instale as dependencias necessárias para testar o projeto:
`npm run project-config`

### 4. Instancie a aplicação:

_Este passo difere para usuários Windows e usuários (Linux/Mac)_

**Windows**<br>
`npm run windows-dev`

**Linux/Mac**<br>
`npm run linux-dev`

### Acesse a interface Playground para interagir com o GraphQL: http://localhost:4000/

### Acesse a página do projeto em: http://localhost:3000/

![image](https://user-images.githubusercontent.com/44983053/114624597-58d7fc80-9c87-11eb-9b51-4707b811c01c.png)

## Referencias para o servidor
**Modelos**<br>
Empresa: [Empresa.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/models/Empresa.js)<br>
Funcionario: [Funcionario.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/models/Funcionario.js)

**Resolvers**<br>
Empresa: [companyResolver.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/resolvers/companyResolver.js)<br>
Funcionario: [employeeResolver.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/resolvers/employeeResolver.js)

**Types([types.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/typeDefs/types.js)), 
Queries([query.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/typeDefs/query.js)) 
e Mutations([mutation.js](https://github.com/dgmolina/flash-exercise/blob/graphql/backend-graphql/src/typeDefs/mutation.js))**
