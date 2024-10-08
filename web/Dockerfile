# frontend/Dockerfile

# Etapa 1: Construção da aplicação React
FROM node:18-alpine AS build

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Passar argumentos de build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL="http://localhost:5000/api"

# Construir a aplicação para produção
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:stable-alpine

# Remover arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos de build da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar a configuração personalizada do Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]