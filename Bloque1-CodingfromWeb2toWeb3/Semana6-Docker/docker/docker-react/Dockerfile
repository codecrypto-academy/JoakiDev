# Coge una imagen inicial de node y la podemos llamar como queramos (en este caso, 'builder')
FROM node AS builder

# Directorio que puedo llamar como quiera. Representará el directorio raíz de la aplicación
WORKDIR /app

# Copia todo lo que haya en el directorio de la aplicación al directorio del contenedor, 
# excepto lo que se haya marcado como ignorable en .dockerignore
COPY . .

# Ejecutar yarn para traer los módulos
RUN yarn

# Ejecutar comando de compilación para producción
RUN yarn build

# Coge una imagen de nginx
FROM nginx

# Copiamos el contenido resultado de la compilación (/app/dist) al directorio de nginx (/usr/share/nginx/html)
COPY --from=builder /app/dist /usr/share/nginx/html

# Define el puerto "contenedor". Es decir, el interno (el que se define a la derecha de ':' en docker run)
EXPOSE 80

# Especificamos el comando que se lanzará como un array del comando y sus parámetros
CMD ["nginx", "-g", "daemon off;"]