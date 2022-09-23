# SEE 

O projeto SEE surge com a idéia de ser uma plataforma de streaming gratuita, proporcinando aos seus usuários mídias com alta qualidade e máxima eficiência de uso.

# Requisitos
1. Node.js.
2. NPM.
3. Docker.
4. PGAdmin (ou qualquer outro banco de sua preferência).
5. Yarn.
6. sequelize.

# Clonar o repositório
1. Copiar o link do repositório e clonar onde irá utilizar.
2. Rodar o comando "npm install" na pasta raiz do projeto para instalar as dependências.

# Rodando a aplicação
"docker-compose up" -> serve para subir o banco de dados e o pgadmin caso não tenha o banco instalado em sua máquina. 
"npm start" -> serve para subir a aplicação.
"yarn sequelize db:create" -> serve para criar o banco de dados.
"yarn sequelize migration:create --name=nomeDaTabelaASerCriada" -> serve para criar uma tabela no banco de dados.
"yarn sequelize db:migrate" -> serve para criar as tabelas no banco de dados.

# Link para fonte do front-end
https://github.com/dudaguadagnin/SeeFrontend