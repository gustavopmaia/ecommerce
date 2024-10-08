# frontend/Dockerfile

# Imagem base
FROM node:18-alpine as build

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Servir a aplicação usando Nginx
FROM nginx:stable-alpine

# Copiar os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 8081

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]