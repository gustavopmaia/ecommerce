# backend/Dockerfile

# Imagem base
FROM node:18-alpine

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que o servidor irá rodar
EXPOSE 8080

# Comando para iniciar o servidor
CMD ["npm", "start"]
