# Atividade 2 -  Sistemas distribuidos

## Como rodar

Clone o repositório do gateway:
```
git clone https://github.com/jose-farley/SD-Atividade-2-Gateway
```
Clone o repositório da API de Comentários:
```
git clone https://github.com/jose-farley/SD-Atividade-2-API-Comentarios
```
Em cada pasta dos repositórios que você clonou utilize os comandos abaixo:
```
yarn install
```
```
yarn dev
```

obs.: Na pasta do Gateway você deve criar um arquivo .env na raiz do projeto e adicionar as seguintes varáveis de ambiente

DATABASE_URL = <"sua database">
PORT = <"Porta que você deseja que aplicação rode">

Por padrão o Gateway vai rodar na porta 3000, e front-end na porta padrão do REACT 5173.

## Exemplo de fluxo da aplicação
Link: https://www.figma.com/file/JrpQeBRiZFFGL7x0IjhBW8/BooksAPI?type=design&node-id=0-1&mode=design&t=BnjnvfyBZhHChCYv-0

## SWAGGER

Utilizei o SWAGGER para documentar as rotas do GATEWAY. Você pode acessar a documentação no seguinte endereço

```
http://localhost:3000/docs/
```

