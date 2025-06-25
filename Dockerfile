# Usar imagem oficial do NGINX
FROM nginx:alpine

# Remover arquivos padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos do seu projeto para o diretório padrão do NGINX
COPY src/ /usr/share/nginx/html/

# Expor a porta padrão do NGINX
EXPOSE 80

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
