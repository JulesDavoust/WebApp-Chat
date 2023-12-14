FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g pm2
EXPOSE 8080
CMD ["pm2-runtime", "server.cjs", "--name", "my-app"]