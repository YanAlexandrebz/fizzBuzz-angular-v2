# Stage 1: Gerar arquivos do projeto /dist
FROM node:14 as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install -g @angular/cli@12 --unsafe
RUN ng build

# Copiar arquivos do projeto para o NGINX
FROM nginx:1.21.1-alpine
COPY --from=builder /usr/src/app/dist/fizzbuzz /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -f .Dockerfile -t fizzbuzz .

# docker run --name fizzbuzz -d -p 9021:80 fizzbuzz

############### SUBIR NO HUB.DOCKER.COM ###############
# $ docker build -t <nome_de_usuario_hubdocker>/atividadedocker <caminho_do_dockerfile>
# $ docker run -d --name=atividadedocker -p 80:80 <nome_de_usuario_hubdocker>/atividadedocker
# $ docker push  <nome_de_usuario_hubdocker>/atividadedocker